import React from 'react'
import Figure from './Figure.tsx'
import styles from './Choices.module.css'

enum Choice{
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3
}

interface IChoices {
  setKind: (kind : Choice) => void;
  selectedChoice: Choice | null;
  chooseAction?: ((choice: Choice) => void) | null;
}

export const Choices: React.FC<IChoices> = ({setKind, selectedChoice, chooseAction}) => {
    return (
        <div className={styles.container}>
          <Figure kind={Choice.ROCK} selectedChoice={selectedChoice} chooseAction={chooseAction} />
          <Figure kind={Choice.PAPER} selectedChoice={selectedChoice} chooseAction={chooseAction} />
          <Figure kind={Choice.SCISSORS} selectedChoice={selectedChoice} chooseAction={chooseAction} />
        </div>
    );
}

export default Choices;