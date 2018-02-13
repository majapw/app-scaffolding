import React from 'react';

import './App.scss';

const ARABIC_DEMO = 'مرحبا! اسمي مايا.';
const ARABIC_BIDI_DEMO = '.Maja مرحبا! اسمي';

export default function App() {
  return (
    <div>{ARABIC_BIDI_DEMO}</div>
  );
}
