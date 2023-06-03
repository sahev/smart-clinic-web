import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  // events: [
  //   {
  //     id: 1,
  //     title: 'All Day Event',
  //     start: '2023-12-01',
  //     color: '#fc9923'
  //   },
  //   {
  //     id: 2,
  //     title: 'Long Event',
  //     start: '2023-12-07',
  //     end: '2023-12-10',
  //     color: '#ffc107' // override!
  //   },
  //   {
  //     id: 3,
  //     groupId: '999',
  //     title: 'Repeating Event',
  //     start: '2023-12-09T16:00:00',
  //     color: '#17a2b8'
  //   },
  //   {
  //     id: 4,
  //     groupId: '999',
  //     title: 'Repeating Event',
  //     start: '2023-12-16T16:00:00',
  //     color: '#17a2b8'
  //   },
  //   {
  //     id: 5,
  //     title: 'Conference',
  //     start: '2023-12-11',
  //     end: '2023-12-13',
  //     color: '#27e3f4' // override!
  //   },
  //   {
  //     id: 6,
  //     title: 'Meeting',
  //     start: '2023-12-12T10:30:00',
  //     end: '2023-12-12T12:30:00',
  //     color: '#0084ff'
  //   },
  //   {
  //     id: 7,
  //     title: 'Lunch',
  //     start: '2023-12-12T12:00:00',
  //     color: '#777D74'
  //   },
  //   {
  //     id: 8,
  //     title: 'Meeting',
  //     start: '2023-12-12T14:30:00',
  //     color: '#0084ff'
  //   },
  //   {
  //     id: 9,
  //     title: 'Birthday Party',
  //     start: '2023-12-28T07:00:00',
  //     color: '#28a745'
  //   },
  //   {
  //     id: 10,
  //     title: 'Meeting',
  //     start: '2023-05-12T14:30:00',
  //     color: '#0084ff'
  //   },
  //   {
  //     id: 11,
  //     title: 'Birthday Party',
  //     start: '2023-05-02T07:00:00',
  //     color: '#28a745'
  //   },
  //   {
  //     id: 12,
  //     title: 'Click for Google',
  //     url: 'http://google.com/',
  //     start: '2023-05-25'
  //   },
  //   {
  //     id: 13,
  //     title: 'Birthday Party',
  //     start: '2023-05-13T07:00:00',
  //     color: '#28a745'
  //   },
  //   {
  //     id: 14,
  //     title: 'Click for Google',
  //     url: 'http://google.com/',
  //     start: '2023-12-28'
  //   },
  //   {
  //     id: 15,
  //     title: 'Meeting',
  //     start: '2023-05-12T14:30:00',
  //     color: '#0084ff'
  //   },
  //   {
  //     id: 16,
  //     title: 'Birthday Party',
  //     start: '2023-05-13T07:00:00',
  //     color: '#28a745'
  //   },
  //   {
  //     id: 17,
  //     title: 'Click for Google',
  //     url: 'http://google.com/',
  //     start: '2023-05-28'
  //   },
  //   {
  //     id: 18,
  //     title: 'All Day Event',
  //     start: '2023-02-01',
  //     color: '#fc9923'
  //   },
  //   {
  //     id: 19,
  //     title: 'Long Event',
  //     start: '2023-02-07',
  //     end: '2023-02-10',
  //     color: '#ffc107' // override!
  //   },
  //   {
  //     id: 20,
  //     groupId: '999',
  //     title: 'Repeating Event',
  //     start: '2023-02-09T16:00:00',
  //     color: '#17a2b8'
  //   },
  //   {
  //     id: 21,
  //     groupId: '999',
  //     title: 'Repeating Event',
  //     start: '2023-02-16T16:00:00',
  //     color: '#57a2b8'
  //   }
  // ],
  events: [],
  weekendsVisible: true,
  date: null
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
