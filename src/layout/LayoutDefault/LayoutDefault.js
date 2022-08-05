import styles from './LayoutDefault.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';

const cx = classNames.bind(styles);

const LayoutDefault = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideNavBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default LayoutDefault