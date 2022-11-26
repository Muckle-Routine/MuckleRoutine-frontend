import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/organisms/Layout';
import NavLayout from '@/components/organisms/NavLayout';
import { useRouter } from 'next/router';
import { MOCK_ROUTINES } from 'mock';
import RoutineCard from '@/components/organisms/RoutineCard';

const CertificationMain: NextPageWithLayout = () => {
    const router = useRouter();

    return (
        <div>
            <div className="flex flex-row justify-between items-center bg-background01 px-6 py-2">
                <img src={'/img-logo2.svg'} alt="img-logo" />
            </div>
            <div className="px-6 pb-14">
                <h1 className="text-white text-4xl text-[32px] font-semibold mt-[10px] mb-3">
                    루틴을 검증하고,
                    <br />
                    인증해보세요.
                </h1>
                <div>
                    <span className="text-deactive font-normal text-sm text-[13px]">참여한 루틴에 인증해보세요!</span>
                    <br />
                    <span className="text-deactive font-normal text-sm text-[13px]">
                        2회 검증 참여 후 인증을 제출할 수 있어요.
                    </span>
                </div>
                <div className="mt-6 -ml-6 overflow-y-scroll">
                    {MOCK_ROUTINES.map((routine) => {
                        return (
                            <RoutineCard
                                data={routine}
                                key={routine.routinId}
                                type="certification"
                                onPress={() => router.push(`/certification-validation/${routine.routinId}`)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CertificationMain;

CertificationMain.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NavLayout>{page}</NavLayout>
        </Layout>
    );
};
