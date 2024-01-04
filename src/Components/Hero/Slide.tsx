//Souvik
import Image from "next/image";
import React from "react";
import './slide.css';

interface propsType {
  img: string;
}

const Slide: React.FC<propsType> = ({ img}) => {

  return (
    <div className="slide">
        <Image
        priority
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "xl" }}
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
    
      
  );
};

export default Slide;
