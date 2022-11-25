import { useRouter } from 'next/router';
import { useState } from 'react';
import NavButton from '../molecules/NavButton';

const NavBar = () => {
    const router = useRouter();
    const [currentTag, setCurrentTag] = useState<string>('home');

    const handlePressNavigationButton = (tag: string) => {
        router.push(`/${tag}`);
        setCurrentTag(tag);
    };

    return (
        <div className="border-t-[1px] border-t-white/30 max-w-md fixed bottom-0 w-full flex-row flex bg-background01 pb-3">
            <NavButton
                tag="home"
                focused={currentTag === 'home'}
                activeIcon={'/ic-home-active.svg'}
                inactiveIcon={'/ic-home-inactive.svg'}
                onClick={handlePressNavigationButton}
            />
            <NavButton
                tag="certification-main"
                focused={currentTag === 'certification-main'}
                activeIcon={'/ic-validation-active.svg'}
                inactiveIcon={'/ic-validation-inactive.svg'}
                onClick={handlePressNavigationButton}
            />
            <NavButton
                tag="certification-main"
                focused={currentTag === 'certification-main'}
                activeIcon={'/ic-certification-active.svg'}
                inactiveIcon={'/ic-certification-inactive.svg'}
                onClick={handlePressNavigationButton}
            />
            <NavButton
                tag="my"
                focused={currentTag === 'my'}
                activeIcon={'/ic-my-active.svg'}
                inactiveIcon={'/ic-my-inactive.svg'}
                onClick={handlePressNavigationButton}
            />
        </div>
    );
};

export default NavBar;
