const express    = require('express');
const mongoose   = require('mongoose');
const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const bluebird   = require('bluebird');
var ObjectID = require('mongodb').ObjectID;


const config = require('./config');
const routes = require('./src/routes/index');

const app  = express();

mongoose.Promise = bluebird;
mongoose.connect(config.mongo.url);

var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: "./uploads"});
var conn = mongoose.connection;
var gfs;
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
conn.once("open", function() {
    gfs = Grid(conn.db);
    /*app.get("/", function(req,res){
        //renders a multipart/form-data form
        res.render("home");
    });*/

    //second parameter is multer middleware.
    app.post("/upload", upload.single("avatar"), function(req, res, next){
        //create a gridfs-stream into which we pipe multer's temporary file saved in uploads. After which we delete multer's temp file.
        console.log(req.file);
        var objectId = new ObjectID();
        var writestream = gfs.createWriteStream({
            _id : objectId,
            filename: req.file.originalname
        });
        //
        // //pipe multer's temp file /uploads/filename into the stream we created above. On end deletes the temporary file.
        fs.createReadStream("./uploads/" + req.file.filename)
            .on("end", function(){fs.unlink("./uploads/"+ req.file.filename,
                function(err){res.send(
                    {objectId: objectId,
                    fileName: req.file.originalname})})})
            .on("err", function(){res.send("Error uploading image")})
            .pipe(writestream);
        return writestream;

    });

    // sends the image we saved by filename.
    app.get("/images/:fileId", function(req, res){
        var readstream = gfs.createReadStream({_id: req.params.fileId});
        readstream.on("error", function(err){
            res.send("No image found with that Id");
        });
        readstream.pipe(res);
    });

    //delete the image
    app.get("/delete/:filename", function(req, res){
        gfs.exist({filename: req.params.filename}, function(err, found){
            if(err) return res.send("Error occured");
            if(found){
                gfs.remove({filename: req.params.filename}, function(err){
                    if(err) return res.send("Error occured");
                    res.send("Image deleted!");
                });
            } else{
                res.send("No image found with that title");
            }
        });
    });
});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

//create a cors middleware
app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/', routes);

app.listen(config.server.port, () => {
    console.log(`Environment: ${config.environment}`);
    console.log(`Application started on port: ${config.server.port}`);
    console.log(`MongoDB URL: ${config.mongo.url}`);
});

module.exports = app;
