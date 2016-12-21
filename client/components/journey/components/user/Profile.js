import React, { Component } from 'react'
import Settings from './Settings'
import PersonalInfo from './PersonalInfo'
import axios from 'axios'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      section: 'settings',
      id: 1
    }
    this._section = this._section.bind(this)
    this._onClick = this._onClick.bind(this)
    this.saveParent = this.saveParent.bind(this)
  }

  componentWillMount() {
    var context = this
    axios.get('/api/profile/' + this.state.id,)
    .then(res => {
      var newState = Object.assign({}, this.state, res.data);
      context.setState(newState)
      context.setState({loaded: true})
    })
    .catch(res => console.log(res))
  }

  _section() {
    if (this.state.loaded) {
      switch(this.state.section) {
        case 'settings':
          return (<Settings info={Object.assign({}, this.state)} saveParent={this.saveParent} />);
          break;
        case 'personal':
          return (<PersonalInfo info={Object.assign({}, this.state)} saveParent={this.saveParent}/>);
          break;
        default:
          return null;
      }
    } else {
      return <div>Retrieving your information</div>
    }
  }

  _onClick(section) {
    this.setState({
      section: section
    })
  }

  saveParent(obj) {
    this.setState(obj)
  }

  render() {
    return (
      <div className="profile col-md-offset-2 col-md-8">
        <h2 className="profile-header">
          Profile
        </h2>
        <div>
          <ul className="ul-profile col-md-3">
            <li onClick={() => {this._onClick('settings')}} className="profile-selection"><h3 className="profile-subheader">Settings</h3></li>
            <li onClick={() => {this._onClick('personal')}} className="profile-selection"><h3 className="profile-subheader">Personal Info</h3></li>
          </ul>
        </div>
        <div className="col-md-9">
          {this._section()}
        </div>
      </div>
    )
  }
}