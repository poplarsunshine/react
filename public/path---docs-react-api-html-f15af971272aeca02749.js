webpackJsonp([93598318429237],{"./node_modules/json-loader/index.js!./.cache/json/docs-react-api-html.json":function(e,n){e.exports={data:{markdownRemark:{html:'<p><code>react</code> 是React库的入口点。如果你通过 <code>&#x3C;script></code> 标签加载React，这些高阶API可用于 <code>React</code> 全局。如果你使用ES6，你可以使用 <code>import React from \'react\'</code> 。如果你使用ES5，你可以使用 <code>var React = require(\'react\')</code> 。</p>\n<h2 id="概览"><a href="#%E6%A6%82%E8%A7%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概览</h2>\n<h3 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components</h3>\n<p>React 组件可以让你把UI分割为独立、可复用的片段，并将每一片段视为相互独立的部分。React组件可以通过继承 <code>React.Component</code> 或 <code>React.PureComponent</code> 来定义。</p>\n<ul>\n<li><a href="#react.component"><code>React.Component</code></a></li>\n<li><a href="#react.purecomponent"><code>React.PureComponent</code></a></li>\n</ul>\n<p>如果不用ES6类，你可以使用 <code>create-react-class</code> 模块。参阅 <a href="/react/docs/react-without-es6.html">Using React without JSX</a> 了解更多信息。</p>\n<h3 id="creating-react-elements"><a href="#creating-react-elements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating React Elements</h3>\n<p>推荐 <a href="/react/docs/introducing-jsx.html">使用JSX</a> 描述你的UI外观。每个JSX元素仅是调用 <a href="#createelement"><code>React.createElement</code></a> 的语法糖。如果使用了JSX，你通常不会直接调用以下方法。</p>\n<ul>\n<li><a href="#createelement"><code>createElement()</code></a></li>\n<li><a href="#createfactory"><code>createFactory()</code></a></li>\n</ul>\n<p>参阅 <a href="/react/docs/react-without-jsx.html">Using React without JSX</a> 了解更多。</p>\n<h3 id="transforming-elements"><a href="#transforming-elements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Transforming Elements</h3>\n<p><code>\bReact</code> 同时也提供了其他API：</p>\n<ul>\n<li><a href="#cloneelement"><code>cloneElement()</code></a></li>\n<li><a href="#isvalidelement"><code>isValidElement()</code></a></li>\n<li><a href="#react.children"><code>React.Children</code></a></li>\n</ul>\n<hr>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="reactcomponent"><a href="#reactcomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Component</code></h3>\n<p>用 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 类</a> 定义时，<code>React.Component</code>是React组件的基类。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>有关 <code>React.Component</code> 的方法和属性列表，请参阅 <a href="/react/docs/react-component.html"><code>React.Component API Reference</code></a>。</p>\n<hr>\n<h3 id="reactpurecomponent"><a href="#reactpurecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.PureComponent</code></h3>\n<p><code>React.PureComponent</code> 与 <a href="#react.component"><code>React.Component</code></a> 几乎完全相同，但 <code>React.PureComponent</code> 通过\bprop和state的浅对比来实现 <a href="/react/docs/react-component.html#shouldcomponentupdate"><code>shouldComponentUpate()</code></a>。</p>\n<p>如果React组件的 <code>render()</code> 函数在给定相同的props和state下渲染为相同的结果，在某些场景下你可以使用 <code>React.PureComponent</code> 来提升性能。</p>\n<blockquote>\n<p>Note</p>\n</blockquote>\n<blockquote>\n<p><code>React.PureComponent</code> 的 <code>shouldComponentUpdate()</code> 只会对对象进行浅对比。如果对象包含复杂的数据结构，它可能会因深层的数据不一致而产生错误的否定判断(表现为对象深层的\b数据已改变视图却没有更新, 原文：false-negatives)。当你期望只拥有简单的props和state时，才去继承 <code>PureComponent</code> ，或者在你知道深层的数据结构已经发生改变时使用 <a href="/react/docs/react-component.html#forceupdate"><code>forceUpate()</code></a> 。或者，考虑使用 <a href="https://facebook.github.io/immutable-js/">不可变对象</a> 来促进嵌套数据的快速比较。</p>\n<p>此外,<code>React.PureComponent</code> 的 <code>shouldComponentUpate()</code> 会忽略整个组件的子级。请确保所有的子级组件\b也是”Pure”的。</p>\n</blockquote>\n<hr>\n<h3 id="createelement"><a href="#createelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>createElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\n  type<span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>props<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token operator">...</span>children<span class="token punctuation">]</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>根据给定的类型创建并返回新的 <a href="/react/docs/rendering-elements.html"><code>React element</code></a> 。参数type既可以是一个html标签名称字符串(例如<code>\'div\'</code> 或 <code>\'span\'</code> )，也可以是一个 <a href="/react/docs/components-and-props.html"><code>React component</code></a> 类型(一个类或一个函数)。</p>\n<p><code>React.DOM</code> 提供了DOM组件的 <code>React.createElement()</code> 的便捷包装。举个例子，<code>React.DOM.a(...)</code> 是 <code>React.createELement(\'a\', ...)</code> 的一个便捷包装。这个用法被认为是过时的，我们推荐您使用JSX，或者直接使用 <code>React.createElement()</code> 。</p>\n<p>用\b <a href="/react/docs/introducing-jsx.html"><code>JSX</code></a> 编写的代码会被转换成用 <code>React.createElement()</code> 实现。如果使用了JSX，你\b通常不会直接调用 <code>React.createElement()</code> 。参阅 <a href="/react/docs/react-without-jsx.html"><code>React Without JSX</code></a> 了解更多。</p>\n<hr>\n<h3 id="cloneelement"><a href="#cloneelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>cloneElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>React.cloneElement(\n  element,\n  [props],\n  [...children]\n)</code></pre>\n      </div>\n<p>以 <code>element</code> 作为起点，克隆并返回一个新的React元素(React Element)。生成的元素将会拥有原始元素props\b与新props的浅合并。新的子级会替换现有的子级。来自原始元素的 <code>key</code> 和 <code>ref</code> 将会保留。</p>\n<p><code>React.cloneElement()</code> 几乎相当于：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>element<span class="token punctuation">.</span>type <span class="token punctuation">{</span><span class="token operator">...</span>element<span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>element.type</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>然而，它也保留了\b <code>ref</code>。这意味着，如果你通过 <code>ref</code> 获取到子级组件时，不会一不小心从祖先组件里\b窃取\b了它。你将获得与你新元素相同的 \b<code>ref</code> 。</p>\n<p>这个API是一个替换已弃用的 <code>React.addons.cloneWithProps()</code> 的方案。</p>\n<hr>\n<h3 id="createfactory"><a href="#createfactory" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>createFactory()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>根据给定的类型返回一个创建React元素的函数。类似 <a href="#createElement"><code>React.createElement</code></a> ，参数type既可以一个html标签\b名称字符串，也可以是一个 <a href="/react/docs/components-and-props.html"><code>React component</code></a> 类型(一个类或时一个函数)。</p>\n<p>这个方法过时了，我们推荐你使用JSX或直接使用 <code>React.createElement()</code> 来替代它。</p>\n<p>如果使用了JSX，你通常不会直接调用\b <code>React.createFactory()</code> 。参阅 <a href="/react/docs/react-without-jsx.html"><code>React Without JSX</code></a>了解更多 。</p>\n<hr>\n<h3 id="isvalidelement"><a href="#isvalidelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>isValidElement()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span><span class="token function">isValidElement</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>验证对象是否是一个React元素。返回 <code>true</code> 或 <code>false</code> 。</p>\n<hr>\n<h3 id="reactchildren"><a href="#reactchildren" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children</code></h3>\n<p><code>React.Children</code> 提供了处理 <code>this.props.children</code> 这个不透明数据结构的工具。</p>\n<h4 id="reactchildrenmap"><a href="#reactchildrenmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.map</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>在\b包含在 <code>children</code> 里的每个子级上调用函数，调用的函数的 <code>this</code> 设置为 <code>thisArg</code> 。如果 <code>children</code> 是一个嵌套的对象或数组，它将被遍历。如果 <code>children</code> 是 <code>null</code> 或 <code>undefined</code> ，返回 <code>null</code> 或 <code>undefined</code> 而不是一个空数组。</p>\n<h4 id="reactchildrenforeach"><a href="#reactchildrenforeach" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.forEach</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>类似 <a href="#react.children.map"><code>React.Children.map()</code></a> ，但是不返回数组。</p>\n<h4 id="reactchildrencount"><a href="#reactchildrencount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.count</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>返回 <code>children</code> 中的组件总数，相等于传给 <code>map</code> 或 <code>forEach</code> 时，回调函数被调用次数。</p>\n<h4 id="reactchildrenonly"><a href="#reactchildrenonly" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.only</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>返回<code>children</code>里仅有的子级。否则抛出异常。</p>\n<h4 id="reactchildrentoarray"><a href="#reactchildrentoarray" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>React.Children.toArray</code></h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>返回以赋key给每个子级 <code>child</code> 的扁平数组形式来组成不透明的 <code>children</code> 数据结构。如果你打算在你的渲染方法里操纵子级集合这很有用，特别是你想在 <code>this.props.children</code> 传下之前对它重新排序或切割。</p>\n<blockquote>\n<p>Note:</p>\n<p>当children是扁平列表时，<code>React.Children.toArray()</code> 改变\bkey来保留嵌套数组的语义。也就是说，为了在展开时保留嵌套数组的语义，<code>toArray</code> 会自动的给数组中每个 key 加了上前缀，以便将每个元素的key被限定到包含它的输入数组。</p>\n</blockquote>',frontmatter:{title:"React 高阶 API",next:null,prev:null},fields:{path:"docs/reference-react.md",slug:"docs/react-api.html"}}},pathContext:{slug:"docs/react-api.html"}}}});
//# sourceMappingURL=path---docs-react-api-html-f15af971272aeca02749.js.map