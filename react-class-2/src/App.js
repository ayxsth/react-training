import "./App.css";
import Counter from "./Counter";

function App() {
    const colors = [
        "red",
        "green",
        "blue",
        "orange",
        "purple",
        "pink",
        "brown",
        "cyan",
        "magenta",
        "lime",
        "indigo",
        "turquoise",
        "navy",
        "teal",
        "olive",
        "maroon",
        "silver",
        "gray"
    ];

    return (
        <div className="App">
            <Counter colors={colors} />
        </div>
    );
}

export default App;
