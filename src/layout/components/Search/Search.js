import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '@/components/Icons';
import { getProducts, searchProducts } from '@/features/products-slice';
import { useDispatch } from 'react-redux';
import { useDebonce } from '@/hook';

const cx = classNames.bind(styles);

const Search = () => {
    
    let dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const { searchValueResult } = useDebonce(searchValue, 500);

    useEffect(() => {
        if(searchValueResult === "" || null){
            dispatch(
                getProducts('https://faker-server-j.herokuapp.com/api/menu'),
            );
        } else {
            dispatch(
                getProducts(
                    `https://faker-server-j.herokuapp.com/api/menu?q=${encodeURI(
                        searchValueResult,
                    )}`,
                ),
            );
        }
    },[searchValueResult,dispatch])

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
