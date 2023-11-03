import { useEffect, useState } from "react";

export const useLocalStorage = ({ key, initialValue = "" }) => {
  const [state, setState] = useState(() => {
    return localStorage.getItem(key || initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
