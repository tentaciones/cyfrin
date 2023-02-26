import React from "react";
import styles from "./styles.module.css";
type Props = {};

const Book = (props: Props) => {
  return (
    <>
      <div className="md:flex w-screen justify-center">
        <div className={styles.sheet}>
          <div className={`${styles.lmargin} ${styles.margin}`}>
            <div className={`${styles.hole} ${styles.firsthole}`}></div>
            <div className={`${styles.hole} ${styles.secondhole}`}></div>
            <div className={`${styles.hole} ${styles.thirdhole}`}></div>
          </div>
          <div className={`${styles.rmargin} ${styles.margin}`}></div>
          <header>
            <span className={styles.sheetTitle}>Are Audits Public ?</span>
          </header>
          <p className={styles.sheetText}>
            Up to you! We are more than happy to publish reports, but we can
            discuss with you what makes the most sense in your scenario.
          </p>
        </div>

        <div className={styles.sheet}>
          <div className={`${styles.lmargin} ${styles.margin}`}>
            <div className={`${styles.hole} ${styles.firsthole}`}></div>
            <div className={`${styles.hole} ${styles.secondhole}`}></div>
            <div className={`${styles.hole} ${styles.thirdhole}`}></div>
          </div>
          <div className={`${styles.rmargin} ${styles.margin}`}></div>
          <header>
            <span className={styles.sheetTitle}>How Much Does It Cost ?</span>
          </header>
          <p className={styles.sheetText}>
            It depends on how big and complex the code is.
          </p>
        </div>
      </div>
    </>
  );
};

export default Book;
