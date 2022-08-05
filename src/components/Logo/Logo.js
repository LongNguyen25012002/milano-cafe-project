import {Link} from 'react-router-dom';
import config from '@/config';
import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const Logo = ({children,to = config.routes.home ,href = false,className}) => {

    const cx = classNames.bind(styles);
    let Logo = 'span';
    let props = {}; 

    if(to){
        Logo = Link
        props.to = to
    } else if(href){
        Logo = 'a'
        props.href = href
    }

  return (
    <Logo {...props} className={cx('logo-wrapper')}>
        {children}
        <h1 className={cx('logo')}>Milano Cafe</h1>
    </Logo>
  )
}

export default Logo