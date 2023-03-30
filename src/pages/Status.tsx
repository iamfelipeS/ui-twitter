import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'



export function Status(){
  const [newAnswer, setNewAnswer] = useState ('')
  const [answers, setAnswers] = useState([   
    'Concordo...',
    'Faz sentido!',
    'Parabéns pelo progresso'
  ])


  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  } 

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

    return(
        <main className='status'>
        <Header title='Tweet' />

        <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maxime debitis sit odit harum ab quisquam, praesentium, cumque optio corporis provident. Modi dignissimos, doloribus quas voluptatum corporis vel odit asperiores!" />
       
        <Separator />
       
          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/iamfelipeS.png" alt="Felipe Silva" />
              <textarea 
              name="tweet" 
              id="tweet" 
              placeholder="Tweet your answer" 
              onKeyDown={handleHotKeySubmit}
              onChange={(event) =>{
                setNewAnswer(event.target.value)
              }}
              />
            </label>
              <button type="submit">Answer</button>
          </form>

          {answers.map(answers => {
            return <Tweet key={answers} content={answers} />    //acessando o array de answers
          })}
      </main>
    )
}