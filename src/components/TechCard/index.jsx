import styles from "./style.module.scss"
import { MdOutlineEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"


export const TechCard = () => {
    return (
        <>
            <li className={styles.tech}>
                <h3 className={styles.techName}>React JS</h3>
                <div className={styles.techStatus}>
                    <p className={styles.status}>Avançado</p>
                    <button><MdOutlineEdit className={styles.buttonEdit} /></button>
                    <button><RiDeleteBin6Line className={styles.buttonTrash}/></button>
                </div>
            </li>
            <li className={styles.tech}>
                <h3 className={styles.techName}>NextJS</h3>
                <div className={styles.techStatus}>
                    <p className={styles.status}>Intermediário</p>
                    <button><MdOutlineEdit className={styles.buttonEdit} /></button>
                    <button><RiDeleteBin6Line className={styles.buttonTrash}/></button>
                </div>
            </li>
        </>
    )
}