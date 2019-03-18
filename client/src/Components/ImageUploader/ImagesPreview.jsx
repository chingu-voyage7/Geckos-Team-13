import React from "react";
import { ImageUploader } from "../ImageUploader/ImageUploader";
import { UploadCover } from "../ImageUploader/UploadCover";
const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    

  };
 const ImagesPreview = ({images,uploadImages}) => {

   const coverUrl = images[0];
   const restImages =  images.map((image,index) =>(
            <div className = "imgPrev">
                    <img style={imgStyle} key={index} src={image}/> 
            </div>
  
));

    return (     
        <div className="container-preview">
            <UploadCover image = {coverUrl} style={imgStyle}/>
            <div className="col-md-3">
                <div className="d-flex align-content-around flex-wrap">
                    {restImages}                                     
                </div>
                
                <div className="d-flex align-content-around flex-wrap">
                    <ImageUploader inputMedium={false} uploadImages={uploadImages} />
                </div>    
            </div>
        </div>
    )
    
 }     
    
export default ImagesPreview;