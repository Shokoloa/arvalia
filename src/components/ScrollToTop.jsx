import { useEffect } from "preact/hooks";
import { useWindow } from '../hooks/useWindow';

export const ScrollToTop = () => {
  const win = useWindow();

  useEffect(() => {
    if (win)
      win.scrollTo(0, 0);
  }, []);
}

