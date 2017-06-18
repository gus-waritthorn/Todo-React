import React, {Component} from 'react';
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.css';

class Todo extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="card clearfix">
              <div className="to-do-box">
                <h1 className="title">To-do-List</h1>
                  <div className="form-box">
                    <input className="input-todo" type="text"
                       value={this.state.inputText}
                      placeholder="What do you want to do?" />
                    <button  className="bb-input button">Add</button>
                  </div>

                  <div className="list-box">
                    {this.state.list.map((value, index) => {
                      return(
                        <div key={value+index} className="list-item">
                          <div className="text-list" style={{background: this.state.list[index]}}>{value}</div>
                          <div className="bb-action" onClick={this.deleteArray.bind(this, index)}>X</div>
                        </div>
                      );
                    })}
                  </div>
                <h2>{this.state.inputText}</h2>
              </div>
            </div>
          </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}

export default Todo;
