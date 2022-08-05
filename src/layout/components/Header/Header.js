import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Logo from '@/components/Logo';
import images from '@/assets/Images';
import Search from '../Search';
import { useState } from 'react';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
import { CartIcon, MenuIcon } from '@/components/Icons';
import Avatar from '@/components/Avatar';
import { useWindowDimensions } from '@/hook';

const cx = classNames.bind(styles);

const Header = () => {
    const [user, setUser] = useState(!false);
    let navigate = useNavigate();

    const switchPageLogin = () => {
        navigate(config.routes.login);
    };

    const { width } = useWindowDimensions();
    const isShowMenuIcon = width < 1024;

    return (
        <header className={cx('header')}>
            <div className={cx('inner-header')}>
                <Logo>
                    <img src={images.logo} alt="logo"></img>
                </Logo>
                <div className={cx('place-search-with-user')}>
                    <Search />
                    {user ? (
                        isShowMenuIcon ? (
                            <div><MenuIcon className={cx('menu-icon')} /></div>
                        ) : (
                            <div className={cx('login-success')}>
                                <CartIcon className={cx('cart-icon')} />
                                <Avatar
                                    src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                    alt="avatar"
                                    className={cx('img-avatar')}
                                />
                            </div>
                        )
                    ) : (
                        <Button primary onClick={switchPageLogin}>
                            Đăng nhập
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
