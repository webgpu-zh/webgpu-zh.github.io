import{_ as s,c as a,o as n,a as p}from"./app.4a2ec065.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"map实例的操作","slug":"map实例的操作","link":"#map实例的操作","children":[]}],"relativePath":"map实例的操作.md"}'),e={name:"map实例的操作.md"},l=p(`<h3 id="map实例的操作" tabindex="-1">map实例的操作 <a class="header-anchor" href="#map实例的操作" aria-hidden="true">#</a></h3><p>要增加或修改Map实例的键值，使用set()方法，允许链式操作，如果set()方法中的键名已在map中存在，那么就会修改键对应的值，否则就是增加键值，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const map =new Map([ [&#39;a&#39;,1],[&#39;b&#39;,2] ])</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;b&#39;,3)   //修改键对应的值</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;c&#39;,3)   // 增加键值</span></span>
<span class="line"><span style="color:#A6ACCD;">map.set(&#39;d&#39;,4).set(&#39;c&#39;,5).set(&#39;f&#39;,6)   //链式操作</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map)</span></span>
<span class="line"><span style="color:#A6ACCD;">//=&gt; Map(6) { &#39;a&#39; =&gt; 1, &#39;b&#39; =&gt; 3, &#39;c&#39;=&gt;3,&#39;d&#39;=&gt;4,&#39;e&#39;=&gt;5,&#39;f&#39;=&gt;6}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用has()方法可以查询map是否存在某个键：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 承接上文的map</span></span>
<span class="line"><span style="color:#A6ACCD;">map.has(&#39; a &#39;)   //   =&gt; true</span></span>
<span class="line"><span style="color:#A6ACCD;">map.get( &#39; aa &#39; )  //  =&gt; false</span></span>
<span class="line"><span style="color:#A6ACCD;">使用get()方法可以通过键查询对应的值，如果键不存在，则返回undefined：</span></span>
<span class="line"><span style="color:#A6ACCD;">// 承接上文的map</span></span>
<span class="line"><span style="color:#A6ACCD;">map.get(&#39;a&#39;)     // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">map.get(&#39;aa&#39;)    //  undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用delete()方法删除map中的键，删除成功返回true，删除不成功(键不存在)则返回false，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 承接上文的map</span></span>
<span class="line"><span style="color:#A6ACCD;">map.delete(&#39;f&#39;)    // =&gt;true</span></span>
<span class="line"><span style="color:#A6ACCD;">map.delete(&#39;f&#39;)   // =&gt;false，键已经在上一步被删除了</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>要取得map的键值对的个数，使用size属性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 承接上文</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.size)   // =&gt;5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果要清空map中所有的键值对，使用clear()方法，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 承接上文</span></span>
<span class="line"><span style="color:#A6ACCD;">map.clear()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.size)   // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map)  // Map(0) {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),t=[l];function o(c,i,r,C,d,A){return n(),a("div",null,t)}const y=s(e,[["render",o]]);export{g as __pageData,y as default};
