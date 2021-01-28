import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTutorFilter, queryTutors } from '../actions/tutorActions';
import { tutorStateType } from '../reducers/tutorReducer';
import App from './TutorInfo';

type Props = {
  count: number,
  filter: any,
  tutors: Array<any>,
  history: any,
  location: any,
  setTutorFilter: (filter: any) => void
  queryTutors: (filter: any) => void
}

class TutorListContainer extends Component<Props> {

  render() {
    return (
      <App
        history={this.props.history}
        searchString={this.props.location.search}
        filter={this.props.filter}
        tutors={this.props.tutors}
        setTutorFilter={this.props.setTutorFilter}
        queryTutors={this.props.queryTutors}
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

export default connect(mapStateToProps, mapDispatchToProps)(TutorListContainer)
