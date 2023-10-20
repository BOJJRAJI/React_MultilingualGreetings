import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
    details: languageGreetingsList[0],
  }

  render() {
    const {activeId, details} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-list">
          {languageGreetingsList.map(item => {
            const className =
              item.id === activeId ? 'active-button' : 'normal-button '
            return (
              <li className="lang-list" key={item.id}>
                <button
                  type="button"
                  className={className}
                  onClick={() =>
                    this.setState({activeId: item.id, details: item})
                  }
                >
                  {item.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <div className="greet-container">
          <img
            src={details.imageUrl}
            alt={details.imageAltText}
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default App
