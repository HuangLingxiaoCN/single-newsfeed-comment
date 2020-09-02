import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Note: Always start component names with a capital letter.
class Avatar extends React.Component {
  render() {
    return (
      <img
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    );
  }
}

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <Avatar user={this.props.user} />
        <div>
          {this.props.user.name}
        </div>
      </div>
    );
  }
}

const formatDate = (date) => {
  return date.toLocaleDateString();
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <div>
          <UserInfo user={this.props.author} />
        </div>
        <div>
          {this.props.text}  
        </div>
        <div>
          {formatDate(this.props.date)}
        </div>
      </div>
    );
  }
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Jason',
    avatarUrl: 'https://robohash.org/123.png',
  },
};

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
