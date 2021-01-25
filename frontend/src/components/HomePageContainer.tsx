import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTutorFilter } from '../actions/tutorActions';
import { tutorStateType } from '../reducers/tutorReducer';
import App from './Home';

type Props = {
  count: number,
  filter: any,
  setTutorFilter: (filter: any) => void,
  history: any,
}

class HomePageContainer extends Component<Props> {
  render() {
    return (
      <App
        filter={this.props.filter}
        history={this.props.history}
        setTutorFilter={this.props.setTutorFilter}
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
  setTutorFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
