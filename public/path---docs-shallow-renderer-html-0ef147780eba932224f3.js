webpackJsonp([0xada2c95b3200],{"./node_modules/json-loader/index.js!./.cache/json/docs-shallow-renderer-html.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> ShallowRenderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer/shallow\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ES6</span>\n<span class="token keyword">var</span> ShallowRenderer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-test-renderer/shallow\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// ES5 with npm</span>\n</code></pre>\n      </div>\n<h2 id="概述"><a href="#%E6%A6%82%E8%BF%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概述</h2>\n<p>当为 React 写单元测试时, 浅渲染会变得十分有用。浅渲染使您渲染组件的“第一层”，并且对组件的 render 方法的返回值进行断言，不用担心子组件的行为，组件并没有实例化或被渲染。浅渲染并不需要 DOM。</p>\n<p>例如，如果您有如下的组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>heading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Subcomponent</span> <span class="token attr-name">foo</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>你可以断言(assert)：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> ShallowRenderer <span class="token keyword">from</span> <span class="token string">\'react-test-renderer/shallow\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// in your test:</span>\n<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShallowRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrenderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> result <span class="token operator">=</span> renderer<span class="token punctuation">.</span><span class="token function">getRenderOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>heading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Subcomponent</span> <span class="token attr-name">foo</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>浅测试（Shallow testing）当前还有一些局限, 即不支持 refs。</p>\n<blockquote>\n<p>注意：</p>\n<p>我们还建议看看 Enzyme <a href="http://airbnb.io/enzyme/docs/api/shallow.html">Shallow Rendering API</a>。它在相同的功能上提供了一个更棒的高级 API。</p>\n</blockquote>\n<h2 id="参考"><a href="#%E5%8F%82%E8%80%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考</h2>\n<h3 id="shallowrendererrender"><a href="#shallowrendererrender" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>shallowRenderer.render()</code></h3>\n<p>你可以把 shallowRenderer 想象成一个用来渲染你正在测试的组件的“地方”，并且你可以从那里取到该组件的输出。</p>\n<p><code>shallowRenderer.render()</code> 和 <a href="/react/docs/react-dom.html#render"><code>ReactDOM.render()</code></a>很像。但是它不需要 DOM 并且只渲染一层。这就意味着你可以测试与子组件行为隔离的组件。</p>\n<h3 id="shallowrenderergetrenderoutput"><a href="#shallowrenderergetrenderoutput" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>shallowRenderer.getRenderOutput()</code></h3>\n<p>在 <code>shallowRenderer.render()</code> 被调用后, 你可以调用 <code>shallowRenderer.getRenderOutput()</code> 来获取浅渲染的输出.</p>\n<p>然后，您就可以开始开始对输出进行断言了。</p>',frontmatter:{title:"浅层渲染",next:null,prev:null},fields:{path:"docs/addons-shallow-renderer.md",slug:"docs/shallow-renderer.html"}}},pathContext:{slug:"docs/shallow-renderer.html"}}}});
//# sourceMappingURL=path---docs-shallow-renderer-html-0ef147780eba932224f3.js.map