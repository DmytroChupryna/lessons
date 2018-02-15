import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';
import asyncComp from '../../hoc/asyncComp'

import './Layout.css'

const AsyncNewCourse = asyncComp(() => { 
  return import('../Course/Course');
});
// import Course from '../Course/Course';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav className="mainNav">
          <ul>
            <li>
              <NavLink
                to='/courses'>
                Courses
                </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'>
                Users
              </NavLink>
            </li>
          </ul>
        </nav> 
        <Redirect from='/all-courses' to='/courses' />
        <Route path='/users' exact component={Users} />
        <Switch>
          <Route path='/courses/:id/:title' component={AsyncNewCourse} /> 
          <Route path='/courses' component={Courses} /> 
        </Switch>
        
      </div>
    )
  }
}
