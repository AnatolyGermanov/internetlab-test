import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import styles from './Reviews.module.scss';

import { IStoreState } from '../../store/store';
import Slider from '../Slider/Slider';

const Feedback = () => {
    const reviews = useSelector((state: IStoreState) => state.reviews);

    return (
        <section className={styles.section}>
            <div className={clsx(styles.section__inner, 'container')}>
                <h2 className={styles.section__title}>Отзывы</h2>
                <Slider reviews={reviews} />
            </div>
        </section>
    );
};

export default Feedback;
