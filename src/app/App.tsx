import React, {useEffect, useState} from 'react';

import {initialCardsQty, additionalCardsQty} from '../config';
import {Card} from './components';

import styles from './App.module.scss';

export const App = () => {
    const [cardsQty, setCardsQty] = useState(initialCardsQty);
    const [available, setAvailable] = useState(false);
    const [data, setData] = useState<{ [key:string]:any } | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 100) {
                setCardsQty(prev => prev + additionalCardsQty);
            }
        };

        fetch('https://artisant.io/api/products')
            .then(res => res.json())
            .then(({data}) => setData(data));

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const productsToMap = data !== null && [...data.products]
        .filter(({quantity_available}) => !available || quantity_available > 0)
        .splice(0, cardsQty);

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <p className={styles.title}>Explore</p>
                <p className={styles.subtitle}>Buy and sell digital fashion NFT art</p>
                <div className={styles.cards}>
                    {productsToMap && productsToMap.map((product, index) =>
                        <Card product={product} key={index}/>)}
                </div>
            </div>
            <div className={styles.filter}>
                <p>In stock</p>
                <input type={'checkbox'} checked={available} onChange={() => setAvailable(!available)}/>
            </div>
        </div>
    );
};
