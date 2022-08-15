import classNames from "classnames/bind"
import styles from './ReponsiveStyleCommon.module.scss';
const cx = classNames.bind(styles);

const Row = ({children}) => {
  return (
    <div className={cx('row')}>
        {children}
    </div>
  )
}

export default Row