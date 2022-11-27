import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/organisms/Layout';
import NavLayout from '@/components/organisms/NavLayout';
import { useRouter } from 'next/router';
import Section from '@/components/organisms/Section';
import Button from '@/components/molecules/Button';
import useInput from '@/hooks/useInput';
import InputBox from '@/components/molecules/InputBox';
import { useBottomSheet } from '@/components/organisms/DimProvider';

const MOCK = [
    {
        title: '매일 1km 조깅하기',
        thumbnail: '/img-cert3.png',
        standard: '러닝앱 혹은 애플워치를 이용해 1km 러닝 인증해주세요.',
        standard2: '날짜와 1km 러닝이 노출된 사진을 등록해주세요.',
    },
    {
        title: '원하는 책 읽고 저녁에 필사하기',
        thumbnail: '/img-cert2.png',
        standard: '하루에 1권 원하는 책',
        standard2: '책 표지와 필사한 노트가 노출된 사진을 등록해주세요.',
    },
    {
        title: '하루 1잔 물마시기',
        thumbnail: '/img-cert1.png',
        standard: '물 1컵과 타임스탬프가 노출된 사진을 등록해주세요.',
        standard2: '선명한 사진을 등록해주세요',
    },
    {
        title: '매일 2km 조깅하기',
        thumbnail: '/img-cert3.png',
        standard: '러닝앱 혹은 애플워치를 이용해 2km 러닝 인증해주세요.',
        standard2: '날짜와 2km 러닝이 노출된 사진을 등록해주세요.',
    },
];

const RandomValidation: NextPageWithLayout = () => {
    const router = useRouter();
    const [cheerMessage, updateCheerMessage] = useInput('', 200);
    const [certCount, setCertCount] = useState<number>(0);
    const { showBottomSheet } = useBottomSheet();

    const handleValidate = () => {
        setCertCount((prev) => prev + 1);
    };

    useEffect(() => {
        if (certCount === 3) {
            router.push('/certification-main');
        }
    }, [certCount, router]);

    useEffect(() => {
        showBottomSheet();
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-between items-center bg-background01 px-6 py-2">
                <img src={'/img-logo2.svg'} alt="img-logo" />
            </div>
            <div className="pb-[100px]">
                <div className="px-6">
                    <Section title={'루틴 제목'} style="mt-3">
                        <span className="text-deactive text-base text-[18px] font-semibold">
                            {MOCK[certCount].title}
                        </span>
                    </Section>
                    <Section title={'인증 기준'} style="mt-6">
                        <img
                            src={MOCK[certCount].thumbnail}
                            alt="certification-image"
                            className="w-full rounded-xl aspect-video"
                        />
                    </Section>
                    <Section title={'인증 기준'} style="mt-6">
                        <ul className="list-disc ml-5 pt-2 pb-4">
                            <li className="text-deactive text-sm text-[13px] font-medium">
                                {MOCK[certCount].standard}
                            </li>
                            <li className="text-deactive text-sm text-[13px] font-medium">
                                {MOCK[certCount].standard2}
                            </li>
                        </ul>
                    </Section>
                    <Section title={'응원의 한마디'} style="mt-6">
                        <InputBox
                            placeholder="응원의 한마디를 입력해주세요"
                            value={cheerMessage}
                            onChange={updateCheerMessage}
                        />
                        {/* <div className="pt-2 pl-4 bg-background02 rounded-xl">
                            <textarea
                                placeholder="응원의 한마디를 입력해주세요"
                                className="focus:outline-none bg-transparent min-h-[120px] min-w-full text-white"
                                value={cheerMessage}
                                onChange={(event) => updateCheerMessage(event.target.value)}
                            />
                        </div> */}
                    </Section>
                </div>
                <div className="px-6 pt-10 flex flex-row">
                    <Button type="outline" onClick={handleValidate}>
                        <span>실패</span>
                    </Button>
                    <Button style="ml-3" onClick={handleValidate}>
                        <span>성공</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RandomValidation;

RandomValidation.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NavLayout>{page}</NavLayout>
        </Layout>
    );
};
