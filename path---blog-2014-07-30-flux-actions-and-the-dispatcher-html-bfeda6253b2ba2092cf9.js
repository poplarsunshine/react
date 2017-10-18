webpackJsonp([5002065428207],{"./node_modules/json-loader/index.js!./.cache/json/blog-2014-07-30-flux-actions-and-the-dispatcher-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>Flux is the application architecture Facebook uses to build JavaScript applications. It’s based on a unidirectional data flow.  We’ve built everything from small widgets to huge applications with Flux, and it’s handled everything we’ve thrown at it. Because we’ve found it to be a great way to structure our code, we’re excited to share it with the open source community. <a href="http://youtu.be/nYkdrAPrdcw?t=10m20s">Jing Chen presented Flux</a> at the F8 conference, and since that time we’ve seen a lot of interest in it. We’ve also published an <a href="https://facebook.github.io/flux/docs/overview.html">overview of Flux</a> and a <a href="https://github.com/facebook/flux/tree/master/examples/flux-todomvc/">TodoMVC example</a>, with an accompanying <a href="https://facebook.github.io/flux/docs/todo-list.html">tutorial</a>.</p>\n<p>Flux is more of a pattern than a full-blown framework, and you can start using it without a lot of new code beyond React. Up until recently, however, we haven’t released one crucial piece of our Flux software: the dispatcher. But along with the creation of the new <a href="https://github.com/facebook/flux">Flux code repository</a> and <a href="https://facebook.github.io/flux/">Flux website</a>, we’ve now open sourced the same <a href="https://facebook.github.io/flux/docs/dispatcher.html">dispatcher</a> we use in our production applications.</p>\n<h2 id="where-the-dispatcher-fits-in-the-flux-data-flow"><a href="#where-the-dispatcher-fits-in-the-flux-data-flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where the Dispatcher Fits in the Flux Data Flow</h2>\n<p>The dispatcher is a singleton, and operates as the central hub of data flow in a Flux application. It is essentially a registry of callbacks, and can invoke these callbacks in order. Each <em>store</em> registers a callback with the dispatcher. When new data comes into the dispatcher, it then uses these callbacks to propagate that data to all of the stores. The process of invoking the callbacks is initiated through the dispatch() method, which takes a data payload object as its sole argument.</p>\n<h2 id="actions-and-actioncreators"><a href="#actions-and-actioncreators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Actions and ActionCreators</h2>\n<p>When new data enters the system, whether through a person interacting with the application or through a web api call, that data is packaged into an <em>action</em> — an object literal containing the new fields of data and a specific action type. We often create a library of helper methods called ActionCreators that not only create the action object, but also pass the action to the dispatcher.</p>\n<p>Different actions are identified by a type attribute. When all of the stores receive the action, they typically use this attribute to determine if and how they should respond to it. In a Flux application, both stores and views control themselves; they are not acted upon by external objects. Actions flow into the stores through the callbacks they define and register, not through setter methods.</p>\n<p>Letting the stores update themselves eliminates many entanglements typically found in MVC applications, where cascading updates between models can lead to unstable state and make accurate testing very difficult. The objects within a Flux application are highly decoupled, and adhere very strongly to the <a href="https://en.wikipedia.org/wiki/Law_of_Demeter">Law of Demeter</a>, the principle that each object within a system should know as little as possible about the other objects in the system. This results in software that is more maintainable, adaptable, testable, and easier for new engineering team members to understand.</p>\n<html><head></head><body>\n  <a class="gatsby-resp-image-link" href="/static/b4643456a3de61c8352415a6fc171876-a0938.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 49.77293369663942%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABk0lEQVQoz2P4SQQ4euTIpo0bgWjb1q3fv3+HizPg0vD95cv3c2a/nzfnzYcPlRUVKUlJQBQaHPz63btL+2ad2tR64+RanJp/fP366sKF99eu/fjx49zZs/v27gWigwcOAG1+du/CzQt7Xj6+yXDv/oNVazesXrvh3r37j+8+Xz9nz/q5e25fefDt6ZO3y5d9WLni89UraObePLn65La+h9cOMezcvS+vqKKwtHrTtp0Htp6uj5valDRj7YI9r04cf9dY976t5d3GDWiad86I3tjlfHRtA8OVq9emz5w7Zfrs85cuX790b37nusV9Gy+fuvn54cNnixe9Xrb0/aWLaJrP7Ji0d3HhtRPrGfAE8scvX6D+//Hjw6fPQPTtGyioX7x9efPx3Tcf3uLUfOvhi84l+3qXHzh0/vbBc7dNUiYBUc/SfUCp8O54x1qv4rlVODUfv3Q3tmlpXNOyJdtP7Dp13SJ9ikPujJYFO4HOCWyPsq5wyZ9VxkBMInn0/M3ElQeA6OTlu0DurrN7l+xbeezqCQDKtfGSMGccfQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="flux diagram" title="" src="/static/b4643456a3de61c8352415a6fc171876-acf85.png" srcset="/static/b4643456a3de61c8352415a6fc171876-c1418.png 210w,\n/static/b4643456a3de61c8352415a6fc171876-5d5d8.png 420w,\n/static/b4643456a3de61c8352415a6fc171876-acf85.png 840w,\n/static/b4643456a3de61c8352415a6fc171876-de0cd.png 1260w,\n/static/b4643456a3de61c8352415a6fc171876-bd6c2.png 1680w,\n/static/b4643456a3de61c8352415a6fc171876-a0938.png 2202w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    </body></html>\n<h2 id="why-we-need-a-dispatcher"><a href="#why-we-need-a-dispatcher" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why We Need a Dispatcher</h2>\n<p>As an application grows, dependencies across different stores are a near certainty. Store A will inevitably need Store B to update itself first, so that Store A can know how to update itself. We need the dispatcher to be able to invoke the callback for Store B, and finish that callback, before moving forward with Store A. To declaratively assert this dependency, a store needs to be able to say to the dispatcher, “I need to wait for Store B to finish processing this action.” The dispatcher provides this functionality through its waitFor() method.</p>\n<p>The dispatch() method provides a simple, synchronous iteration through the callbacks, invoking each in turn. When waitFor() is encountered within one of the callbacks, execution of that callback stops and waitFor() provides us with a new iteration cycle over the dependencies. After the entire set of dependencies have been fulfilled, the original callback then continues to execute.</p>\n<p>Further, the waitFor() method may be used in different ways for different actions, within the same store’s callback.  In one case, Store A might need to wait for Store B.  But in another case, it might need to wait for Store C.  Using waitFor() within the code block that is specific to an action allows us to have fine-grained control of these dependencies.</p>\n<p>Problems arise, however, if we have circular dependencies. That is, if Store A needs to wait for Store B, and Store B needs to wait for Store A, we could wind up in an endless loop. The dispatcher now available in the Flux repo protects against this by throwing an informative error to alert the developer that this problem has occurred. The developer can then create a third store and resolve the circular dependency.</p>\n<h2 id="example-chat-app"><a href="#example-chat-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example Chat App</h2>\n<p>Along with the same dispatcher that Facebook uses in its production applications, we’ve also published a new example <a href="https://github.com/facebook/flux/tree/master/examples/flux-chat">chat app</a>, slightly more complicated than the simplistic TodoMVC, so that engineers can better understand how Flux solves problems like dependencies between stores and calls to a web API.</p>\n<p>We’re hopeful that the new Flux repository will grow with time to include additional tools, boilerplate code and further examples. And we hope that Flux will prove as useful to you as it has to us. Enjoy!</p>',excerpt:"Flux is the application architecture Facebook uses to build JavaScript applications. It’s based on a unidirectional data flow.  We’ve built everything from small widgets to huge applications with Flux, and it’s handled everything we’ve thrown at it. Because we’ve found it to be a great way to structure our code, we’re excited to share it with the open source community.  Jing Chen presented Flux  at the F8 conference, and since that time we’ve seen a lot of interest in it. We’ve also published an…",frontmatter:{title:"Flux: Actions and the Dispatcher",next:null,prev:null,author:[{frontmatter:{name:"Bill Fisher",url:"https://twitter.com/fisherwebdev"}}]},fields:{date:"July 29, 2014",path:"blog/2014-07-30-flux-actions-and-the-dispatcher.md",slug:"/blog/2014/07/30/flux-actions-and-the-dispatcher.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2014/07/30/flux-actions-and-the-dispatcher.html"}}}});
//# sourceMappingURL=path---blog-2014-07-30-flux-actions-and-the-dispatcher-html-bfeda6253b2ba2092cf9.js.map