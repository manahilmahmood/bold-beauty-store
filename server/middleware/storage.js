import multer, { diskStorage } from "multer";
import path from "path";
import randomstring from "randomstring";

const fileType = (file,cb)=>{
    let allow = /png|jpg|jpeg|gif|webg/;

    let isMatch = allow.test(path.extname(file.originalname).toLowerCase())

    let mime = allow.test(file.mimetype);

    if(mime && isMatch){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

export const upload = multer({
  storage: diskStorage({
    destination: "./public/profile",

    filename: (req, file, cb) => {
      let p1 = randomstring.generate(8);

      let ext = path.extname(file.originalname).toLowerCase();

      cb(null, file.fieldname + "_" + p1 + ext);
    },
  }),
  limits: {
    limitSize: 1000000 * 2,
  },

  fileFilter: (req, file, cb) => {
    fileType(file, cb);
  },
}).single("profile");












