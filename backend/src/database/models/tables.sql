CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250),
  content TEXT,
  user_id INT REFERENCES users(id),
  author VARCHAR(255) REFERENCES users(username),
  data_created TIMESTAMP,
  likes INT DEFAULT 0
);

INSERT INTO users (username, email) VALUES ('ruslanonly', 'rzaevruslanonly@gmail.gmail');
INSERT INTO posts(title, content, user_id, author, data_created) VALUES('blog title', 'blog content', 1, 'ruslanonly', NOW())