import "./App.css";
import Title from "./Title";
import Company from "./Company";
import From from "./From";
import To from "./To";

function App() {
    return (
        <div className="App">
            <Title />
            <div className="content">
                <Company />
                <From />
                <To />
            </div>
        </div>
    );
}

export default App;
