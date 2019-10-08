import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserSurvey from './usersurvey'

export default class Satisfactor extends Component {
  static propTypes = {
    // token with which the project identified
    projectToken: PropTypes.string.isRequired,
    // user data survey required
    userSurvey: PropTypes.instanceOf(UserSurvey).isRequired
  }

  componentDidMount() {
    const {
      projectToken,
      userSurvey
    } = this.props

    if (userSurvey instanceof UserSurvey && userSurvey.isValid()) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `!function(){window.satisfactor=window.satisfactor||function(){(window.satisfactor.value=window.satisfactor.value||[]).push(arguments)};var e=document.createElement("script"),t=document.getElementsByTagName("script")[0].parentNode;e.async=1,e.src="https://app.satisfactor.io/js/nps.min.js",t.appendChild(e);var s=document.createElement("link"),a=document.getElementsByTagName("head")[0];s.type="text/css",s.rel="stylesheet",s.href="https://app.satisfactor.io/css/nps.min.css",a.appendChild(s)}();
      satisfactor({
          token: "${projectToken}",
          userId: "${userSurvey.id}",
          traits: {
              name: "${userSurvey.name}",
              email: "${userSurvey.email}",
              cell_phone: "${userSurvey.cellPhone}",
              company: "${userSurvey.company}"
          }
      });`

      this.instance.appendChild(script)
    }
  }

  render() {
    return (
      <div ref={el => (this.instance = el)} />
    )
  }
}
