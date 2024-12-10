import { useState } from 'react';
import './Forum.css';

function Forum() {
  const [activeTab, setActiveTab] = useState('create');
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    description: '',
    files: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: Date.now(),
      ...newPost,
      date: new Date().toLocaleDateString(),
      comments: []
    };
    setPosts([post, ...posts]);
    setNewPost({ description: '', files: [] });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewPost(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  return (
    <div className="forum">
      <div className="forum-tabs">
        <button 
          className={`tab-button ${activeTab === 'create' ? 'active' : ''}`}
          onClick={() => setActiveTab('create')}
        >
          Create Post
        </button>
        <button 
          className={`tab-button ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          My Posts
        </button>
      </div>

      {activeTab === 'create' ? (
        <div className="create-post">
          <h2>Share Your Health Concern</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newPost.description}
                onChange={(e) => setNewPost(prev => ({
                  ...prev,
                  description: e.target.value
                }))}
                required
              />
            </div>
            <div className="form-group">
              <label>Upload Health Documents</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
            </div>
            <button type="submit" className="submit-button">Post</button>
          </form>
        </div>
      ) : (
        <div className="view-posts">
          <h2>My Previous Posts</h2>
          {posts.length === 0 ? (
            <p className="no-posts">No posts yet</p>
          ) : (
            <div className="posts-list">
              {posts.map(post => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <span className="post-date">{post.date}</span>
                  </div>
                  <p className="post-description">{post.description}</p>
                  <div className="post-files">
                    {post.files.map((file, index) => (
                      <div key={index} className="file-item">
                        📎 {file.name}
                      </div>
                    ))}
                  </div>
                  <div className="post-comments">
                    <h4>Healthcare Provider Comments</h4>
                    {post.comments.length === 0 ? (
                      <p>No comments yet</p>
                    ) : (
                      post.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          {comment}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Forum;