import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import styles from './PollFindings.module.scss';
import { IStoreState } from '../../store/store';

const PollFindings = () => {
    const pollFindings = useSelector(
        (state: IStoreState) => state.pollFindings
    );

    return (
        <section className={styles.section}>
            <div className={clsx(styles.section__inner, 'container')}>
                <h2 className="visually-hidden">Результаты опроса</h2>
                <ul className={styles['pollFindings-list']}>
                    {pollFindings.map((value, index) => (
                        <li className={styles['pollFindings-item']} key={index}>
                            <h3 className={styles['pollFindings-title']}>
                                {value.title}
                            </h3>
                            <div className={styles['pollFindings-content']}>
                                <p>{value.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PollFindings;
