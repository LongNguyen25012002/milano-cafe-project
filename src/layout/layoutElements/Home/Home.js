import { useEffect, useState } from 'react';
import { getProducts } from '@/features/products-slice';
import { useSelector, useDispatch } from 'react-redux';


import styles from './Home.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts('https://faker-server-j.herokuapp.com/api/menu'));
    }, [dispatch]);
    
    const productsData = useSelector((state) => state.products.productsData);
    console.log(productsData)

    return (
        <div className={cx('wrapper-home')}>
            <div className={cx('products-wrapper')}>
                {
                    // products.map(menu => {

                    //     return (
                    //         <div></div>
                    //     )
                    // })
                }
            </div>
        </div>
    );
};

export default Home;
