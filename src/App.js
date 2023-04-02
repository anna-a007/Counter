import { Component } from "react";
import { useState } from "react";
import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   inc= () => {
//     this.setState((state) => {
//       return {
//         ...state,
//         count: state.count < 10 ? state.count += 1 : state.count,
//       };
//     });
//   }

//   dec= () => {
//     this.setState((state) => {
//       return {
//         ...state,
//         count: state.count > -10 ? state.count -= 1 : state.count,
//       };
//     });
//   }

//   rnd = () => {
//     this.setState(() => {
//       return {
//         count: +(Math.random() * (10 - -10) + -10).toFixed(0),
//       };
//     });
//   }

//   reset = () => {
//     this.setState((state) => {
//       return {
//         ...state,
//         count: this.props.counter,
//         //count:0
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="counter">{this.state.count}</div>
//         <div className="controls">
//           <button onClick={this.inc}>INC</button>
//           <button onClick={this.dec}>DEC</button>
//           <button onClick={this.rnd}>RND</button>
//           <button onClick={this.reset}>RESET</button>
//         </div>
//       </div>
//     );
//   }
// }

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count < 10 ? count + 1 : count);
  };

  const dec = () => {
    setCount(count > -10 ? count - 1 : count);
  };

  const rnd = () => {
    setCount(+(Math.random() * (10 - -10) + -10).toFixed(0));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="counter">{count}</div>
      <div className="controls">
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={rnd}>RND</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default App;
