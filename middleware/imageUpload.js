// const multer=require('multer')
// const path=require('path')
// const imageStorage=multer.diskStorage({
//     destination:function(request,file,callback){
//         callback(null,'uploads/')
//     },
//     filename:function(request,file,callback){
//         callback(null,Date.now() + '_' + file.originalname)
//     }
// })


// const imageUpload=multer({
//     storage:imageStorage,
//     fileFilter:function(request,file,callback){
//         if(file.mimetype == 'image/jpg' || file.mimetype == '/image/png'){
//             callback(null,true)
//         }
//         else{
//             console.log('file format not supported')
//             callback(null,false)
//         }
//     }

// })
// module.exports=imageUpload