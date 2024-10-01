import React, { FC } from 'react';

import styles from './Checkbox.module.scss';
import clsx from 'clsx';

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => {
    return (
        <input
            className={clsx(styles.checkbox, className)}
            type="checkbox"
            {...props}
        />
    );
};

export default Checkbox;
