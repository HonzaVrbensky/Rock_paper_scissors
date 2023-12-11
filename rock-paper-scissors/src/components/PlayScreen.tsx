import React, {useState, useEffect} from 'react'
import Choices from './Choices'
import Figure, { Choice } from './Figure'
interface IPlayScreen {
  setScore: ((score: number) => void);
  playerScore: number;
  computerScore: number;
}

  export const PlayScreen: React.FC<IPlayScreen> = ({playerScore, computerScore}) => {

    const [kind, setKind] = useState();
    const [selectedChoicePlayer, setSelectedChoicePlayer] = useState<Choice>(0);
    const [selectedChoiceComputer, setSelectedChoiceComputer] = useState<Choice>(0);

useEffect(() => {
    setSelectedChoiceComputer(Math.floor(Math.random() * 3)+1)
  }, [selectedChoicePlayer])

    return (
      <>
      <p>Player</p>
      <div>{playerScore = 0}</div>
      {<Choices selectedChoice={selectedChoicePlayer} chooseAction={setSelectedChoicePlayer} />}
      <p>Computer</p>
      <div>{computerScore = 0}</div>
      {<Choices selectedChoice={selectedChoiceComputer} />}
      <button>Cancel</button>
      </>
  );
}

export default PlayScreen;