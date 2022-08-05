import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../Image';

const Avatar = ({
    to,
    href,
    onClick = () => {},
    className = '',
    src,
    alt,
    ...passProps
}) => {
    let Component = 'div';

    let props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    return (
        <Component {...props} className={className}>
            <Image src={src} alt={alt} />
        </Component>
    );
};

Avatar.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Avatar;
