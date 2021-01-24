import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTutor, getAllTutors, queryTutors } from '../actions/tutorActions';
import { tutorStateType } from '../reducers/tutorReducer';
import App from './Home';

type Props = {
  count: number,
  addTutor: () => void
  getAllTutors: () => void,
  queryTutors: (query: Object) => void,
  history: any,
}

type State = {
  todos: Array<{ name: string }>
}

class HomePageContainer extends Component<Props, State> {
  state = {
    todos: [{ name: 'test' }, { name: '222' }]
  }
  onClickSearch = (query: string) => {
    console.log(query);
    this.props.history.push({
      pathname: '/tutors',
      search: '?query=name'
    });
    this.props.queryTutors({ subjects:query });
  }
  render() {
    return (
      <App searchTutors={this.onClickSearch} />
    );
  }
}

const mapStateToProps = (state: { tutors: tutorStateType }) => {
  return {
    count: state.tutors.tutorCount,
  }
}

const mapDispatchToProps = {
  addTutor,
  getAllTutors,
  queryTutors
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
