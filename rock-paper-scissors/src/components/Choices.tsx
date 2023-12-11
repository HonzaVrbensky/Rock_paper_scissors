import React from 'react'
import { Figure, Choice } from './Figure.tsx'
import styles from './Choices.module.css'


interface IChoices {
  selectedChoice: Choice | null;
  chooseAction?: ((choice: Choice) => void) | null;
}

export const Choices: React.FC<IChoices> = ({selectedChoice, chooseAction = null}) => {
    return (
        <div className={styles.container}>
          <Figure kind={Choice.ROCK} selectedChoice={selectedChoice} chooseAction={chooseAction} />
          <Figure kind={Choice.PAPER} selectedChoice={selectedChoice} chooseAction={chooseAction} />
          <Figure kind={Choice.SCISSORS} selectedChoice={selectedChoice} chooseAction={chooseAction} />
        </div>
    );
}

export default Choices;