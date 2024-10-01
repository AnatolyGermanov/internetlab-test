import React, { useRef } from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';

import logoLight from '../../assets/images/logo-light.svg';
import logoDark from '../../assets/images/logo-dark.svg';

const menuLinks = [
    { title: 'Как это работает', href: '' },
    { title: '3-й блок', href: '' },
    { title: 'Вопросы и ответы', href: '' },
    { title: 'Форма', href: '' },
];

const Header = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
        <header className={clsx(styles.header, 'container')}>
            <a className={styles.header__logo} href="/">
                <img
                    src={logoLight}
                    alt=""
                    width={120}
                    height={24}
                    loading="lazy"
                />
            </a>
            <nav className={clsx(styles.header__menu, 'hidden-tablet')}>
                <ul className={styles['header__menu-list']}>
                    {menuLinks.map((value, index) => (
                        <li className={styles['header__menu-item']} key={index}>
                            <a className={styles['header__menu-link']} href="/">
                                {value.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                className={clsx(styles['burger-button'], 'visible-tablet')}
                onClick={() => modalRef.current?.show()}
            >
                <span className="visually-hidden">Открыть меню навигации</span>
            </button>
            <dialog
                className={clsx(styles.header__modal, styles.modal)}
                ref={modalRef}
            >
                <div className={styles.modal__header}>
                    <a className={styles.modal__logo} href="/">
                        <img
                            src={logoDark}
                            alt=""
                            width={120}
                            height={24}
                            loading="lazy"
                        />
                    </a>
                    <form
                        className={styles['modal__close-button-wrapper']}
                        method="dialog"
                    >
                        <button
                            className={styles['modal__close-button']}
                            type="submit"
                        >
                            <span className="visually-hidden">
                                Закрыть меню навигации
                            </span>
                        </button>
                    </form>
                </div>
                <nav className={styles.modal__menu}>
                    <ul className={styles['modal__menu-list']}>
                        {menuLinks.map((value, index) => (
                            <li
                                className={styles['modal__menu-item']}
                                key={index}
                            >
                                <a
                                    className={styles['modal__menu-link']}
                                    href="/"
                                >
                                    {value.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </dialog>
        </header>
    );
};

export default Header;
