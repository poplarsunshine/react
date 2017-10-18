webpackJsonp([0x6f21acab7e44],{"./node_modules/json-loader/index.js!./.cache/json/blog-2015-05-01-graphql-introduction-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>At the React.js conference in late January 2015, we revealed our next major technology in the React family: <a href="http://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html">Relay</a>. </p>\n<p>Relay is a new way of structuring client applications that co-locates data-fetching requirements and React components. Instead of placing data fetching logic in some other part of the client application – or embedding this logic in a custom endpoint on the server – we instead co-locate a <em>declarative</em> data-fetching specification alongside the React component. The language of this declarative specification is GraphQL.</p>\n<p>GraphQL was not invented to enable Relay. In fact, GraphQL predates Relay by nearly three years. It was invented during the move from Facebook’s HTML5-driven mobile applications to purely native applications. It is a query language for graph data that powers the lion’s share of interactions in the Facebook Android and iOS applications. Any user of the native iOS or Android app in the last two years has used an app powered by GraphQL.</p>\n<p>We plan to open-source a reference implementation of a GraphQL server and publish a language specification in the coming months. Our goal is to evolve GraphQL to adapt to a wide range of backends, so that projects and companies can use this technology to access their own data. We believe that this is a compelling way to structure servers and to provide powerful abstractions, frameworks and tools – including, but not exclusively, Relay – for product developers.</p>\n<h2 id="what-is-graphql"><a href="#what-is-graphql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is GraphQL?</h2>\n<p>A GraphQL query is a string interpreted by a server that returns data in a specified format. Here is an example query: </p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n  <span class="token function">user</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token number">3500401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    id<span class="token punctuation">,</span>\n    name<span class="token punctuation">,</span>\n    isViewerFriend<span class="token punctuation">,</span>\n    <span class="token function">profilePicture</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n      uri<span class="token punctuation">,</span>\n      width<span class="token punctuation">,</span>\n      height\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>(Note: this syntax is slightly different from previous GraphQL examples. We’ve recently been making improvements to the language.)</p>\n<p>And here is the response to that query.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsxon"><code>{\n  "user" : {\n    "id": 3500401,\n    "name": "Jing Chen",\n    "isViewerFriend": true,\n    "profilePicture": {\n      "uri": "http://someurl.cdn/pic.jpg",\n      "width": 50,\n      "height": 50\n    }\n  }\n}</code></pre>\n      </div>\n<p>We will dig into the syntax and semantics of GraphQL in a later post, but even a simple example shows many of its design principles:</p>\n<ul>\n<li><strong>Hierarchical:</strong> Most product development today involves the creation and manipulation of view hierarchies. To achieve congruence with the structure of these applications, a GraphQL query itself is a hierarchical set of fields. The query is shaped just like the data it returns. It is a natural way for product engineers to describe data requirements.</li>\n<li><strong>Product-centric:</strong> GraphQL is unapologetically driven by the requirements of views and the front-end engineers that write them. We start with their way of thinking and requirements and build the language and runtime necessary to enable that.</li>\n<li><strong>Client-specified queries:</strong> In GraphQL, the specification for queries are encoded in the <em>client</em> rather than the <em>server</em>. These queries are specified at field-level granularity. In the vast majority of applications written without GraphQL, the server determines the data returned in its various scripted endpoints. A GraphQL query, on the other hand, returns exactly what a client asks for and no more.</li>\n<li><strong>Backwards Compatible:</strong> In a world of deployed native mobile applications with no forced upgrades, backwards compatibility is a challenge. Facebook, for example, releases apps on a two week fixed cycle and pledges to maintain those apps for <em>at least</em> two years. This means there are at a <em>minimum</em> 52 versions of our clients per platform querying our servers at any given time. Client-specified queries simplifies managing our backwards compatibility guarantees.</li>\n<li><strong>Structured, Arbitrary Code:</strong> Query languages with field-level granularity have typically queried storage engines directly, such as SQL. GraphQL instead imposes a structure onto a server, and exposes fields that are backed by <em>arbitrary code</em>. This allows for both server-side flexibility and a uniform, powerful API across the entire surface area of an application.</li>\n<li><strong>Application-Layer Protocol:</strong> GraphQL is an application-layer protocol and does not require a particular transport. It is a string that is parsed and interpreted by a server.</li>\n<li><strong>Strongly-typed:</strong> GraphQL is strongly-typed. Given a query, tooling can ensure that the query is both syntactically correct and valid within the GraphQL type system before execution, i.e. at development time, and the server can make certain guarantees about the shape and nature of the response. This makes it easier to build high quality client tools.</li>\n<li><strong>Introspective:</strong> GraphQL is introspective. Clients and tools can query the type system using the GraphQL syntax itself. This is a powerful platform for building tools and client software, such as automatic parsing of incoming data into strongly-typed interfaces. It is especially useful in statically typed languages such as Swift, Objective-C and Java, as it obviates the need for repetitive and error-prone code to shuffle raw, untyped JSON into strongly-typed business objects.</li>\n</ul>\n<h2 id="why-invent-something-new"><a href="#why-invent-something-new" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why invent something new?</h2>\n<p>Obviously GraphQL is not the first system to manage client-server interactions. In today’s world there are two dominant architectural styles for client-server interaction: REST and <em>ad hoc</em> endpoints. </p>\n<h3 id="rest"><a href="#rest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>REST</h3>\n<p>REST, an acronym for Representational State Transfer, is an architectural style rather than a formal protocol. There is actually much debate about what exactly REST is and is not. We wish to avoid such debates. We are interested in the typical attributes of systems that <em>self-identify</em> as REST, rather than systems which are formally REST.</p>\n<p>Objects in a typical REST system are addressable by URI and interacted with using verbs in the HTTP protocol. An HTTP GET to a particular URI fetches an object and returns a server-specified set of fields. An HTTP PUT edits an object; an HTTP DELETE deletes an object; and so on.</p>\n<p>We believe there are a number of weakness in typical REST systems, ones that are particularly problematic in mobile applications:</p>\n<ul>\n<li>Fetching complicated object graphs require multiple round trips between the client and server to render single views. For mobile applications operating in variable network conditions, these multiple roundtrips are highly undesirable.</li>\n<li>Invariably fields and additional data are added to REST endpoints as the system requirements change. However, old clients also receive this additional data as well, because the data fetching specification is encoded on the server rather than the client. As result, these payloads tend to grow over time for all clients. When this becomes a problem for a system, one solution is to overlay a versioning system onto the REST endpoints. Versioning also complicates a server, and results in code duplication, spaghetti code, or a sophisticated, hand-rolled infrastructure to manage it. Another solution to limit over-fetching is to provide multiple views – such as “compact” vs “full” – of the same REST endpoint, however this coarse granularity often does not offer adequate flexibility.</li>\n<li>REST endpoints are usually weakly-typed and lack machine-readable metadata. While there is much debate about the merits of strong- versus weak-typing in distributed systems, we believe in strong typing because of the correctness guarantees and tooling opportunities it provides. Developers deal with systems that lack this metadata by inspecting frequently out-of-date documentation and then writing code against the documentation.</li>\n<li>Many of these attributes are linked to the fact that “REST is intended for long-lived network-based applications that span multiple organizations” <a href="http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven">according to its inventor</a>. This is not a requirement for APIs that serve a client app built within the same organization.</li>\n</ul>\n<p>Nearly all externally facing REST APIs we know of trend or end up in these non-ideal states, as well as nearly all <em>internal</em> REST APIs. The consequences of opaqueness and over-fetching are more severe in internal APIs since their velocity of change and level of usage is almost always higher.</p>\n<p>Because of multiple round-trips and over-fetching, applications built in the REST style inevitably end up building <em>ad hoc</em> endpoints that are superficially in the REST style. These actually couple the data to a particular view which explicitly violates one of REST’s major goals. Most REST systems of any complexity end up as a continuum of endpoints that span from “traditional” REST to <em>ad hoc</em> endpoints.</p>\n<h3 id="ad-hoc-endpoints"><a href="#ad-hoc-endpoints" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ad Hoc Endpoints</h3>\n<p>Many applications have no formalized client-server contract. Product developers access server capabilities through <em>ad hoc</em> endpoints and write custom code to fetch the data they need. Servers define procedures, and they return data. This approach has the virtue of simplicity, but can often become untenable as systems age.</p>\n<ul>\n<li>These systems typically define a custom endpoint per view. For systems with a wide surface area this can quickly grow into a maintenance nightmare of orphaned endpoints, inconsistent tooling, and massive server code duplication. Disciplined engineering organizations can mitigate these issues with great engineering practices, high quality abstractions, and custom tooling. However, given our experience we believe that custom endpoints tend to lead to entropic server codebases.</li>\n<li>Much like REST, the payloads of custom endpoints grow monotonically (even with mitigation from versioning systems) as the server evolves. Deployed clients cannot break, and, with rapid release cycles and backwards compatibility guarantees, distributed applications will have large numbers of extant versions. Under these constraints it is difficult to remove data from a custom endpoint.</li>\n<li>Custom endpoints tend to – for a client developer – create a clunky, multi-language, multi-environment development process. No matter if the data has been accessed before in a different view, they are required to first change the custom endpoint, then deploy that code to a server accessible from a mobile device, and only then change the client to utilize that data. In GraphQL  – unless the data in the view is completely new to the entire system  – a product developer adds a field to a GraphQL query and the work on the client continues unabated.</li>\n<li>Much like REST, most systems with custom endpoints do not have a formalized type system, which eliminates the possibility for the tools and guarantees that introspective type systems can provide. Some custom-endpoint-driven systems do use a strongly typed serialization scheme, such as Protocol Buffers, Thrift, or XML. Those do allow for direct parsing of responses into typed classes and eliminating boilerplate shuffling from JSON into handwritten classes. These systems are as not as expressive and flexible as GraphQL, and the other downsides of <em>ad hoc</em> endpoints remain.</li>\n</ul>\n<p>We believe that GraphQL represents a novel way of structuring the client-server contract. Servers publish a type system specific to their application, and GraphQL provides a unified language to query data within the constraints of that type system. That language allows product developers to express data requirements in a form natural to them: a declarative and hierarchal one.</p>\n<p>This is a liberating platform for product developers. With GraphQL, no more contending with <em>ad hoc</em> endpoints or object retrieval with multiple roundtrips to access server data; instead an elegant, hierarchical, declarative query dispatched to a single endpoint. No more  frequent jumps between client and server development environments to do experimentation or to change or create views of existing data; instead experiments are done and new views built within a native, client development environment exclusively. No more shuffling unstructured data from <em>ad hoc</em> endpoints into business objects; instead a powerful, introspective type system that serves as a platform for tool building.</p>\n<p>Product developers are free to focus on their client software and requirements while rarely leaving their development environment; they can more confidently support shipped clients as a system evolves; and they are using a protocol designed to operate well within the constraints of mobile applications. Product developers can query for exactly what they want, in the way they think about it, across their entire application’s data model. </p>\n<h2 id="whats-next"><a href="#whats-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s next?</h2>\n<p>Over the coming months, we will share more technical details about GraphQL, including additional language features, tools that support it, and how it is built and used at Facebook. These posts will culminate in a formal specification of GraphQL to guide implementors across various languages and platforms. We also plan on releasing a reference implementation in the summer, in order to provide a basis for custom deployments and a platform for experimentation. We’re incredibly excited to share this system and work with the open source community to improve it.</p>',excerpt:"At the React.js conference in late January 2015, we revealed our next major technology in the React family:  Relay .  Relay is a new way of structuring client applications that co-locates data-fetching requirements and React components. Instead of placing data fetching logic in some other part of the client application – or embedding this logic in a custom endpoint on the server – we instead co-locate a  declarative  data-fetching specification alongside the React component. The language of this…",frontmatter:{title:"GraphQL Introduction",next:null,prev:null,author:[{frontmatter:{name:"Nick Schrock",url:"https://twitter.com/schrockn"}}]},fields:{date:"April 30, 2015",path:"blog/2015-05-01-graphql-introduction.md",slug:"/blog/2015/05/01/graphql-introduction.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2015/05/01/graphql-introduction.html"}}}});
//# sourceMappingURL=path---blog-2015-05-01-graphql-introduction-html-e55145b1033a601edfcd.js.map