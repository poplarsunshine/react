webpackJsonp([0xe86cd00aafe4],{"./node_modules/json-loader/index.js!./.cache/json/blog-2016-04-08-react-v-15-0-1-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>Yesterday afternoon we shipped v15.0.0 and quickly got some feedback about a couple of issues. We apologize for these problems and we’ve been working since then to make sure we get fixes into your hands as quickly as possible.</p>\n<p>The first of these issues is related to the removal of an undocumented API. This API was added to enable <a href="/docs/jsx-spread.html">JSX Spread Attributes</a> in our JS compile tools (react-tools, JSXTransformer) before <code>Object.assign</code> was standard. When we stopped supporting these tools last year, we kept the API there to catch the longer tail of people using those tools. Meanwhile we moved to using Babel and encouraged others to do the same. Babel will typically compile the spread use to an <code>_extends</code> helper, which will use <code>Object.assign</code>. We did not properly research other compilation tools before deciding to remove the API in v15. Specifically, TypeScript and coffee-react are two popular packages using <code>React.__spread</code>, as well as reactify which still makes use react-tools. In order to make sure that code compiled with these tools is not broken, we will be restoring the <code>React.__spread</code> API and adding a warning. It will be removed in the future so if you maintain a project making using of it, we encourage you to compile to <code>Object.assign</code> directly or a similar helper function.</p>\n<p>The second issue resulted in cursor position being lost in controlled inputs. We merged a pull request earlier this week to fix a separate regression from v0.14. Our goal was to target <code>&#x3C;option></code> elements but we ended up targeting all interactions with <code>value</code> properties. Unfortunately we didn’t test it as thoroughly as we thought. We backed out the offending change and fixed the issue in different way which doesn’t have the same problem.</p>\n<p>We apologize if you installed 15.0.0 and have encountered these issues yourselves.</p>\n<p>As usual, you can get install the <code>react</code> package via npm or download a browser bundle.</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-15.0.1.js">https://fb.me/react-15.0.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-15.0.1.min.js">https://fb.me/react-15.0.1.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-15.0.1.js">https://fb.me/react-with-addons-15.0.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-15.0.1.min.js">https://fb.me/react-with-addons-15.0.1.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-15.0.1.js">https://fb.me/react-dom-15.0.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-15.0.1.min.js">https://fb.me/react-dom-15.0.1.min.js</a>  </li>\n</ul>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>Restore <code>React.__spread</code> API to unbreak code compiled with some tools making use of this undocumented API. It is now officially deprecated.<br>\n<small><a href="https://github.com/zpao">@zpao</a> in <a href="https://github.com/facebook/react/pull/6444">#6444</a></small></li>\n</ul>\n<h3 id="reactdom"><a href="#reactdom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactDOM</h3>\n<ul>\n<li>Fixed issue resulting in loss of cursor position in controlled inputs.<br>\n<small><a href="https://github.com/sophiebits">@sophiebits</a> in <a href="https://github.com/facebook/react/pull/6449">#6449</a></small></li>\n</ul>',excerpt:"Yesterday afternoon we shipped v15.0.0 and quickly got some feedback about a couple of issues. We apologize for these problems and we’ve been working since then to make sure we get fixes into your hands as quickly as possible. The first of these issues is related to the removal of an undocumented API. This API was added to enable  JSX Spread Attributes  in our JS compile tools (react-tools, JSXTransformer) before   was standard. When we stopped supporting these tools last year, we kept the API…",frontmatter:{title:"React v15.0.1",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"April 07, 2016",path:"blog/2016-04-08-react-v15.0.1.md",slug:"/blog/2016/04/08/react-v15.0.1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2016/04/08/react-v15.0.1.html"}}}});
//# sourceMappingURL=path---blog-2016-04-08-react-v-15-0-1-html-e9d4cdbd251f6fe66f50.js.map