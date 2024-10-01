import React, { FC } from 'react';

import styles from './Input.module.scss';

interface IInputProps {
    label: string;
    errorMessage?: string;
}

type InputProps = IInputProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, errorMessage, ...props }) => {
    return (
        <label className={styles.field} data-error-message={errorMessage}>
            <input className={styles.field__input} {...props} />
            <span className={styles.field__label}> {label} </span>
        </label>
    );
};

export default Input;
