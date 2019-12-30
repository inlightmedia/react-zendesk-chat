import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { resolve } from 'url';
const canUseDOM = !!(
	(typeof window !== 'undefined' &&
	window.document && window.document.createElement)
);

export default class ZenDeskChat extends Component {
	static propTypes = {
		appID: PropTypes.string.isRequired,
		language: PropTypes.string,
		title: PropTypes.string,
		preChatGreeting: PropTypes.string,
		badgeText: PropTypes.string,
		onError: PropTypes.func,
		hideOnLaunch: PropTypes.bool
	};

	constructor(props) {
		super(props);

		const {
			appID,
			onError,
			language,
			title,
			preChatGreeting,
			badgeText,
			hideOnLaunch
		} = props;

		if (!appID){
			console.error('Error: Have you forgotten to pass in hte appID prop?');
			throw new Error('Error: Cannot initialize the ZenDesk Chat Component. Have you forgotten to pass in the appID prop?');
			return;
		} else if(!canUseDOM) {
			console.error('Error: Could not initialize Zendesk react. The DOM is not ready.');
			return;
		};
	};

	componentDidMount() {
		const {
			appID,
			onError,
			language,
			title,
			preChatGreeting,
			badgeText,
			hideOnLaunch
		} = this.props;

		if (!window.$zopim && !document.getElementsByClassName('zopim')[0]) {
			const loadZenDesk = (function (document, script, id) {
				return new Promise((resolve, reject) => {
					var zopim = window.$zopim = function (c) {
						zopim._.push(c)
					};
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
					element.parentNode.insertBefore($, element);

					$.onload = () => {
						resolve();
					};

					$.onerror = (error) => {
						onError && onError(error);
						reject(new Error('Zopim API load error.'));
					};
				});
			})(document, "script", appID);

			loadZenDesk.then(() => {
				language && this.setChatLanguage(language);
				title && this.setTitleText(title);
				preChatGreeting && this.setPreChatGreeting(preChatGreeting);
				badgeText && this.setBadgeText(badgeText);
				hideOnLaunch && this.setHideOnLaunch(hideOnLaunch);
			})
			.catch(error => {
				console.log(error);
				onError && onError(error);
			});
		};
	};

	setChatLanguage = language => {
		$zopim(function() {
			$zopim.livechat.setLanguage(language);
		});
	};

	setTitleText = title => {
		$zopim(function() {
			$zopim.livechat.window.setTitle(title);
		});
	};

	setPreChatGreeting = preChatGreeting => {
		$zopim(function() {
			$zopim.livechat.prechatForm.setGreetings(preChatGreeting);
		});
	};

	setBadgeText = badgeText => {
		$zopim(function() {
			$zopim.livechat.badge.setText(badgeText);
		});
	};

	setHideOnLaunch = hideOnLaunch => {
		if(hideOnLaunch){
			$zopim(function() {
				window.$zopim.livechat.window.hide()
			})
		}
  };

	shouldComponentUpdate() {
		return false;
	};

	componentWillUnmount() {
		if (!canUseDOM || !window.$zopim) return false;
		delete window.$zopim;
	};

	render() {
		return false;
	};
};