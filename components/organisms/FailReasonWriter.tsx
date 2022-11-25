import Button from '../molecules/Button';
import { useBottomSheet } from './BottomSheetProvider';

const FailReasonWriter = () => {
    const { hideBottomSheet } = useBottomSheet();

    const handleDoneToWrite = () => {
        hideBottomSheet();
    };

    return (
        <div className="bg-background02 pt-8 pb-3 px-6 rounded-t-3xl">
            <h2 className="text-base text-[18px] font-semibold text-white">실패사유 입력</h2>
            <div className="rounded-xl bg-background01 mt-3 mb-8 py-3 px-4">
                <textarea
                    placeholder="실패사유를 입력해주세요"
                    className="focus:outline-none bg-transparent min-h-[120px] min-w-full text-white"
                />
            </div>
            <Button style="w-full" onClick={handleDoneToWrite}>
                <span>작성 완료</span>
            </Button>
        </div>
    );
};

export default FailReasonWriter;
