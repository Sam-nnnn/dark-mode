import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";

function App() {
  const [dark, setDark] = useState(false);
  const handleDarkMode = () => {
    setDark(!dark);
    document.querySelector("#root").classList.toggle("dark-mode");
  };

  return (
    <div className="app">
      {/*DOM or =>>> className={!dark ? "app" : "app dark-mode"} */}
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button
          onClick={handleDarkMode}
          className="app__dark-mode-btn icon level-right"
        >
          <FontAwesomeIcon
            color={!dark ? null : "#FFA500"}
            icon={!dark ? faMoon : faSun}
          />
        </button>
      </div>
      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>
      <section className="section">
        <div className="buttons level-right">
          <button className="button is-primary">Save</button>
          <button className="button is-link">Submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
