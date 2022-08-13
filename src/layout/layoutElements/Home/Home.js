import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getProducts } from '@/features/products-slice';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts('https://faker-server-j.herokuapp.com/api/menu'));
    }, [dispatch]);

    const productsData = useSelector((state) => state.products.productsData);

    return (
        <div className={cx('wrapper-home')}>
            <div className={cx('products-wrapper')}>
                {
                    productsData.map(menu => {
                        return (
                            <div className={cx('card-single')} key={Math.random() + 1}>
                                <img src={menu.image} alt="a"/>
                                <div className={cx('details')}>
                                    <h3>{menu.name}</h3>
                                    <p>{menu.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;
