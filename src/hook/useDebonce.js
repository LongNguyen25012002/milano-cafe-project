import { useEffect, useState } from "react"

const useDebonce = (value,delay) => {
    const [searchValueResult,setSearchValue] = useState(value);

    useEffect(() => {
        let handleTime;
        handleTime = setTimeout(() => {
            setSearchValue(value)
        }, delay);

        return () => {
            clearTimeout(handleTime)
        }
    }, [value,delay])

    return {searchValueResult}
}

export default useDebonce