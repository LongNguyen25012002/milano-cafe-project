import PropTypes from 'prop-types';
import {useState , forwardRef} from 'react';
import images from '@/assets/Images';

const Image = ({src, alt , className = "",  fallBack: customFallBack = images.noImage, ...props },ref) => {

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
          className={className}
          {...props}
      />
  );
}

Image.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onError: PropTypes.func
}

export default forwardRef(Image);