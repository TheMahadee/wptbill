import React, {useContext, useEffect} from 'react';
import { WPTContext } from '../../context';

export default function Stage2() {
  const ctx = useContext(WPTContext);

  useEffect(() => {
    generateLooser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateLooser = () => {
    ctx.setResult('Thinking!');
    setTimeout(() => {
      let res;
      do {
        res = ctx.players[Math.floor(Math.random() * ctx.players.length)];
      } while (res === ctx.result);
      
      ctx.setResult(res);
    }, 2000);
  };

  const resetStage = () => {
    ctx.setStage(1);
    ctx.setPlayers([]);
    ctx.setResult('');
  };
  return (
    <>
      <div className='result_wrapper'>
        <h3>The looser is:</h3>
        <div>{ctx.result}</div>
      </div>
      <div className='action_button' onClick={resetStage}>
        PLAY AGAIN
      </div>
      <div className='action_button btn_2' onClick={generateLooser}>
        GET A NEW LOOSER
      </div>
    </>
  );
}
