import React, {useState, useEffect} from 'react'
interface IPlayScreen {
  setScore: ((score: number) => void);
  score: number;
}

  export const PlayScreen: React.FC<IPlayScreen> = ({score}) => {

useEffect(() => {

  })
    return (
      <>
      <h2>Player</h2>
      <div>{score = 1}</div>
      </>
  );
}

export default PlayScreen;