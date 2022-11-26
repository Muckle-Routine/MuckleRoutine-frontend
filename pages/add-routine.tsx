import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from './_app';
import Button from '@/components/molecules/Button';
import Layout from '@/components/organisms/Layout';
import BottomFixedContainer from '@/components/organisms/BottomFixedContainer';
import Section from '@/components/organisms/Section';
import PageHeader from '@/components/organisms/PageHeader';
import Chip from '@/components/molecules/Chip';
import InputBox from '@/components/molecules/InputBox';
import useInput from 'hooks/useInput';
import { MOCK_CATEGORIES, MOCK_CYCLES } from '../mock';
import { useRouter } from 'next/router';
import ExampleImageLoader from '@/components/organisms/ExampleImageLoader';
import CustomToast from '@/components/molecules/CustomToast';
import { toast } from 'react-hot-toast';
import { useKlip } from '@/klip/hooks';
import { Transaction } from '@/klip/types';
import { MERKLE_ROUTINE_ABI } from '@/klip/abi';
import { useMutation } from '@tanstack/react-query';
import { routineApi } from '@/services/routine/api';
import { Routine } from '@/services/routine/types';

const AddRoutine: NextPageWithLayout = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>(MOCK_CATEGORIES[0]);
    const [selectedCycle, setSelectedCycle] = useState<string>(MOCK_CYCLES[0]);
    const [routineTitle, updateRoutineTitle] = useInput('', 30);
    const [description, updateDescription] = useInput('', 200);
    const [startDate, updateStartDate] = useInput('');
    const [endDate, updateEndDate] = useInput('');
    const [deposit, updateDeposite] = useInput('', 10);
    const [result, _, executeContract] = useKlip();
    const mutation = useMutation({
        mutationFn: (data: Routine) => routineApi.addRoutine(data),
    });

    const handleCreateRoutine = () => {
        const transaction: Transaction = {
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '',
            value: '1',
            abi: JSON.stringify(MERKLE_ROUTINE_ABI.createRoutine),
            params: JSON.stringify([1]),
        };
        executeContract(transaction);
    };

    const handleUpdateDeposite = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDeposite(event.target.value);
    };

    useEffect(() => {
        if (result) {
            mutation
                .mutateAsync({
                    tilte: routineTitle,
                    startDate: '2022-11-26',
                    endDate: '2022-12-03',
                    category: selectedCategory,
                    term: 'EVERY_DAY',
                    skeleton: 1,
                    description,
                    no: 1,
                    fee: 1,
                    image1: '',
                    image2: '',
                })
                .then(() => {
                    router.push('/');
                    toast.custom((t) => <CustomToast toast={t} text={'루틴이 생성되었어요!'} />);
                });
        }
    }, [result, router, mutation, routineTitle, startDate, endDate, selectedCategory, description]);

    return (
        <div>
            <PageHeader canGoBack title="루틴 생성" />
            <div className="px-6 pt-[66px] pb-[100px] h-full">
                <div className="mt-3">
                    <InputBox placeholder="제목을 입력해주세요." value={routineTitle} onChange={updateRoutineTitle} />
                    <div className="flex flex-row justify-between mt-6 h-10">
                        <InputBox placeholder="시작일" value={startDate} onChange={updateStartDate} type="date" />
                        <InputBox
                            placeholder="종료일"
                            value={endDate}
                            onChange={updateEndDate}
                            type="date"
                            style="ml-3"
                        />
                    </div>
                </div>
                <Section title={'카테고리'} style="mt-6">
                    <div className="flex flex-row items-center flex-nowrap -ml-1 scrollbar-hide overflow-auto">
                        {MOCK_CATEGORIES.map((categoryName) => {
                            return (
                                <Chip
                                    text={categoryName}
                                    selected={selectedCategory === categoryName}
                                    onSelect={setSelectedCategory}
                                    key={categoryName}
                                />
                            );
                        })}
                    </div>
                </Section>
                <Section title={'인증 주기'} style="mt-6">
                    <div className="flex flex-row items-center flex-nowrap -ml-1 scrollbar-hide overflow-auto">
                        {MOCK_CYCLES.map((cycle) => {
                            return (
                                <Chip
                                    text={cycle}
                                    selected={selectedCycle === cycle}
                                    onSelect={setSelectedCycle}
                                    key={cycle}
                                />
                            );
                        })}
                    </div>
                </Section>
                <Section title={'인증 기준 설명'} style="mt-6">
                    <div className="pt-2 pl-4 bg-background02 rounded-xl">
                        <textarea
                            placeholder="인증 기준을 설명해주세요"
                            className="focus:outline-none bg-transparent min-h-[120px] min-w-full text-white"
                            value={description}
                            onChange={(event) => updateDescription(event.target.value)}
                        />
                    </div>
                </Section>
                <div className="flex flex-row mt-3">
                    <ExampleImageLoader isGoodExample />
                    <ExampleImageLoader isGoodExample={false} style="ml-3" />
                </div>
            </div>
            <BottomFixedContainer style="px-6 pb-3">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center justify-between rounded-xl border-2 border-deactive mr-[9px] p-4 max-w-fit">
                        <span className="text-deactive text-base font-bold min-w-fit">예치금</span>
                        <div className="flex flex-row max-w-fit">
                            <input
                                type="number"
                                className="text-primary text-base font-bold max-w-[80px] ml-4 focus:outline-none bg-transparent text-right"
                                value={deposit}
                                onChange={handleUpdateDeposite}
                            />
                            <span className="text-primary text-base font-normal ml-0.5">klay</span>
                        </div>
                    </div>
                    <Button style="min-w-fit" onClick={handleCreateRoutine}>
                        <span>루틴 생성</span>
                    </Button>
                </div>
            </BottomFixedContainer>
        </div>
    );
};

export default AddRoutine;

AddRoutine.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
