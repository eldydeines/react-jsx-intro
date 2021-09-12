const App = () => {
    return (
        <div>
            <Tweet userName="janedoe" dateOfTweet="5/10/21" message="The sky is blue. Is that true?" />
            <Tweet userName="jackrabbit" dateOfTweet="7/29/21" message="Did we just grow up? It feels like time flies by." />
            <Tweet userName="ladybut" dateOfTweet="08/11/21" message="Hat in the Cat. Oh no, cat in the hat" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
