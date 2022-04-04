import React, {useMemo} from 'react';

import {InfoBlock, ImageBlock} from './parts';

import styles from './Card.module.scss';

type CardT = {
    product:{
        [key:string]:any
    }
}

export const Card = ({product}:CardT) => useMemo(() => {
    const {quantity_available, quantity_nfts_created, created_by, name, initial_price} = product;
    const {display_name} = created_by;

    return <div className={styles.card}>
        <ImageBlock display_name={display_name} name={name}/>
        <InfoBlock
            quantity_available={quantity_available}
            quantity_nfts_created={quantity_nfts_created}
            initial_price={initial_price}/>
    </div>;
}, [product]);
