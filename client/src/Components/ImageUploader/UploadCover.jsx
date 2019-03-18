import React from "react";

 export const UploadCover = ({image,style}) => (    
        <div className = "col-md-6">
            <div className = "col-md-12">
                <img style={style}  src={image}/>         
            </div>
         </div>
)
