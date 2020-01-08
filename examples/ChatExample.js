import React from 'react';

import ReactZenDeskChat from '../src/index';

class ChatExample extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ReactZenDeskChat appID="INSERT_YOUR_APP_ID_HERE"/>
      </div>
    );
  }
}

export default ChatExample;
