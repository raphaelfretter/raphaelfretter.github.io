import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { 
  Navbar, 
  Nav, 
  Form, 
  FormControl, 
  Button, 
  NavDropdown,
  Card 
} from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      select: '#home'
    }
  }

  changePage() {
    this.setState((state) => {
      return {
        select: state.select
      }
    });
  }

  render() {
    return (
      <div className="App-header">
          <Menu fixed="top" />
          <AppWrapper/>
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body></body>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar bg="white" variant="light" style={{minWidth: '875px', width: '50%', margin: '0 25% 0 25%', textAlign: 'center', borderRadius: 30}}>
          <Navbar.Brand style={{borderRadius: 30, backgroundColor: 'white', color: 'rgba(0,0,0,0.5)'}} href="#home">Raphael Fretter - Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/tttgame">Tic-Tac-Toe Game</NavDropdown.Item>
                <NavDropdown.Item href="https://raphaelfretter.github.io/quote-machine/">Quote Machine</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#all-projects">All</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl style={{borderRadius: 30}} type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="Menu-button" variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Card>
        <Card.Text>Hello there</Card.Text>
      </Card>
    </div>
  );
}

export default App;
