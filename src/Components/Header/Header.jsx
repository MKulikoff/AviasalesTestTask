import styles from './Header.module.css'

const Header = () => {
    return(
         <header>
             <div className={styles.logo}>
                 <img src="https://promokoda.ru/img/store-logo/aviasales-ru.png" alt="" />
             </div>
         </header>
    )
}

export default Header; 