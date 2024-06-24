import { useState, useEffect } from "react";
import Comment from "./Comment";
import "./App.css";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        return res.json();
      })
      .then((comments) => {
        //console.log(comments);
        setComments(comments);
      });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} details={comment} />
      ))}
    </div>
  );
};

export default App;
