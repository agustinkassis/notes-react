import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';


import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

import { Notes } from '../api/notes';

export class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems(propis) {
    return this.props.notes.map(note => {
        return <NoteListItem note={note}/>
    });
  }

  render() {
    return (
      <div>
        <NoteListHeader/>

        { this.renderItems() }

        <div>Notes count : {this.props.notes.length}</div>
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');
  return {
    notes: Notes.find().fetch()
  };
}, NoteList);
