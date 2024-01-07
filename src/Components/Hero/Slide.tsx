import Image from "next/image";
import React from "react";

import styles from "./Slide.module.css";
interface propsType {
  img: string;
}

const Slide: React.FC<propsType> = ({ img}) => {

  return (
    <div className="slide">
        <Image
        priority
        className={styles.customImage}
        src={img} 
        alt="banner"
        width={1200}
        height={1200}
      />
    </div>
    
      
  );
};

export default Slide;