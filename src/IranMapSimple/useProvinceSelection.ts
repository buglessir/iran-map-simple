import { useCallback, useState } from 'react';

const useProvinceSelection = (defaultProvinces: number[]) => {
  const [selected, setSelected] = useState<number[]>(defaultProvinces);

  const toggle = useCallback((id: number) => {
    setSelected((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((a: number) => a !== id)
        : [...prev, id]
    );
  }, []);

  return { selected, toggle, setSelected };
};

export default useProvinceSelection;