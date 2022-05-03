import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ReducerTutorial from './ReducerTutorial';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReducerTutorial />
  </StrictMode>
);
