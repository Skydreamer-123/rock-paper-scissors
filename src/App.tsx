import React from "react";
import "./App.css";


export const App = (): JSX.Element => {
  const [showResult, setResult] = React.useState(false);
  const emojiClick = (): void => {
    showResult === true ? (setResult(false)):(setResult(true)); 
  };

  const result = 
    showResult === true ? (<div> yes </div>):(<div> </div>); 
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="emoji">
          <button className="emoji" type="button" onClick={emojiClick}>&#9994;</button>
          <button className="emoji" type="button" onClick={emojiClick}>&#9995;</button>
          <button className="emoji" type="button" onClick={emojiClick}>&#9996;</button>
          {result}
        </div>
      </header>
    </div>
  );
};

export default App;
