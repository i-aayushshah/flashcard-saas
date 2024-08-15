// /components/collaboration/CommentSystem.js
import React, { useState } from 'react';
import { postComment, fetchComments } from '../../utils/collaboration';

const CommentSystem = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const getComments = async () => {
      const result = await fetchComments(itemId);
      setComments(result);
    };
    getComments();
  }, [itemId]);

  const handleCommentSubmit = async () => {
    await postComment(itemId, newComment);
    setNewComment('');
    const result = await fetchComments(itemId);
    setComments(result);
  };

  return (
    <div className="comment-system">
      <h1>Comments</h1>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <p><strong>{comment.author}</strong>: {comment.text}</p>
          </div>
        ))}
      </div>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleCommentSubmit}>Submit</button>
    </div>
  );
};

export default CommentSystem;
