import {useState , forwardRef} from 'react';
// import styles from './Image.module.scss';
import images from '@/assets/Images';

// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

const Image = ({src, alt , className = "",  fallBack: customFallBack = images.roket, ...props },ref) => {

    const [fallback,setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallBack);
    }

  return (
      <img
          src={src || fallback}
          alt={alt}
          onError={handleError}
          ref={ref}
        //   className={cx("")}
          {...props}
      />
  );
}

export default forwardRef(Image);