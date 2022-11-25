import { createContext, ReactNode, useContext, useState } from 'react';
import BottomFixedContainer from './BottomFixedContainer';
import FailReasonWriter from './FailReasonWriter';

type BottomSheetContextProps = {
    showBottomSheet: () => void;
    hideBottomSheet: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextProps>({} as BottomSheetContextProps);

type Props = {
    children: ReactNode;
};

const BottomSheetProvider = ({ children }: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <BottomSheetContext.Provider
            value={{
                showBottomSheet: () => setVisible(true),
                hideBottomSheet: () => setVisible(false),
            }}
        >
            {children}
            {visible && (
                <div className="bg-background01/80">
                    <BottomFixedContainer>
                        <FailReasonWriter />
                    </BottomFixedContainer>
                </div>
            )}
        </BottomSheetContext.Provider>
    );
};

export default BottomSheetProvider;
export const useBottomSheet = () => useContext(BottomSheetContext);
