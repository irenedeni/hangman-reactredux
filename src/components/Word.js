import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export class Word extends React.Component {
  static propTypes = {
    word: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
  return (
        <div>
          <h1 className='word-title'>{this.props.word}</h1>
          {this.props.word.map((item, index) => (
              <span className='index' key={index}>_ </span> ))}
        </div>
      )
    }
}

const mapStateToProps = ({ word }) => ({ word })

export default connect(mapStateToProps)(Word)
