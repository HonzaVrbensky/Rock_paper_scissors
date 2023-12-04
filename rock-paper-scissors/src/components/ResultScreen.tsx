import React from 'react'
import styles from './ResultScreen.module.css'

  export const ResultScreen = () => {
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