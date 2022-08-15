import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Card from '@/components/Card';
import Row from '@/components/ReponsiveComponents/Row';
import Colum from '@/components/ReponsiveComponents/Colum';


const cx = classNames.bind(styles);

const Home = () => {
    
    const productsData = useSelector((state) => state.products.productsData);
    
    return (
        <div className={cx('wrapper-home')}>
            <div className={cx('products-wrapper')}>
               <Row>
                   {
                    productsData.map((menu,index)=> {

                        return (
                            <Colum key={menu.name + index}>
                                <Link to={`/product/${menu.name}`}>
                                    <Card data={menu} />
                                </Link>
                            </Colum>
                        );
                    })
                   }
               </Row>
            </div>
        </div>
    );
};

export default Home;
