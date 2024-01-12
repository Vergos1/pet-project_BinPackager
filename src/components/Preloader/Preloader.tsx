import styles from "./preloader.module.scss";

const Preloader = () => {
    return (
     <div className={styles.preloaderWrapper}>
         <span className={styles.preloaderText}>Loading...</span>
     </div>
    );
};

export default Preloader;