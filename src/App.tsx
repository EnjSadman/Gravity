import React, { useEffect, useState } from 'react';
import { ServerGetRequest } from './api/requests';
import './App.scss';

const isPairNumbers = (numberArray : number[]) => {
  return numberArray.every((singleNumber : number) => (singleNumber % 2) === 0);
};

const check = async () => {
  const result = await Promise.all([ServerGetRequest(), ServerGetRequest()]);

  return (isPairNumbers(result));
};

export const App: React.FC = () => {
  const [isPair, setIsPair] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const checker = async () => {
        let paired : boolean = await check();

        while (paired === false) {
          paired = await check();
        }

        setIsPair(paired);
      };

      checker();
    }, 3000);
  }, []);

  return (
    <div className="container">
      {isPair
        ? (
          <>
            <img className="singleImage" src="./thumb.png" alt="thumb" />
            <img className="singleImage" src="./thumb.png" alt="thumb" />
            <img className="singleImage" src="./thumb.png" alt="thumb" />
          </>
        )
        : (
          <>
            <img className="singleImage" src="./placeholder.png" alt="placeholder" />
            <img className="singleImage" src="./placeholder.png" alt="placeholder" />
            <img className="singleImage" src="./placeholder.png" alt="placeholder" />
          </>
        )}
    </div>
  );
};
