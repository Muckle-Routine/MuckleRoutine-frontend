import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from '../_app';
import Badge from '@/components/molecules/Badge';
import Button from '@/components/molecules/Button';
import BottomFixedContainer from '@/components/organisms/BottomFixedContainer';
import Layout from '@/components/organisms/Layout';
import PageHeader from '@/components/organisms/PageHeader';
import Section from '@/components/organisms/Section';
import ExampleBadge from '@/components/molecules/ExampleBadge';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import CustomToast from '@/components/molecules/CustomToast';
import { Transaction } from '@/klip/types';
import { MERKLE_ROUTINE_ABI } from '@/klip/abi';
import { useKlip } from '@/klip/hooks';
import { useFetchRoutineDetail } from '@/services/routine/hooks';

const RoutineDetail: NextPageWithLayout = () => {
    const router = useRouter();
    const [result, _, executeContract] = useKlip();
    const { pid } = router.query;
    const { data } = useFetchRoutineDetail(pid as string);

    const mockData = {
        routinId: 1,
        title: '아침 6시 30분 전 기상하기',
        startDate: '2022.11.04',
        thumbnail: '',
        week: 4,
        category: '미라클모닝',
        participantsCount: 30,
        deposit: 50,
    };

    const handleParticipate = () => {
        const routine_id = 1;
        const transaction: Transaction = {
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
            value: '1',
            abi: JSON.stringify(MERKLE_ROUTINE_ABI.createRoutine),
            params: JSON.stringify([routine_id]),
        };
        executeContract(transaction);
        setTimeout(() => {
            router.push('/');
            toast.custom((t) => <CustomToast toast={t} text={'미션 참여 완료했어요!'} />);
        }, 3000);
    };

    // useEffect(() => {
    //     if (result) {
    //         router.push('/');
    //         toast.custom((t) => <CustomToast toast={t} text={'미션 참여 완료했어요!'} />);
    //     }
    // }, [result, router]);

    return (
        <div>
            <PageHeader canGoBack title="루틴 상세" rightIconSrc="/ic-share.svg" />
            <div className="px-6 pt-[66px] pb-[100px]">
                <h1 className="text-white font-semibold text-4xl text-[32px] mt-3">
                    아침 6시 30분 전<br />
                    기상하기
                </h1>
                <div className="flex flex-row items-center -ml-1 mt-6">
                    <Badge text={`${mockData.week}주`} style="bg-deactiveDarker" />
                    <Badge text={mockData.category} />
                </div>
                <Section title={'루틴 기간'} style="mt-6">
                    <span className="text-deactive text-sm text-[13px] font-medium">2022.11.27 - 2022.12.11</span>
                </Section>
                <Section title={'참가자 수'} style="mt-6">
                    <span className="text-deactive text-sm text-[13px] font-medium">{32}명 참여중</span>
                </Section>
                <Section title={'인증 기준'} style="mt-6">
                    <ul className="list-disc ml-5 pt-2 pb-10">
                        <li className="text-deactive text-sm text-[13px] font-medium">아침 6시 30분 전 기상하기</li>
                        <li className="text-deactive text-sm text-[13px] font-medium">
                            타임스탬프가 노출된 사진을 등록해주세요
                        </li>
                        <li className="text-deactive text-sm text-[13px] font-medium">선명한 사진을 등록해주세요</li>
                    </ul>
                </Section>
                <div className="flex flex-row">
                    <div className="relative">
                        <img className="rounded-xl" src="/img-example-success.png" alt="image-good-example" />
                        <ExampleBadge positive style="absolute top-2 left-2" />
                    </div>
                    <div className="w-3" />
                    <div className="relative">
                        <img className="rounded-xl" src="/img-example-fail.png" alt="image-good-example" />
                        <ExampleBadge positive={false} style="absolute top-2 left-2" />
                    </div>
                </div>
            </div>
            <BottomFixedContainer style="px-6 pb-3">
                <Button style="w-full" onClick={handleParticipate}>
                    <span>미션 참가하기</span>
                </Button>
            </BottomFixedContainer>
        </div>
    );
};

export default RoutineDetail;

RoutineDetail.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
