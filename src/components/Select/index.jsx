import { forwardRef } from 'react';
import styles from "./style.module.scss"

export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
    return (
        <div className={styles.selectContainer}>
            <label className='label'>{label} </label>
            <select className={styles.select} ref={ref} {...rest}>
                {children}
            </select> 
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});