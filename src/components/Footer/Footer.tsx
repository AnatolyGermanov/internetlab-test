import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__copyright}>
                © 2021 Лаборатория интернет
            </p>
        </footer>
    );
};

export default Footer;
