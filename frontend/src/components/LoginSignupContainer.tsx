import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTutorFilter, queryTutors } from '../actions/tutorActions';
import { tutorStateType } from '../reducers/tutorReducer';
import App from './LoginSignup';

type Props = {
  count: number,
  filter: any,
  tutors: Array<any>,
  history: any,
  location: any,
  setTutorFilter: (filter: any) => void
  queryTutors: (filter: any) => void
}

class LoginSignupContainer extends Component<Props> {

  render() {
    return (
      <App
      />
    );
  }
}

const mapStateToProps = (state: { tutors: tutorStateType }) => {
  return {
    count: state.tutors.tutorCount,
    filter: state.tutors.filter,
    tutors: state.tutors.tutors
  }
}

const mapDispatchToProps = {
  setTutorFilter,
  queryTutors
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignupContainer)
