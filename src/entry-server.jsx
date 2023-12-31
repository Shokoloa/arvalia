import renderToString from 'preact-render-to-string';
import { App } from './App';

export const render = () => {
  const html = renderToString(<App />);
  return { html };
};
