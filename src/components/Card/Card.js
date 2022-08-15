import classNames from "classnames/bind";
import styles from './Card.module.scss';

const cx = classNames.bind(styles)
const Card = ({...props}) => {
    const {name,price,image} = props.data

  return (
      <div className={cx('cardSingle')}>
          <img className={cx('card-single-img')} src={image} alt={`${name}`} />
          <div className={cx('details-card')}>
              <h3>{name}</h3>
              <p>{price}</p>
          </div>
      </div>
  );
}

export default Card