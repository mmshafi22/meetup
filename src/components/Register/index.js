import {Component} from 'react'
import MeetupContext from '../../context/MeetupContext'

import {
  RegisterBgContainer,
  RegisterPageLogo,
  RegisterContainer,
  RegisterImg,
  FormElement,
  FormHeading,
  FormLabel,
  FormInput,
  FormSelect,
  BtnRegisterPage,
} from './styledComponents'

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

class Register extends Component {
  state = {showError: false}

  render() {
    const {showError} = this.state
    return (
      <MeetupContext.Consumer>
        {val => {
          const {name, topic, changeName, changeTopic} = val
          const onChangeName = event => {
            changeName(event.target.value)
          }
          const onChangeTopic = event => {
            changeTopic(event.target.value)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({showError: true})
            } else {
              const {history} = this.props
              history.replace('/')
            }
          }

          return (
            <RegisterBgContainer>
              <RegisterPageLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <RegisterContainer>
                <RegisterImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                  alt="website register"
                />
                <FormElement onSubmit={onSubmitForm}>
                  <FormHeading>Let us join</FormHeading>
                  <FormLabel htmlFor="name">NAME</FormLabel>
                  <FormInput
                    type="text"
                    value={name}
                    id="name"
                    placeholder="Your name"
                    onChange={onChangeName}
                  />
                  <FormLabel htmlFor="topic">TOPICS</FormLabel>
                  <FormSelect value={topic} id="topic" onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <option key={each.id} value={each.displayText}>
                        {each.displayText}
                      </option>
                    ))}
                  </FormSelect>
                  <BtnRegisterPage type="submit">Register Now</BtnRegisterPage>
                  {showError && <p>Please enter your name</p>}
                </FormElement>
              </RegisterContainer>
            </RegisterBgContainer>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
