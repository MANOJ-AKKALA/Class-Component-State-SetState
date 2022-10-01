import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Mama miya, {name}</h1>
  }
}

/* const Welcome = () => <h1>Hello, User</h1> */

export default Welcome
