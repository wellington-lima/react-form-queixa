import { useState } from 'react';

export const useSessionCounter = (initial: number = 1) => {

  const [session, setSession] = useState(initial);
  const maxStep = 7;
  const minStep = 1;

  const increment = (value: number) => {

    if(session < maxStep )
      setSession(session + value);
  }
  
  const decrement = (value: number) => {

    if(session > minStep)
      setSession(session - value);
  }

  return { session, increment, decrement }
}