import React from 'react';

function Test ({favorite}) {
  return (
      <div>
          한 번 더 {favorite}
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>hello!</h1>
      <Test favorite="rice!!"/>
    </div>
  );
}

export default App;
