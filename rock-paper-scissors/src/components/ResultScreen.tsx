import React from 'react'
import styles from './ResultScreen.module.css'

interface IResultScreen {
  user: number;
  computer: number;
}

  export const ResultScreen: React.FC<IResultScreen> = ({user, computer}) => {
    return (
        <div className={styles.container}>
          <h1>Results</h1>
          <p>Player</p>
          <p className={styles.enhanced}>{user}</p>
          <p>Computer</p>
          <p className={styles.enhanced}>{computer}</p>
          <button>Reset</button>
        </div>
    );
}

export default ResultScreen;