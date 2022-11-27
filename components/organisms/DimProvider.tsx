import { createContext, ReactNode, useContext, useState } from 'react';

type DimProviderProps = {
    showBottomSheet: () => void;
    hideBottomSheet: () => void;
};

const DimProviderContext = createContext<DimProviderProps>({} as DimProviderProps);

type Props = {
    children: ReactNode;
};

const DimProvider = ({ children }: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <DimProviderContext.Provider
            value={{
                showBottomSheet: () => setVisible(true),
                hideBottomSheet: () => setVisible(false),
            }}
        >
            {children}
            {visible && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 flex flex-col justify-between">
                    <div className="flex flex-row justify-end pr-5">
                        <button onClick={() => setVisible(false)}>
                            <img src="/ic-large-close.svg" alt="" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-secondary font-bold text-3xl text-[28px]">랜덤 검증 참여</h1>
                        <span className="text-white font-normal text-base text-[17px] mt-6 mb-3 text-center">
                            랜덤 루틴 검증에 참여하면
                            <br />
                            Klay를 얻을 수 있어요!
                        </span>
                        <span className="text-white font-normal text-sm text-[13px]">
                            참여한 검증의 기간이 끝나야 획득이 가능합니다.
                        </span>
                    </div>
                    <div className="flex mb-[120px] self-center">
                        <img src="/ic-checkbox.svg" />
                        <span className="font-normal text-white text-base text-[15px] ml-1.5">다시 보지 않기</span>
                    </div>
                </div>
            )}
        </DimProviderContext.Provider>
    );
};

export default DimProvider;
export const useBottomSheet = () => useContext(DimProviderContext);
