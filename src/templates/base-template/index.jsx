import Header from "../../components/Header"
import styles from './styles.module.css'

const BaseTemplate = ({children}) => {
    return(
        <div className={styles.baseTemplateContainer}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default BaseTemplate