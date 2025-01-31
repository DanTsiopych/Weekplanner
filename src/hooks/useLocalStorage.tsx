import { useState, useEffect } from "react";
import { Tasks } from "../types/types";

const useLocalStorage = (key: string, defaultValue: Tasks[]): [Tasks[], React.Dispatch<React.SetStateAction<Tasks[]>>] => {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};

export default useLocalStorage;


