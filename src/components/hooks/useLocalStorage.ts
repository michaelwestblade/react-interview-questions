import {useState} from "react";

export const useLocalStorage = (key: string, initialValue: string): [string, (value: any) => void] => {
    const [storedValue, setStoredValue] = useState<string>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            setStoredValue(value);

            if (typeof window !== "undefined") {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.log(error);
        }
    }

    return [storedValue, setValue]
}