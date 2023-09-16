import '../personality-test-page/style.scss'
import {useState} from 'react';

function PersonalityTest() {

  const questions = [
    {
      questionText: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
      questionOptions: [
        { answerText: 'Don’t dare to interrupt them', isCorrect: false },
        { answerText: 'Think it’s more important to give them some of your time; work can wait', isCorrect: false },
        { answerText: 'Listen, but with only with half an ear', isCorrect: true },
        { answerText: 'Interrupt and explain that you are really busy at the moment', isCorrect: false }
      ]
    },
    {
      questionText: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
      questionOptions: [
        { answerText: 'Look at your watch every two minutes', isCorrect: false },
        { answerText: 'Bubble with inner anger, but keep quiet', isCorrect: true },
        { answerText: 'Explain to other equally impatient people in the room that the doctor is always running late', isCorrect: false },
        { answerText: 'Complain in a loud voice, while tapping your foot impatiently', isCorrect: false }
      ]
    },
    {
      questionText: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
      questionOptions: [
        { answerText: 'Don’t dare contradict them', isCorrect: true },
        { answerText: 'Think that they are obviously right', isCorrect: false },
        { answerText: 'Defend your own point of view, tooth and nail', isCorrect: false },
        { answerText: 'Continuously interrupt your colleague', isCorrect: false }
      ]
    },
    {
      questionText: 'You are taking part in a guided tour of a museum. You:',
      questionOptions: [
        { answerText: 'Are a bit too far towards the back so don’t really hear what the guide is saying', isCorrect: false },
        { answerText: 'Follow the group without question', isCorrect: true },
        { answerText: 'Make sure that everyone is able to hear properly', isCorrect: false },
        { answerText: 'Are right up the front, adding your own comments in a loud voice', isCorrect: false }
      ]
    },
    {
      questionText: 'During dinner parties at your home, you have a hard time with people who:',
      questionOptions: [
        { answerText: 'Ask you to tell a story in front of everyone else', isCorrect: false },
        { answerText: 'Talk privately between themselves', isCorrect: true },
        { answerText: 'Hang around you all evening', isCorrect: false },
        { answerText: 'Always drag the conversation back to themselves', isCorrect: false }
      ]
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState({
    questionNo: 0,
  });


  // const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
      <>
        <div className='container'>
          <div className='question-number txt-center'>1/{questions.length}</div>
          <div className='question txt-center'>
            {questions[currentQuestion.questionNo].questionText}
          </div>
          <div className='options'>
            {questions[currentQuestion.questionNo].questionOptions.map((questionOption)=><button className='question-options'>{questionOption.answerText}</button>)}
          </div>
        </div>
      </>
    )
  }
  
  export default PersonalityTest
