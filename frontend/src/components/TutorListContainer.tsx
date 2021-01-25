import React, { Component } from 'react'
import { connect } from 'react-redux'
import { queryTutors } from '../actions/tutorActions';
import { tutorStateType } from '../reducers/tutorReducer';
import App from './TutorList';

type Props = {
  count: number,
  filter: any,
  history: any,
  location: any,
  queryTutors: (filter: any) => void
}

class TutorListContainer extends Component<Props> {

  render() {
    return (
      <App
        searchString={this.props.location.search}
        filter={this.props.filter}
        setTutorFilter={this.props.queryTutors}
      />
    );
  }
}

const mapStateToProps = (state: { tutors: tutorStateType }) => {
  return {
    count: state.tutors.tutorCount,
    filter: state.tutors.filter,
  }
}

const mapDispatchToProps = {
  queryTutors
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorListContainer)
