import React from 'react'
import styles from './Figure.module.css'

interface IFigureProps {
    kind: Choice;
    selectedChoice: Choice | null;
    chooseAction?: ((choice: Choice) => void) | null;
  }

  const choiceToText = (choice: Choice) => {
    switch (choice) {
      case Choice.ROCK:
        return "Rock";
      case Choice.PAPER:
        return "Paper";
      case Choice.SCISSORS:
        return "Scissors";
    }
  }

  export const Figure: React.FC<IFigureProps> = ({kind, selectedChoice, chooseAction = null}) => {
    return (
        <div className={
          styles.choice 
          + " " + (kind === selectedChoice ? styles.selected : "") 
          + " " + styles[choiceToText(kind)]
          + " " + (chooseAction ? styles.clickable : "")         
          } onClick={() => chooseAction && chooseAction(kind)}
          title={choiceToText(kind)}
          >
          {choiceToText(kind)}
        </div>
    );
}

export default Figure;