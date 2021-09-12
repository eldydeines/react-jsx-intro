const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Jane Doe" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
