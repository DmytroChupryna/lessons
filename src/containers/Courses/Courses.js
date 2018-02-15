import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (id) => { 
        this.props.history.push({ pathname: '/courses/' + id });
    }

    render() {
        let courses = this.state.courses.map( course => {
            return (
                <article
                    className="Course"
                    key={course.id} >
                    <Link to={{
                        pathname: `${this.props.match.url}/${course.id}/${course.title}`,
                    }} >
                        { course.title }
                        </Link>
                </article>
            );
        } )

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    { courses }
                </section>
            </div>
        );
    }
}

export default Courses;