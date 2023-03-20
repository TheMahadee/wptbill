import React, {useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';
import { WPTContext } from '../../context';

export default function Stage1() {
  const textInput = useRef();
  const ctx = useContext(WPTContext);

  const [error, setError] = useState([false, '']);

  const handleSubmit = e => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validation(value);

    if(validate) {
      //If valid add player
      setError([false, '']);
      textInput.current.value = '';
      ctx.addPlayerHandler(value);
    }
  };

  const validation = value => {
    if(value === '') {
      setError([true, 'Sorry, You need to add something!']);
      return false;
    }
    if (value.length <=2) {
      setError([true, 'Sorry, You need atleast 3 characters!']);
      return false;
    }
    return true;
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control 
            type='text' placeholder='Add player name' name='player'
            ref={textInput}
          />
        </Form.Group>

        {error[0] ? 
          <Alert className='mt-2' variant='danger'>
            {error[1]}
          </Alert>
          : 
          null
        }

        <Button className='miami mt-1' variant='primary' type='submit'>
            Add Player
        </Button>
      </Form>
      
      {
        ctx.players && ctx.players.length > 0 ? 
          <>
            <hr/>
            <div>
              <ul className='list-group'>
                {ctx.players.map((name, i) => (
                  <li key={i} className='list-group-item d-flex 
                  justify-content-between align-items-center 
                  list-group-item-action'>
                    {name}
                    <span className='badge badge-danger'
                      onClick={() => ctx.removePlayerHandler(i)}
                    >
                      X
                    </span>
                  </li>
                ))}
              </ul>
              <div className='action_button' onClick={() => ctx.next()}>
                  NEXT
              </div>
            </div>
          </>
          : null
      }
    </div>
  );
}
