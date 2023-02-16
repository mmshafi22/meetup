import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import MeetupContext from './context/MeetupContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {name: '', topic: topicsList[0].id}

  changeName = val => {
    this.setState({name: val})
  }

  changeTopic = val => {
    this.setState({topic: val})
  }

  render() {
    const {name, topic} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}
export default App
