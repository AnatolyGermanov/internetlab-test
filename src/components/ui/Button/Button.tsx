import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps {
    primary?: boolean;
}

type ButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
    children,
    className,
    primary,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                { [styles.primary]: primary },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
