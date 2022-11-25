type Props = {
    tag: string;
    focused: boolean;
    activeIcon: string;
    inactiveIcon: string;
    onClick: (tag: string) => void;
};

const NavButton = ({ tag, focused, activeIcon, inactiveIcon, onClick }: Props) => {
    const handlePress = () => {
        if (!focused) {
            onClick(tag);
        }
    };

    return (
        <button className="flex-1 flex justify-center items-center pt-3 pb-[13px]" onClick={handlePress}>
            <img src={focused ? activeIcon : inactiveIcon} className="w-6 h-6" />
        </button>
    );
};

export default NavButton;
