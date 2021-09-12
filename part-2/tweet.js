const Tweet = ({ userName, dateOfTweet, message }) => {
    return (
        <ul>
            <li>Tweet: {message}</li>
            <li>By: {userName}</li>
            <li>Date: {dateOfTweet}</li>
        </ul>
    );
}