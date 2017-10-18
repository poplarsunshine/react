webpackJsonp([0x7eec55346eef],{"./node_modules/json-loader/index.js!./.cache/json/blog-2015-08-03-new-react-devtools-beta-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>We’ve made an entirely new version of the devtools, and we want you to try it\nout!</p>\n<p><img src="/f57ae67cfaa1fe76880654e2eddbf71f.gif" alt="The full devtools gif"></p>\n<h2 id="why-entirely-new"><a href="#why-entirely-new" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why entirely new?</h2>\n<p>Perhaps the biggest reason was to create a defined API for dealing with\ninternals, so that other tools could benefit as well and not have to depend on\nimplementation details. This gives us more freedom to refactor things\ninternally without worrying about breaking tooling.</p>\n<p>The current version of the devtools is a fork of Blink’s “Elements” pane, and\nis imperative, mutation-driven, and tightly integrated with Chrome-specific\nAPIs. The new devtools are much less coupled to Chrome, and easier to reason\nabout thanks to React.</p>\n<h2 id="what-are-the-benefits"><a href="#what-are-the-benefits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What are the benefits?</h2>\n<ul>\n<li>100% React</li>\n<li>Firefox compatible</li>\n<li>React Native compatible</li>\n<li>more extensible &#x26; hackable</li>\n</ul>\n<h2 id="are-there-any-new-features"><a href="#are-there-any-new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Are there any new features?</h2>\n<p>Yeah!</p>\n<h3 id="the-tree-view"><a href="#the-tree-view" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Tree View</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-aa34b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 22.575757575757574%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0klEQVQY033My3KDIABAUf//r9pNpzoZY0Uk1vpChECAAd+itp0uu8jdn+sJ3Fmr7bAP9hg2N1rDletNP2q2mvn7aZ5spe54L7BRsmHrNO9uP51z51/HcTzDs+7Jte6ilKR+XOO80EX2aNKMEMa5sopvk10nO05m2Zb/mFKKwhS++ujtJXi/BH4UgjKMiuSGE4RBksdx3qIrhkGVQ4Qpqz4ZwlUGiizxfgeaqHvMVElkDR0BUthbtQg5uw66OtRKALPtCp/tqBrIvj5KVcrqcQf0B5UJFYfe3K8bAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="The new tree view of the devtools"\n        title=""\n        src="/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-eb8d7.png"\n        srcset="/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-17834.png 210w,\n/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-6d36a.png 420w,\n/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-eb8d7.png 840w,\n/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-e1ec7.png 1260w,\n/static/e6fb2a1f2ea4b574edf85c8fc8c6f571-aa34b.png 1320w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>\n<p>Much richer view of your props, including the contents of objects and arrays</p>\n</li>\n<li>\n<p>Custom components are emphasized, native components are de-emphasized</p>\n</li>\n<li>\n<p>Stateful components have a red collapser</p>\n</li>\n<li>\n<p>Improved keyboard navigation (hjkl or arrow keys)</p>\n</li>\n<li>\n<p>Selected component is available in the console as <code>$r</code></p>\n</li>\n<li>\n<p>Props that change highlight in green</p>\n</li>\n<li>\n<p>Right-click menu</p>\n<ul>\n<li>Scroll node into view</li>\n<li>Show the source for a component in the “Sources” pane</li>\n<li>Show the element in the “Elements” pane</li>\n</ul>\n</li>\n</ul>\n<h3 id="searching"><a href="#searching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Searching</h3>\n<p>Select the search bar (or press ”/”), and start searching for a component by\nname.</p>\n<p><img src="/9e5f4fcd1569e0ff017320590aafbc85.gif"></p>\n<h3 id="the-side-pane"><a href="#the-side-pane" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Side Pane</h3>\n<ul>\n<li>Now shows the <code>context</code> for a component</li>\n<li>Right-click to store a prop/state value as a global variable</li>\n</ul>\n<p><img src="/f3552d987634913612d6f06248fd303d.gif"></p>\n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<p>First, disable the Chrome web store version, or it will break things. Then\n<a href="https://github.com/facebook/react-devtools/releases">download the .crx</a> and\ndrag it into your <code>chrome://extensions</code> page. If it’s not working to drag it\nfrom the downloads bar, try opening your downloads folder and drag it from\nthere.</p>\n<p>Once we’ve determined that there aren’t any major regressions, we’ll update\nthe official web store version, and everyone will be automatically upgraded.</p>\n<h3 id="also-firefox"><a href="#also-firefox" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Also Firefox!</h3>\n<p>We also have an initial version of the devtools for Firefox, which you can\ndownload from the same <a href="https://github.com/facebook/react-devtools/releases">release page</a>.</p>\n<h2 id="feedback-welcome"><a href="#feedback-welcome" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Feedback welcome</h2>\n<p>Let us know what issues you run into\n<a href="https://github.com/facebook/react-devtools/issues">on GitHub</a>, and check out\n<a href="https://github.com/facebook/react-devtools/tree/devtools-next">the README</a>\nfor more info.</p>\n<h2 id="update"><a href="#update" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Update</h2>\n<p><em>August 12, 2015</em></p>\n<p>A second beta is out, with a number of bugfixes. It is also listed on the\n<a href="https://github.com/facebook/react-devtools/releases">releases page</a>.</p>',excerpt:"We’ve made an entirely new version of the devtools, and we want you to try it\nout! Why entirely new? Perhaps the biggest reason was to create a defined API for dealing with\ninternals, so that other tools could benefit as well and not have to depend on\nimplementation details. This gives us more freedom to refactor things\ninternally without worrying about breaking tooling. The current version of the devtools is a fork of Blink’s “Elements” pane, and\nis imperative, mutation-driven, and tightly…",frontmatter:{title:"New React Devtools Beta",next:null,prev:null,author:[{frontmatter:{name:"Jared Forsyth",url:"https://twitter.com/jaredforsyth"}}]},fields:{date:"August 02, 2015",path:"blog/2015-08-03-new-react-devtools-beta.md",slug:"/blog/2015/08/03/new-react-devtools-beta.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2015/08/03/new-react-devtools-beta.html"}}}});
//# sourceMappingURL=path---blog-2015-08-03-new-react-devtools-beta-html-7f0a4f0f7316bc152d03.js.map