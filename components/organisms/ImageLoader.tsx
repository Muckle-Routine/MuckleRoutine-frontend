import React, { useEffect, useRef, useState } from 'react';
import ExampleBadge from '../molecules/ExampleBadge';

type Props = {
    isGoodExample: boolean;
    style?: string;
};

const ImageLoader = ({ isGoodExample, style }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string>();
    const fileReader = useRef<FileReader>();

    const handleLoadImage = () => {
        inputRef.current?.click();
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files) {
            fileReader.current?.readAsDataURL(files[0]);
        }
    };

    useEffect(() => {
        fileReader.current = new FileReader();
        fileReader.current.onload = () => {
            const _imageSrc = fileReader.current?.result as string;
            setImageSrc(_imageSrc);
        };
    }, []);

    return (
        <div className={`flex flex-row justify-around flex-1 rounded-xl ${style}`}>
            {imageSrc && (
                <div className="mr-3">
                    <ExampleBadge positive={isGoodExample} />
                </div>
            )}
            <div className="aspect-square w-full flex justify-center items-center rounded-xl bg-background02">
                {imageSrc ? (
                    <img className="aspect-square w-full rounded-xl" src={imageSrc} alt="example-image" />
                ) : (
                    <button className="cursor-pointer" onClick={handleLoadImage}>
                        <img src="/ic-image.png" className="w-6 h-6" />
                    </button>
                )}
            </div>
            <input type="file" accept="image/png, image/jpeg" hidden ref={inputRef} onChange={handleChangeInput} />
        </div>
    );
};

export default ImageLoader;
