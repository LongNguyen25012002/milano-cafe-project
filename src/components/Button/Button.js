import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const Button = ({children,text,primary,outline,rounded,onClick,className,disabled,...passProps}) => {

    let Comp = 'button';
     const props = {
         onClick,
         ...passProps,
     };

     if(disabled){
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        })
     }

     const cx = classNames.bind(styles);

     const classes = cx('wrapper', {
         primary,
         outline,
         text,
         disabled,
         rounded,
     });

  return (
    <Comp className={classes} {...props}>{children}</Comp>
  )
}

export default Button