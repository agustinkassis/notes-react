import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export class NoteListHeader extends React.Component {

  createNote() {

    this.props.meteorCall('notes.insert', {
      title: 'Test',
      body: 'Body test',
    }, resHandler);

    function resHandler(err, res) {
      if (err) {
        throw new Error(401, err.reason);
      }
      console.info('Added baby', res);
    }
  }

  render() {
    return (
      <div>
        <h1>Note List Header</h1>
        <button onClick={this.createNote.bind(this)}>Create Note</button>
      </div>
    );
  }
}

NoteListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    meteorCall: Meteor.call
  };
}, NoteListHeader);
