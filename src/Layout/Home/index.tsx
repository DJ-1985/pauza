import React from "react";

import styles from "@/styles/Home/Home.module.scss";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';

function HomePage() { 
  return (
    <>

      <div className={styles.videoBlock}>
        <div className={styles.fullWidthVideo}>
          <video loop muted autoPlay playsInline className={styles.videoLandscape}>
            <source src="/assets/pauza-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className={styles.logoHolder}>
        <div className={styles.logoMainImg}>
            <Image src="/assets/pauza-logo.svg" alt="" />
        </div>
        <div className={styles.lineDraw}>
          <div className={styles.lineAnim}></div>
        </div>
      </div>

      <div className={styles.ctaHolder}>
        <Button className={`${styles.ctaBtn} ${styles.cntAnim}`}>
          Enter
          <i>
             <svg width="46" height="18" viewBox="0 0 46 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className={styles.arrowBody}><path d="M0 9H42" stroke="#ffffff"></path></g> 
                    <g className={styles.arrowHead}><path d="M33 18C33 13.0328 38.8251 9 46 9C38.8251 9 33 4.96721 33 -4.35995e-07" stroke="#ffffff" stroke-miterlimit="10"></path></g>
             </svg>
          </i>
        </Button>
      </div>

    </>
  );
}

export default HomePage;
