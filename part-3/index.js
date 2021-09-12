const App = () => {
    return (
        <div>
            <Person name="Jane Doe" age={18} hobbies={["biking", "reading", "going to the park"]} />
            <Person name="John Doe" age={35} hobbies={["food", "reading", "jogging"]} />
            <Person name="Alexander Bell" age={17} hobbies={["writing", "reading", "knitting"]} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));