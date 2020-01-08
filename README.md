# React Zen Desk Component

A handy ReactJS component to be used for loading ZenDesk Chat into your website or web app.

## Usage

To use this module, just import the library like this:

`import ReactZenDeskChat from '@inlightmedia/react-zendesk-chat';`

then you can use the module in your app like so:

`<ReactZenDeskChat appID="MY_ZEN_DESK_APP_ID" />`

Be sure to use your app id.

To get it, go to your ZenDesk Chat dashboard (https://dashboard.zopim.com) after creating your account. Then, go to Settings > Widget > GettingStarted > 1. Embed the Zendesk Chat Widget

You should see something that looks like this:

```
<!--Start of Zendesk Chat Script-->
<script type="text/javascript">
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?<MY_ZEN_DESK_APP_ID>";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
</script>
<!--End of Zendesk Chat Script-->
```

Your appID will be located after the '?' where it reads: <MY_ZEN_DESK_APP_ID>

All the best and happy Zendesking!

PS - This is not an official library and is not affiliated with Zendesk. I just made it and thought I'd open source it as I couldn't find another library to meet my needs.

NB: Feel free to contribute if you feel there could be some improvements but I don't accept any liability for use or misuse of this component in your projects.

* Bundled with [Webpack](https://webpack.js.org/)
* Develop with Hot Module Replacement [(HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
* Includes linting with [ESLint](http://eslint.org/)
* Testing with [Jest](http://facebook.github.io/jest/).

# Contributing

## Getting Started with the package:

1. Install - `yarn`

2. Start example and start coding - `yarn start`

3. Run tests - `yarn test`

4. Bundle with - `yarn build`

5. To test if it works correctly in another project you can use npm `npm install -S ../react-npm-component-boilerplate` Note the relative path

## NPM equivalent

yarn | npm
---- | ---
`yarn` | `npm install`
`yarn test` | `npm run test`
`yarn build` | `npm run build`

## License
MIT © Josh Dyck

Special thanks to Dinesh Pandiyan whose npm boilerplate I used to generate the package.