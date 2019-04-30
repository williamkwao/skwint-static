import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'

const SubscribeStyle = styled.div`
  form {
    font-family: Montserrat;

    input {
      :focus {
        outline: none;
      }
      font-size: 16px;
      min-width: 535px;
      padding: 16px 16px;
      padding-right: 231px;
      background: transparent;
      border: 1.5px solid #ffffff;
      color: #ffffff;
      box-sizing: border-box;
      border-radius: 57px;
    }
    button {
      color: #2c88bb;
      background: #ffffff;
      border-radius: 57px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding: 15px 18px;
      margin-left: -213px;
      border: 1.5px solid #ffffff;
      width: 213.906px;
    }
  }
`

class SubscribeForm extends Component {
  state = {
    resultMessage: '',
    btnText: 'Follow Our Journey',
  }

  handleSubmit = async e => {
    e.preventDefault()
    const email = e.target.email.value
    var re = /\S+@\S+/
    if (re.test(email)) {
      try {
        const result = await addToMailchimp(email)
        if (result.result === 'success') {
          this.setState({ resultMessage: '', btnText: 'Thank You!' })
        } else {
          this.setState({ resultMessage: result.msg })
        }
      } catch (error) {
        this.setState({ resultMessage: error.msg })
      }
    } else {
      this.setState({ resultMessage: 'Enter a valid email' })
    }
  }
  render() {
    return (
      <SubscribeStyle>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="email"
            name="email"
            onChange={() => this.setState({ btnText: 'Follow Our Journey' })}
            placeholder="youremail@example.com"
          />
          <button type="submit">{this.state.btnText}</button>
        </form>

        {this.state.resultMessage ? (
          <p
            dangerouslySetInnerHTML={{
              __html: this.state.resultMessage,
            }}
          />
        ) : null}
      </SubscribeStyle>
    )
  }
}

export default SubscribeForm
