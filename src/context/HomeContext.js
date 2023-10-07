import { createContext, useState } from "react";
import background from '../assets/background.png';
import backgroundLight from '../assets/backgroundLight.png';

export const HomeContext = createContext(null);

const HomeContextProvider = ({children}) => {

    const [backgroundImage, setBackground] = useState(background);

    const [backgroundColor, setBackgroundColor] = useState('#dfecf5');

    const [navColor, setNavColor] = useState('#0a3329');

    const [textColor, setTextColor] = useState('#0a3329')

    const handleClick = () => {
        setBackground(image => image === background ? backgroundLight : background);
        setBackgroundColor(bgColor => bgColor === '#dfecf5' ? '#010a24' : '#dfecf5');
        setNavColor(color => color === '#0a3329' ? '#64ffda' : '#0a3329');
        setTextColor(color => color === '#0a3329' ? 'white' : '#0a3329')
    }


    return (
        <HomeContext.Provider value = {{backgroundImage, backgroundColor, navColor, textColor, handleClick}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;