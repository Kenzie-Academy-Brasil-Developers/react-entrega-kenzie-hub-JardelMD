import { forwardRef } from 'react';

export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
    return (
        <div>
            <label>{label} </label>
            <select ref={ref} {...rest}>
                {children}
            </select> 
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});