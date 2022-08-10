import styles from './SideNavBar.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/Images';
import { Link } from 'react-router-dom';
import Image from '@/components/Image';
import config from '@/config';
import { ArrowDirectionRight } from '@/components/Icons';
import Breadcrumb from '@/components/Breadcrumb';
import { useWindowDimensions } from '@/hook';

const cx = classNames.bind(styles);

let ListMenu = [
    {
        type: 'Cafe máy (cafe Italia)',
        iconImg: images.coffee,
        path: '/category/cafe',
    },
    {
        type: 'Nước ép',
        iconImg: images.fruitJuice,
        path: '/category/nuoc-ep',
    },
    {
        type: 'Sinh tố hoa quả',
        iconImg: images.orangeJuice,
        path: '/category/sinh-to-hoa-qua',
    },
    {
        type: 'Đồ uống đá xay',
        iconImg: images.lemonTea,
        path: '/category/do-uong-da-xay',
    },
    {
        type: 'Trà lạnh & trà nóng',
        iconImg: images.icedTead,
        path: '/category/tra-lanh-&-tra-nong',
    },
    {
        type: 'Soda Ý',
        iconImg: images.pizza,
        path: '/category/soda-y',
    },
    {
        type: 'Sữa chua',
        iconImg: images.yogurt,
        path: '/category/sua-chua',
    },
    {
        type: 'Trà sữa',
        iconImg: images.bubbleTea,
        path: '/category/tra-sua',
    },
];

let linkSwitchPage = [
    {
        title: 'home',
        path: config.routes.home,
        icon: <ArrowDirectionRight className={cx('arrow-icon')} />,
    },
    {
        title: 'blog',
        path: config.routes.blog,
        icon: <ArrowDirectionRight className={cx('arrow-icon')} />,
    },
    {
        title: 'collection',
        path: config.routes.imageCollection,
    },
];

const SideNavBar = () => {

    let {width} = useWindowDimensions()
    let isCloseSideBar = width > 1023;
    return (
        isCloseSideBar ? (
            <div className={cx('wrapper-siderBar')}>
                <div className={cx('list-menu')}>
                    {ListMenu.map((list) => {
                        return (
                            <Link
                                to={list.path}
                                key={list.type}
                                className={cx('menu-link-item')}
                            >
                                <Image
                                    src={list.iconImg}
                                    alt={list.type}
                                    className={cx('img-menu')}
                                ></Image>
                                <h3 className={cx('menu-title-item')}>
                                    {list.type}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
                <Image
                    src="https://jarvis.vn/wp-content/uploads/2019/05/kinh-doanh-cafe-nhuong-quyen-milano.jpg"
                    alt="banner"
                    className={cx('img-banner')}
                />
                <div className={cx('navbar-link-wrapp')}>
                    <Breadcrumb linkData={linkSwitchPage} />
                </div>
            </div>
        ) : null
    );
};

export default SideNavBar;
