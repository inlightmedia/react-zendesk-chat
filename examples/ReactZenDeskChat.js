import React from 'react';

import ReactZenDeskChat from '../src/index';

class ReactZenDeskChat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <ReactZenDeskChat name="YOUR_ZENDESK_CHAT_ID_HERE"/>
      </div>
    );
  }
}

export default ReactZenDeskChat;
