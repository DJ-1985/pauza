"use client";

import React from "react";

import styles from "@/styles/Header.module.scss";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.navigationHolder}>
        <div className={styles.logo}>
        <a href="#" className={styles.logoImg}>
          <Image src="/assets/pauza-logo.svg" alt="" />
          <span className={styles.logoHover}>
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 68.24" width="252" height="68.23999786376953">
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                <path className={`${styles.cls1} ${styles.svgElem1}`} d="M73.91,30.69h-27.06v-4.93h24.06l3,4.93Z"></path>
                <path  className={`${styles.cls1} ${styles.svgElem2}`} d="M234.84,30.69h-27.06v-4.93h24.06l3,4.93Z"></path>
                <g>
                  <path className={`${styles.cls1} ${styles.svgElem3}`} d="M5.77,24.57v14.83H0V0h31.55c8.74,0,12.1,3.86,12.1,9.52v5.54c0,5.65-3.36,9.52-12.1,9.52H5.77ZM37.88,9.52c0-4.09-3.25-4.98-9.69-4.98H5.77v15.56h24.88c4.93,0,7.23-1.74,7.23-4.98v-5.6Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem4}`} d="M84.34,39.41L62.76,5.93l-21.85,33.47h-6.39L60.69,0h4.15l26,39.41h-6.5Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem5}`} d="M102.05,39.41c-8.74,0-12.1-3.86-12.1-9.52V0h5.77v29.95c0,3.08,1.9,4.98,6.33,4.98h24.21c4.43,0,6-1.9,6-4.98V0h5.72v29.89c0,5.65-1.79,9.52-10.53,9.52h-25.39Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem6}`} d="M141.72,39.41v-3.86l41.64-30.62h-39.06l-2.57-4.93h51.72v3.92l-41.75,30.56,43.6.19-3.04,4.6-50.53.14Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem7}`} d="M245.5,39.41l-21.57-33.47-21.85,33.47h-6.39L221.85,0h4.15l26,39.41h-6.5Z"></path>
                </g>
                <g>
                  <path className={`${styles.cls1} ${styles.svgElem8}`} d="M1.37,66.43l1.18-1.41c1.07.93,2.16,1.46,3.54,1.46,1.22,0,1.98-.58,1.98-1.41v-.03c0-.8-.45-1.23-2.53-1.71-2.39-.58-3.73-1.28-3.73-3.34v-.03c0-1.92,1.6-3.25,3.83-3.25,1.63,0,2.93.5,4.07,1.41l-1.06,1.49c-1.01-.75-2.02-1.15-3.04-1.15-1.15,0-1.82.59-1.82,1.33v.03c0,.87.51,1.25,2.67,1.76,2.37.58,3.58,1.42,3.58,3.28v.03c0,2.1-1.65,3.35-4,3.35-1.71,0-3.33-.59-4.67-1.79Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem9}`} d="M20.2,56.86h4.42c2.62,0,4.26,1.49,4.26,3.75v.03c0,2.51-2.02,3.83-4.48,3.83h-2.22v3.6h-1.97v-11.2ZM24.46,62.69c1.49,0,2.42-.83,2.42-2v-.03c0-1.31-.94-2-2.42-2h-2.29v4.03h2.29Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem10}`} d="M38.84,56.86h1.97v11.2h-1.97v-11.2Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem11}`} d="M51.64,56.86h1.82l6,7.75v-7.75h1.94v11.2h-1.65l-6.18-7.97v7.97h-1.94v-11.2Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem12}`} d="M72.12,56.86h8.31v1.76h-6.34v2.91h5.62v1.76h-5.62v3.01h6.42v1.76h-8.39v-11.2Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem13}`} d="M103.43,56.86h1.97v11.2h-1.97v-11.2Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem14}`} d="M116.23,56.86h1.82l6,7.75v-7.75h1.94v11.2h-1.65l-6.18-7.97v7.97h-1.94v-11.2Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem15}`} d="M135.96,66.43l1.18-1.41c1.07.93,2.16,1.46,3.54,1.46,1.22,0,1.99-.58,1.99-1.41v-.03c0-.8-.45-1.23-2.53-1.71-2.38-.58-3.73-1.28-3.73-3.34v-.03c0-1.92,1.6-3.25,3.83-3.25,1.63,0,2.93.5,4.07,1.41l-1.06,1.49c-1.01-.75-2.02-1.15-3.04-1.15-1.15,0-1.83.59-1.83,1.33v.03c0,.87.51,1.25,2.67,1.76,2.37.58,3.59,1.42,3.59,3.28v.03c0,2.1-1.65,3.35-4,3.35-1.71,0-3.33-.59-4.67-1.79Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem16}`} d="M157.31,58.69h-3.55v-1.82h9.09v1.82h-3.55v9.38h-1.98v-9.38Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem17}`} d="M172.87,56.86h1.97v11.2h-1.97v-11.2Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem18}`} d="M188.43,58.69h-3.55v-1.82h9.09v1.82h-3.55v9.38h-1.99v-9.38Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem19}`} d="M203.7,63.31v-6.45h1.97v6.37c0,2.08,1.07,3.19,2.83,3.19s2.82-1.04,2.82-3.11v-6.45h1.97v6.35c0,3.34-1.89,5.03-4.82,5.03s-4.77-1.68-4.77-4.93Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem20}`} d="M226.59,58.69h-3.55v-1.82h9.09v1.82h-3.55v9.38h-1.98v-9.38Z"></path>
                  <path className={`${styles.cls1} ${styles.svgElem21}`} d="M242.04,56.86h8.31v1.76h-6.34v2.91h5.62v1.76h-5.62v3.01h6.42v1.76h-8.39v-11.2Z"></path>
                </g>
              </g>
            </g>
          </svg>
          </span>
        </a>
        </div>
        <div className={styles.navBar}>
          <div className={`${styles.navIcon} ${styles.hamburgerTop}`}></div>
          <div className={`${styles.navIcon} ${styles.hamburgerBottom}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
