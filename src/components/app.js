/*
  Views
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { send } from '../actions'

// Container Components
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    )
  }
}
FormApp.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

// Presentational Components
class FormInput extends React.Component {
  send(e) {
    e.preventDefault()
    this.props.handleClick(this.myInput.value.trim())
    this.myInput.value = ''
    return
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    )
  }
}
FormInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

// Presentational Components
class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}
FormDisplay.propTypes = {
  data: PropTypes.string,
}


// Connect to Redux
function mapStateToProps(state) {
  window.console.log(state)
  return {
    value: state.value,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value))
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp)

export default AppContainer
