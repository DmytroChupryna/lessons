import React, { Component } from 'react';
import { connect } from 'react-redux';


import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.prns.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prns: state.persons,
    }
};

const mapDispatchToProps = dispatch => { 
    return {
        personAdded: () => dispatch({ type: 'ADD_PERSON' }),
        personDeleted: (personId) => dispatch({ type: 'DELETE_PERSON', personId: personId }),
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Persons);