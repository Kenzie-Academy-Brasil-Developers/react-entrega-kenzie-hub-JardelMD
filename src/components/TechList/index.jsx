import { TechCard } from "../TechCard"
import styles from "./style.module.scss"

export const TechList = () => {
    return(
        <ul className={styles.techList}>
            {/* Não esquecer de passar a key no TechCard */}
            <TechCard/> 
        </ul>
    )
}