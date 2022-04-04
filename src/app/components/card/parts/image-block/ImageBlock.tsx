import React from 'react';

import styles from './ImageBlock.module.scss';

type ImageBlockT = {
    display_name:string,
    name:string
};

export const ImageBlock = ({display_name, name}:ImageBlockT) =>
    <div className={styles.imageBlock}>
        <img
            className={styles.imageBlock__image}
            src={require('../../../../../assets/card-image.png')}
            alt={''}/>
        <p className={styles.imageBlock__created}>
            created by<br/>
            <span className={styles.imageBlock__author}>{display_name}</span>
        </p>
        <p className={styles.imageBlock__name}>{name}</p>
    </div>;
