import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { RemoveIcon, SearchIcon } from '@/components/Icons';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const handleGetValueSearch = (e) => {
        let value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleClickFocus = (e) => {
        inputRef.current.focus();
    };

    return (
        <div className={cx('search-wrapper')}>
            <input
                type="text"
                placeholder="search here"
                value={searchValue}
                ref={inputRef}
                onChange={(e) => handleGetValueSearch(e)}
            ></input>
                <div onClick={handleClickFocus}>
                    <SearchIcon className={cx('icon-search')} />
                </div>
        </div>
    );
};

export default Search;
