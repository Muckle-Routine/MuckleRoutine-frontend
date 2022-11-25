import { useCallback, useState } from 'react';

type ReturnType = [value: string, onChangeText: (text: string) => void];

const useInput = (initialValue = '', restrictLength = 300): ReturnType => {
    const [value, setValue] = useState<string>(initialValue);

    const handleUpdateValue = useCallback(
        (text: string) => {
            let nextValue: string;

            if (restrictLength) {
                nextValue = text.length < restrictLength ? text : text.substring(0, restrictLength);
            } else {
                nextValue = text;
            }

            setValue(nextValue);
        },
        [restrictLength],
    );
    return [value, handleUpdateValue];
};

export default useInput;
