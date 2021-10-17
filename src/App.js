import React, { Component } from 'react';
import AddEmail from './components/AddEmail'
import IconsSection from './components/IconsSection'
import DetailsSection from './components/DetailsSection'
import TestimonialsSection from './components/TestimonialsSection'
import './App.css';
import {v4 as uuid} from 'uuid';
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';


setConfiguration({ maxScreenClass: 'xl' });
class App extends Component {
  state = {
    emails: [


    ]
  }




addEmail = (title) => {
  const newEmail = {
    id: uuid(),
    title: title,

  }
  this.setState({emails: [...this.state.emails, newEmail]})

  var string = 'Success! \nPeople who signed up already: \n'
  if (this.state.emails.length === 0) {
    var string = 'Success! \nYou are the first one to sign up! \n'
  }

  this.state.emails.map((email) => (string += email.title + "\n"))
  alert(string)

}



  render() {

    return (

      <div className="App">
        <header>
          <div>
            <AddEmail addEmail={this.addEmail}/>
          </div>
        </header>
        <IconsSection />
        <DetailsSection />

        <TestimonialsSection />










      </div>
    );
  }
}

export default App;
