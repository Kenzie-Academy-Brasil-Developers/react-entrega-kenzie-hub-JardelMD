import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return (
        <div className={styles.input}>
            <label className="label">{label} </label>
            <input className="input" ref={ref} {...rest} />
            {error ? <p className="error">{error.message}</p> : null}
        </div>
    )
})