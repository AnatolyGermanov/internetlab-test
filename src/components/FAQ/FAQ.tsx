import React, { FC } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import styles from './FAQ.module.scss';
import { IStoreState } from '../../store/store';

const FAQ = () => {
    const FAQs = useSelector((state: IStoreState) => state.FAQs);

    return (
        <section className={clsx(styles.section, 'container')}>
            <h2 className={styles.section__title}>Вопросы и ответы</h2>
            <ul className={styles['FAQ-list']}>
                {FAQs.map((value, index) => (
                    <li className={styles['FAQ-item']} key={index}>
                        <FAQItem {...value} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

interface FAQItemProps {
    title: string;
    content?: string;
}

const FAQItem: FC<FAQItemProps> = ({ title, content }) => {
    return (
        <details className={styles.FAQItem}>
            <summary className={styles.FAQItem__header}>
                <h3 className={styles.FAQItem__title}>{title}</h3>
                <span className={styles.FAQItem__indicator}></span>
            </summary>
            <p className={styles.FAQItem__content}>{content}</p>
        </details>
    );
};

export default FAQ;
