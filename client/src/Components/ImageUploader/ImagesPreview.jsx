import React from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import { UploadCover } from "../ImageUploader/UploadCover";
const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%"
  };

  

 const ImagesPreview = ({images,uploadImages}) => {

   const coverUrl = images[0];
   const restImages =  images.map((image,index) =>(
       
           
                    <div className = "col-md-12">
                    <img style={imgStyle} key={index} src={image}/> 
                    </div>
           
        
  
));

    return (
     
        <div className="row">
        <UploadCover image = {coverUrl} style={imgStyle}/>
        <div className="col-md-3">
                <div className="row">
                      {restImages}
                                     
                </div>
            </div>
           <div className="col-md-12">
                        <ImageUploader uploadImages={uploadImages} />
                    </div>    
        </div>
    )
    
 }     
    
export default ImagesPreview;