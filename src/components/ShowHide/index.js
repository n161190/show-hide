// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFisrtname: false, isSecondname: false}

  changefirst = () => {
    const {isFisrtname} = this.state
    this.setState({isFisrtname: !isFisrtname})
  }

  changesecond = () => {
    const {isSecondname} = this.state
    this.setState({
      isSecondname: !isSecondname,
    })
  }

  render() {
    const {isFisrtname, isSecondname} = this.state

    return (
      <div className="container">
        <div>
          <h1>Show/Hide</h1>
          <div>
            <button className="btn" onClick={this.changefirst} type="button">
              Show/Hide Firstname
            </button>
            {isFisrtname && (
              <div>
                <p>Joe</p>
              </div>
            )}
          </div>
          <div>
            <button className="btn" onClick={this.changesecond} type="button">
              Show/Hide Lastname
            </button>
            {isSecondname && (
              <div>
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
