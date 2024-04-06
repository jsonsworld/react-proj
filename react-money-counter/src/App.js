import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basics">
          <input type="text" placeholder={"Item Name"} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={"Description"} />
        </div>
        <button type="submit"> Add New Transaction </button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Apartment Rent</div>
            <div className="description">time to pay rent</div>
          </div>
          <div className="right">
            <div className="price red">-$1900</div>
            <div className="datetime">2024-05-01</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Salary Income</div>
            <div className="description">pay day</div>
          </div>
          <div className="right">
            <div className="price green">+$2700</div>
            <div className="datetime">2024-05-01</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Grocries</div>
            <div className="description">groceries for the month</div>
          </div>
          <div className="right">
            <div className="price red">-$250</div>
            <div className="datetime">2024-05-01</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
