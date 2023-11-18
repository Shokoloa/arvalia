import { useEffect, useState } from 'preact/hooks';

export const useWindow = () => {
  const [myWindow, setMyWindow] = useState(null);
   
  useEffect(() => {
    setMyWindow(window);
  }, []);

  return myWindow;
};
