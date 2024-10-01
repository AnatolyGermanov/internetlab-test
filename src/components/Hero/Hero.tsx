import React from 'react';
import clsx from 'clsx';

import styles from './Hero.module.scss';
import Header from '../Header/Header';
import Button from '../ui/Button/Button';

const Hero = () => {
    return (
        <section className={styles.section}>
            <Header />
            <div className={clsx(styles.section__inner, 'container')}>
                <h1 className={styles.section__title}>Говорят, никогда не поздно сменить профессию</h1>
                <div className={styles.section__description}>
                    <p>Сделай круто тестовое задание и у тебя получится</p>
                </div>
                <Button>Проще простого!</Button>
            </div>
        </section>
    );
};

export default Hero;
