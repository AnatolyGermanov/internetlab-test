import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './HowItWorks.module.scss';

const cardDataList = [
    {
        image: require('../../assets/images/how-it-works/waiting.svg').default,
        title: 'Прочитай задание внимательно',
        description: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
        image: require('../../assets/images/how-it-works/delivery-truck.svg')
            .default,
        title: 'Изучи весь макет заранее',
        description:
            'Подумай как это будет работать на разных разрешениях и при скролле',
    },
    {
        image: require('../../assets/images/how-it-works/secure.svg').default,
        title: 'Сделай хорошо',
        description: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
    },
    {
        image: require('../../assets/images/how-it-works/money-bags.svg')
            .default,
        title: 'Получи предложение',
        description:
            'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
    },
];

const HowItWorks = () => {
    return (
        <section className={clsx(styles.section, 'container')}>
            <h2 className={styles.section__title}>Как это работает</h2>
            <ul className={styles.section__list}>
                {cardDataList.map((value, index) => (
                    <li className={styles.section__item} key={index}>
                        <HowItWorksCard {...value} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

interface IHowItWorksCardProps {
    image: string;
    title: string;
    description: string;
}

const HowItWorksCard: FC<IHowItWorksCardProps> = ({
    image,
    title,
    description,
}) => {
    return (
        <article className={styles.card}>
            <img
                className={styles.card__image}
                src={image}
                alt=""
                width={72}
                height={72}
                loading="lazy"
            />
            <div>
                <h3 className={clsx(styles.card__title, 'h6')}> {title} </h3>
                <div className={styles.card__description}>
                    <p> {description} </p>
                </div>
            </div>
        </article>
    );
};

export default HowItWorks;
