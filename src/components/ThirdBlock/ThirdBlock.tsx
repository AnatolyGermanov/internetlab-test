import React from 'react';
import clsx from 'clsx';

import styles from './ThirdBlock.module.scss';

import image from '../../assets/images/third-block-image.png';

const ThirdBlock = () => {
    return (
        <section className={clsx(styles.section, 'container')}>
            <div className={styles.section__body}>
                <h2 className={clsx(styles.section__title, 'h3')}>
                    Круто, ты дошел до третьего блока
                </h2>
                <div className={styles.section__description}>
                    <p>
                        63% опрошенных пользовались кредитами из-за того, что не
                        могли покрыть непредвиденные расходы свыше 15 000 ₽.
                        <br />
                        <br />
                        Доступ к заработанным деньгам помогает отказаться от
                        кредитов и экономить деньги на процентах и штрафах.
                    </p>
                </div>
            </div>
            <img
                className={styles.section__image}
                src={image}
                alt=""
                width={592}
                height={448}
                loading="lazy"
            />
        </section>
    );
};

export default ThirdBlock;
