const Comment = ({ details }) => {
  return (
    <article>
      <h3>{details.name}</h3>
      <p>{details.body}</p>
    </article>
  );
};

export default Comment;
