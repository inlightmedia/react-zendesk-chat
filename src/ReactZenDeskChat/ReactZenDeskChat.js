import React, { Component } from 'react';
import PropTypes from 'prop-types';
const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

export default class ZenDeskChat extends Component {
  static propTypes = {
    appID: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    const {
      appID
    } = props;

    if (!appID){
        console.error('Error: Have you forgotten to pass in hte appID prop?');
        throw new Error('Error: Cannot initialize the ZenDesk Chat Component. Have you forgotten to pass in the appID prop?');
        return;
    } else if(!canUseDOM) {
        console.error('Error: Could not initialize Zendesk react. The DOM is not ready.')
        return;
    }

    if (!window.$zopim) {
        (function (document, script, id) {
            var zopim = window.$zopim = function (c) {
                    zopim._.push(c)
                }
            var $ = zopim.s = document.createElement(script);
            var element = document.getElementsByTagName(script)[0];
            
            zopim.set = function (o) {
                zopim.set._.push(o)
            };
            
            zopim._ = [];
            zopim.set._ = [];
            $.async = !0;
            $.setAttribute("charset", "utf-8");
            $.src = "https://v2.zopim.com/?" + id;
            zopim.t = + new Date;
            $.type = "text/javascript";
            element.parentNode.insertBefore($, element)
        })(document, "script", appID);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    if (!canUseDOM || !window.$zopim) return false;

    delete window.$zopim;
  }

  render() {
    return false;
  }
}