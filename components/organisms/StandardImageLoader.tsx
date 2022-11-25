import ExampleBadge from '../molecules/ExampleBadge';

type Props = {
    isGoodExample: boolean;
};

const StandardImageLoader = ({ isGoodExample }: Props) => {
    return (
        <div className="flex flex-row justify-around min-h-[120px]">
            <div className="bg-red-500">
                <ExampleBadge positive={isGoodExample} />
            </div>
            <input type="file" accept="image/png, image/jpeg" className="flex-1 rounded-xl outline-none" />
        </div>
    );
};

export default StandardImageLoader;
