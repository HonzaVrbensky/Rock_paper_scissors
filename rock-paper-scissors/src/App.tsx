import { useState, useEffect } from 'react'
import Layout from "./components/Layout"
import PlayScreen from "./components/PlayScreen"
import ResultScreen from "./components/ResultScreen"
import Choices from './components/Choices'
import './App.css'
import './assets/fonts/Limelight-Regular.ttf';
import Figure from './components/Figure'

const WINNING_SCORE = 3;


export const App = () => {

const [score, setScore] = useState<number>(0);

  return (
    <Layout>
      {<PlayScreen setScore={setScore}></PlayScreen>}
    </Layout>
  )
}

export default App