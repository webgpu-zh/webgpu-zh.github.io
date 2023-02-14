import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"map到数组的转换.md"}'),l={name:"map到数组的转换.md"},p=e(`<h4 id="map到数组的转换" tabindex="-1">map到数组的转换 <a class="header-anchor" href="#map到数组的转换" aria-hidden="true">#</a></h4><p>对map实例使用下面三种方法，可以返回可迭代对象：</p><ul><li>keys()，返回由键组成的新数组</li><li>values()，返回由值组成的新数组</li><li>entries()，返回由键值组成的二维数组</li></ul><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const map = new        Map().set(&#39;a&#39;,1).set(&#39;b&#39;,2).set(&#39;c&#39;,3)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.keys())  //=&gt;[Map Iterator] { &#39;a&#39;, &#39;b&#39;, &#39;c&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.values())// =&gt; [Map Iterator] { 1, 2, 3 }</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(map.entries())// =&gt; [Map Entries] { [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用Array.from()或者[...iterator]，就可以将上面几个可迭代对象转换为真正的数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 承接上文</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...map.keys()])// =&gt; [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...map.values()]) // =&gt; [ 1, 2, 3 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...map.entries()]) // =&gt; [ [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),t=[p];function o(c,i,r,C,A,_){return n(),a("div",null,t)}const y=s(l,[["render",o]]);export{m as __pageData,y as default};
