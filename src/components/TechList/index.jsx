import { useContext } from "react"
import { TechCard } from "../TechCard"
import styles from "./style.module.scss"
import { TechContext } from "../../providers/TechContext"

export const TechList = () => {
    const { user } = useContext(TechContext)
    // console.log(user.techs)
    return (
        <ul className={styles.techList}>
            {user.techs.map((tech) => (
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}