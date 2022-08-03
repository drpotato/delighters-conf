import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(null);

  // Initial sync with LocalStorage
  useEffect(() => {
    setValue(localStorage.getItem(key));
  }, [key]);

  // Internal state with LocalStorage
  useEffect(() => {
    if (value === localStorage.getItem(key)) {
      return;
    }

    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.key !== key) {
        return;
      }

      setValue(event.newValue);
    };

    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [key]);

  return [value, useCallback((value: string) => setValue(value), [])] as const;
};
