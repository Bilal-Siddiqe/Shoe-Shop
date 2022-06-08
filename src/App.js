import React from 'react';
import { Card } from './component/card';
import { ErrorBoundary } from './component/error';
import './App.css';
import './component/card.css'
import Navbar from './component/Navbar'
import Bodysection from './component/Bodysection'
import Footer from "./component/Footer"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{ text: "write something here", id: 12345 }],
      text: ""
    }
  }

  submitHandler(envt) {
    envt.preventDefault();
    if (!this.state.text.length) {
      return; 
    }
    const newTodo = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      text: ""
    })
  }

  onChangeHandler(envt) {
    this.setState({
      text: envt.target.value
    })
  }

  removeHandler(id, self, evt) {
    let todo = self.state.todos;
    for (let i = 0; i < self.state.todos.length; i++) {
      const item = self.state.todos[i];
      if (item.id === id) {
        todo = todo.slice(0, i).concat(todo.slice(i + 1))
      }
    }
    self.setState({ todos: todo })
  }

  render() {
    return (
      <>
        <Navbar />
        <Bodysection />
        <center>
          <form onSubmit={this.submitHandler.bind(this)} className='crdtxt'>
            <label htmlFor="todo" className='todolable'>Share Your Experience</label>
            <br />
            <br />
            <input id="todo" value={this.state.text} onChange={this.onChangeHandler.bind(this)}/>
            <section className='todosub'><button className='btn-all '>Submit</button></section>
          </form>
        </center>
        <TodoRender todos={this.state.todos}
          // _removeBtN={this.removeHandler}
          self={this} />
      </>
    )
  }
}

const TodoRender = ({ todos, self }) => {
  return (

    <div>
      <section className="crds">
        {todos.map((item, idx) => {
          return <ErrorBoundary key={item.id} >
            <Card colorClass={(idx % 2 === 1) ? "redCard" : "blueCard"} >
              <p style={{ flex: 1 }}>{item.text}</p>
              <button onClick={self.removeHandler.bind(this, item.id, self)} className='btn-all'>Delete</button>
            </Card>
          </ErrorBoundary>
        })}

      </section>
      <Footer />
    </div>
  )
}

export default App;
