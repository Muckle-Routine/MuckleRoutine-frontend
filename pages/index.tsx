import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from './_app';
import Chip from '@/components/molecules/Chip';
import Layout from '@/components/organisms/Layout';
import HomeHeader from '@/components/organisms/HomeHeader';
import RoutineCard from '@/components/organisms/RoutineCard';
import NavLayout from '@/components/organisms/NavLayout';
import { MOCK_CATEGORIES, MOCK_ROUTINES } from '../mock';
import { useKlip } from 'klip/hooks';

const Home: NextPageWithLayout = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(MOCK_CATEGORIES[0]);
    const [prepare, request, result, login] = useKlip();

    const handleSignIn = () => {
        login();
    };

    return (
        <div className="">
            <HomeHeader onPressWallet={handleSignIn} />
            <div className="px-6 pb-14">
                <h1 className="text-white text-4xl text-[32px] font-semibold mt-[10px] mb-6">
                    오늘의 머클루틴에
                    <br />
                    도전해보세요
                </h1>
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
                <div className="mt-6 -ml-6 overflow-y-scroll">
                    {MOCK_ROUTINES.map((routine) => {
                        return (
                            (selectedCategory === MOCK_CATEGORIES[0] || selectedCategory === routine.category) && (
                                <RoutineCard data={routine} key={routine.routinId} />
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NavLayout>{page}</NavLayout>
        </Layout>
    );
};
