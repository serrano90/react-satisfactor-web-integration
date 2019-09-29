import React, { Component } from 'react'

import { Satisfactor, UserSurvey } from 'react-satisfactor-web-integration'

export default class App extends Component {
  render () {
    const userSurvey = new UserSurvey({
      id: 589746,
      //name: 'Testing Test',
      email: 'test@satisfactor.com',
      cellPhone: null,
      company: null,
    });
    return (
      <div>
        <Satisfactor projectToken='ybpK2y8bLaGaVRRuGfm3hP7nrRPzB6PX' userSurvey={userSurvey} />
      </div>
    )
  }
}
