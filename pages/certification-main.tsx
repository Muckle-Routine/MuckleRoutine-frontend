import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/organisms/Layout';
import NavLayout from '@/components/organisms/NavLayout';
import { useRouter } from 'next/router';

const CertificationMain: NextPageWithLayout = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/certification-validation');
    }, [router]);

    return <div></div>;
};

export default CertificationMain;

CertificationMain.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NavLayout>{page}</NavLayout>
        </Layout>
    );
};
