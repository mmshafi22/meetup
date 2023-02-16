import {Component} from 'react'
import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import {
  BgContainer,
  WebsiteLogo,
  TopicContainer,
  TopicHeading,
  TopicName,
  ButtonNavigate,
  MeetupImg,
} from './styledComponents'

class Home extends Component {
  onNavigateToRegister = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {name, topic} = value
          return (
            <BgContainer>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
                alt="website logo"
              />
              {name !== '' ? (
                <TopicContainer>
                  <TopicHeading>Hello {name}</TopicHeading>
                  <TopicName className="topic-name">
                    Welcome to {topic}
                  </TopicName>
                </TopicContainer>
              ) : (
                <TopicContainer>
                  <TopicHeading>Welcome to Meetup</TopicHeading>
                  <TopicName>Please register for the topic</TopicName>
                  <Link to="/register">
                    <ButtonNavigate
                      type="button"
                      className="btn-register"
                      onClick={this.onNavigateToRegister}
                    >
                      Register
                    </ButtonNavigate>
                  </Link>
                </TopicContainer>
              )}
              <MeetupImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meetup-img"
              />
            </BgContainer>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
