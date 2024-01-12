import styles from "./header.module.scss";
import LogoSvg from '../../assets/images/icons/logo.svg';



const Header = () => {
  return (
   <header className={styles.header}>
     <div className={styles.headerContainer}>
       <div className={styles.headerWrapper}>
           <img className={styles.headerLogo} src={LogoSvg} alt="logo"/>
       </div>
     </div>
   </header>
  )
}
export default Header