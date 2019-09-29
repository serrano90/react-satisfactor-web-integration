/**
 * @class UserSurvey
 */

export default class UserSurvey {
  id
  name
  email
  cellPhone
  company

  constructor({id, name, email, cellPhone, company}) {
    this.id = id
    this.name = name !== undefined ? name : null
    this.email = email !== undefined ? email : null
    this.cellPhone = cellPhone !== undefined ? cellPhone : null
    this.company = company !== undefined ? company : null
  }

  isValid() {
    return (this.id !== undefined)
  }
}
