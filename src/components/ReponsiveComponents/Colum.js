import classNames from "classnames/bind"
import styles from './ReponsiveStyleCommon.module.scss';

const cx = classNames.bind(styles);

const Colum = ({children} ) => {
  return <div className={cx('col', {
    "col-5" : "col-5"
  })}>{children}</div>;
}

export default Colum