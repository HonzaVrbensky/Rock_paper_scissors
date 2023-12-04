import React from 'react'
import Figure from './Figure.tsx'
import styles from './Choices.module.css'

export const Choices = ({}) => {
    return (
        <div className={styles.container}>
          <Figure kind={} selectedChoice={selectedChoice} chooseAction={chooseAction} />
          <Figure kind={} selectedChoice={selectedChoice} chooseAction={chooseAction} />
          <Figure kind={} selectedChoice={selectedChoice} chooseAction={chooseAction} />
        </div>
    );
}

export default Choices;