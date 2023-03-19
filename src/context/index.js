import React from 'react';

export const WPTContext = React.createContext();
export default function Context({children}) {
  //States
  const [stage, setStage] = React.useState(1);
  const [players, setPlayers] = React.useState([]);
  const [result, setResult] = React.useState('');

  return (
    <WPTContext.Provider>
      {children}
    </WPTContext.Provider>
  );
}
