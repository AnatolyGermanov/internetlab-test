import React from 'react';
import clsx from 'clsx';

import styles from './Callback.module.scss';
import Input from '../ui/Input/Input';
import Checkbox from '../ui/Checkbox/Checkbox';
import Button from '../ui/Button/Button';

const Callback = () => {
    return (
        <section className={styles.section}>
            <div className={clsx(styles.section__inner, 'container')}>
                <h2 className={styles.section__title}>Отправь форму</h2>
                <form className={styles.form}>
                    <Input
                        label="Имя"
                        errorMessage="Обязательное поле"
                        type="text"
                        placeholder="Введите имя"
                        required
                    />
                    <Input
                        label="Телефон"
                        errorMessage="Обязательное поле или неверный формат"
                        type="tel"
                        placeholder="+7"
                        required
                        pattern="^\+7\d{10}$"
                        maxLength={12}
                    />
                    <label className={styles.form__agreement}>
                        <Checkbox required />
                        Согласен, отказываюсь
                    </label>
                    <Button primary>Отправить</Button>
                </form>
            </div>
        </section>
    );
};

export default Callback;
