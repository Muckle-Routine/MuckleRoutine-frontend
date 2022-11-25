import { ReactElement } from 'react';
import Layout from '@/components/organisms/Layout';
import PageHeader from '@/components/organisms/PageHeader';
import Section from '@/components/organisms/Section';
import IconTextButton from '@/components/molecules/IconTextButton';
import CountCard from '@/components/molecules/CountCard';

const My = () => {
    return (
        <div>
            <PageHeader canGoBack title="마이페이지" />
            <div className="px-6 pt-[66px]">
                <h1 className="text-4xl text-[32px] font-semibold text-white mt-3">Kirill</h1>
                <Section title={'미션 상태'} style="mt-6">
                    <div className="flex flex-row">
                        <CountCard name={'생성'} count={2} />
                        <CountCard name={'진행 중'} count={2} style="mx-3" />
                        <CountCard name={'완료'} count={1} />
                    </div>
                </Section>
                <Section title={'설정'} style="mt-10">
                    <IconTextButton iconSrc={'/ic-wallet.svg'} text={'내 지갑 설정'} />
                    <IconTextButton iconSrc={'/ic-setting.svg'} text={'개인정보 설정'} style="mt-3" />
                </Section>
            </div>
        </div>
    );
};

export default My;

My.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
