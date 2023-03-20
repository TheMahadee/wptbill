import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const WPTContext = React.createContext();
export function Context({children}) {
  //States
  const [stage, setStage] = React.useState(1);
  const [players, setPlayers] = React.useState([]);
  const [result, setResult] = React.useState('');

  const addPlayerHandler = name => {
    setPlayers([...players, name]);
  };

  const removePlayerHandler = id => {
    const tempArr = players;
    tempArr.splice(id, 1);
    setPlayers([...tempArr]);
  };
  
  const next = () => {
    if (players.length < 2) {
      toast.error('You need more than 1 player to play!', 
        {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );
    } else {
      setStage(2);
    }
  };

  return (
    <>
      <WPTContext.Provider 
        value={{stage, setStage, players, setPlayers, next,
          result, setResult, addPlayerHandler, removePlayerHandler}}>
        {children}
      </WPTContext.Provider>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        limit={1}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
