var cloudinary = require('cloudinary').v2;

async function imageuploader(file,foldername){
    let result;
    try {
         result=await cloudinary.uploader.upload(file.tempFilePath,{
            folder:foldername,
            allowed_formats:["jpg","png"],
            
        })
        return result;
    } catch (error) {
      return  console.log(error);
        
    }
}

module.exports=imageuploader;