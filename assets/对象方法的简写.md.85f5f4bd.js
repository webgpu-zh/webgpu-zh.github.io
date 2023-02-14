import{_ as s,c as a,o as n,a as l}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象方法的简写.md"}'),p={name:"对象方法的简写.md"},e=l(`<h4 id="对象方法的简写" tabindex="-1">对象方法的简写 <a class="header-anchor" href="#对象方法的简写" aria-hidden="true">#</a></h4><p>对象往往具备多个方法，方法其实就是函数，只不过在对象的命名空间中我们称之为方法，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	b:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	say:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    	console.log(&#39;Hello,World!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj.say()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>此时可以省略方法名称后面的冒号和function关键字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  say(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;Hello,World!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj.say()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),o=[e];function c(t,i,r,C,A,_){return n(),a("div",null,o)}const D=s(p,[["render",c]]);export{y as __pageData,D as default};
