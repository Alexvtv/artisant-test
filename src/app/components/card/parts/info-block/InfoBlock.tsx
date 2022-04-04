import React from 'react';

import styles from './InfoBlock.module.scss';

type InfoBlockT = {
    quantity_available:number,
    quantity_nfts_created:number,
    initial_price:number
};

export const InfoBlock = ({quantity_available, quantity_nfts_created, initial_price}:InfoBlockT) =>
    <div className={styles.infoBlock}>
        <>
            <p className={styles.infoBlock__param}>
                available<br/>
                <span className={styles.infoBlock__quantity}>
                        {quantity_available} of {quantity_nfts_created}
                    </span>
            </p>
        </>
        <div className={styles.infoBlock__priceWrap}>
            <p className={styles.infoBlock__param}>
                price<br/>
                <span className={styles.infoBlock__price}>{initial_price} ETH</span>
            </p>
        </div>
    </div>;
