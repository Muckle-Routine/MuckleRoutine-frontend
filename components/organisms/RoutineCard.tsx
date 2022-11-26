import Badge from '../molecules/Badge';

type Props = {
    data: {
        routinId: number;
        title: string;
        startDate: string;
        thumbnail: string;
        week: number;
        category: string;
        participantsCount: number;
        deposit: number;
    };
    type: 'klay-visible' | 'certification';
    onPress: () => void;
};

const RoutineCard = ({ data, type, onPress }: Props) => {
    return (
        <div className="pt-3 mb-1 cursor-pointer" onClick={onPress}>
            <div className="flex flex-row items-cente pt-[9px] pb-[6px]">
                <img src={data.thumbnail} className="w-[77px] h-[83px] rounded-r-full" />
                <div className="flex flex-col items-start ml-3 w-full">
                    <span className="text-xs text-[11px] text-deactive font-medium">{data.startDate} 시작</span>
                    <span className="text-base text-white font-bold mt-1 mb-2">{data.title}</span>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row items-center -ml-1">
                            <Badge text={`${data.week}주`} style="bg-deactiveDarker" />
                            <Badge text={data.category} />
                            <Badge text={`${data.participantsCount}명`} />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            {type === 'klay-visible' ? (
                                <>
                                    <span className="text-base text-primary font-bold">{data.deposit}</span>
                                    <span className="text-base text-primary font-normal ml-0.5">klay</span>
                                </>
                            ) : (
                                <span className="text-base text-secondary font-bold">인증하기</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-deactive/20 mt-3 h-[1px] min-w-fit ml-6" />
        </div>
    );
};

export default RoutineCard;
