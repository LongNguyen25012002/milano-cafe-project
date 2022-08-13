import classNames from "classnames/bind";
import styles from './GirdComponent.module.scss';

const cx = classNames.bind(styles);

const GirdComponent = ({className = "", children}) => {
  return (
    <div className={cx("grid-wrapper")}>
       <div className={cx("row")}>
          {children}
       </div>
    </div>
  )
}

export default GirdComponent