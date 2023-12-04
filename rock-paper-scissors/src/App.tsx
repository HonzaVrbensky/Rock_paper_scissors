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

const [kind, setKind] = useState();
const [selectedChoice, setSelectedChoice] = useState<Choice>(null);



  return (
    <Layout>
      {<Choices setKind={setKind}></Choices>}
      {<Figure kind={kind} selectedChoice={selectedChoice}></Figure>}
    </Layout>
  )
}

export default App
