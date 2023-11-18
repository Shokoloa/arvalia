import { useEffect, useState } from 'preact/hooks';

export const useDocument = () => {
  const [myDocument, setMyDocument] = useState(null);
   
  useEffect(() => {
    setMyDocument(document);
  }, []);

  return myDocument;
};
