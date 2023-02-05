import React from "react";
import { Animations } from "./components/Animations";
import Buttons from "./components/Buttons";

const App = () => {
  console.log(<Buttons text={"hello"} type={"btn-primary"} />);
  return (
    <Animations />
    // <div>
    //   <Buttons text={'hello'} type={'btn-primary'} />
    // </div>
    // <div>
    //   <h1 className="title">Hola desde sass</h1>
    //   <hr />
    //   <ul>
    //     <li>
    //       <a href="#">Google</a>
    //     </li>
    //     <li>
    //       <a href="#">facebook</a>
    //     </li>
    //     <li>
    //       <a href="#">Instagram</a>
    //     </li>
    //   </ul>
    //   <hr />
    //   <h2>Counter: 0</h2>
    //   <Buttons type={'btn btn-primary'} text={'+1'}/>
    // </div>
    // <div className="container_item">
    //   <div className="hijo">
    //     <div className="hijo_hijo">
    //       asdjhakjs
    //       asdasd
    //       asdasdsdfasdf
    //       asdasdsdfasdfasdf
    //       asdasd
    //       asdasdsdfasdfasdf

    //       asdasd

    //       asdasd
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //       <p>hola</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
