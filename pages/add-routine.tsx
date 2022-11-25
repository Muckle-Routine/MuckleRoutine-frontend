import { ReactElement, useState } from 'react';
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
import ImageLoader from '@/components/organisms/ImageLoader';

const AddRoutine: NextPageWithLayout = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>(MOCK_CATEGORIES[0]);
    const [selectedCycle, setSelectedCycle] = useState<string>(MOCK_CYCLES[0]);
    const [routineTitle, updateRoutineTitle] = useInput('', 30);
    const [startDate, updateStartDate] = useInput('');
    const [endDate, updateEndDate] = useInput('');
    const [deposit, updateDeposite] = useInput('', 10);

    const handleCreateRoutine = () => {
        router.push('/');
    };

    const handleUpdateDeposite = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateDeposite(event.target.value);
    };

    return (
        <div>
            <PageHeader canGoBack title="루틴 생성" />
            <div className="px-6 pt-[66px] pb-[100px] h-full">
                <div className="mt-3">
                    <InputBox placeholder="제목을 입력해주세요." value={routineTitle} onChange={updateRoutineTitle} />
                    <div className="flex flex-row justify-between mt-6">
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
                        />
                    </div>
                </Section>
                <div className="flex flex-row mt-3">
                    <ImageLoader isGoodExample />
                    <ImageLoader isGoodExample={false} style="ml-3" />
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
