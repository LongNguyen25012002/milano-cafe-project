import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Breadcrumb.module.scss';
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const Breadcrumb = ({linkData = []}) => {
  return linkData.map((link) => <NavLink to={link.path} className={cx('breadcrumb')} key={link.path}>{link.title} {link.icon}</NavLink>);
}

Breadcrumb.prototype = {
    linkData: PropTypes.array
};
export default Breadcrumb