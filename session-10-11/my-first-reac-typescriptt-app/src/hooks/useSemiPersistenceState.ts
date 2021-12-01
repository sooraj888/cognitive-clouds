import { useState, useEffect } from "react";

export default function useSemiPersistenceState(initState: any, key: any) {
  const [value, setValue] = useState<any>(
    localStorage.getItem(key) || initState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}
