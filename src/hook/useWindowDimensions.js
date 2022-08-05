import { useState, useEffect } from "react";

const getSizeWindow = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    }
};

const useWindowDimensions = () => {
    const [windowDimensions,setWindownDimensions] = useState(
        getSizeWindow()
    )

    useEffect(() => {

        const handleSize = (e) => {
            setWindownDimensions(getSizeWindow())
        }

        window.addEventListener("resize", handleSize);

        return () => {
            window.removeEventListener("resize",handleSize);
        }
    }, [])

    return windowDimensions;
}

export default useWindowDimensions