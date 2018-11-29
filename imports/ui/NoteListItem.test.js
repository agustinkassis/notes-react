import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import moment from 'moment';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
  const noteOne = {
    title: 'Titulito',
    body: 'Bodito',
    updatedAt: moment().format()
  };
  describe('NoteListItem Component', function () {
    it('should render title and timestamp', function () {
      const note = mount(<NoteListItem note={noteOne}/>);

      expect(note.find('h5').text()).toBe(noteOne.title);
      expect(note.find('p').text()).toBe(moment(noteOne.updatedAt).format('M/DD/YY'));
    });

    it('should set Untitled if no titles is provided', function () {
      const note = mount(<NoteListItem note={{}}/>);
      expect(note.find('h5').text()).toBe('Untitled note');
    });
  });
}
