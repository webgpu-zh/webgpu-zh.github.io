import{_ as s,c as a,o as n,a as l}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象的属性名和属性值.md"}'),p={name:"对象的属性名和属性值.md"},e=l(`<h4 id="对象的属性名和属性值" tabindex="-1">对象的属性名和属性值 <a class="header-anchor" href="#对象的属性名和属性值" aria-hidden="true">#</a></h4><p>使用点号可以访问或者设置对象的属性值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1,b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.a=2</span></span>
<span class="line"><span style="color:#A6ACCD;">comsole.log(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>除了点号，还可以使用中括号访问或设置对象的属性值，注意需要对属性名使用引号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1,b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj[&quot;a&quot;])  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以上两种方式适用于属性名是字面量的情况下，如果属性名是个变量标识符，那么只能使用中括号，且不能加引号，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const key1=&#39;a&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const key2=&#39;b&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const  obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[key1]=1   // 解析为obj[&quot;a&quot;]=1</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[key2]=2 // 解析为obj[&quot;b&quot;]=2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>对象的属性值也可以是变量，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const a=1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b=2</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj={a:a,b:b}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 解析为 const obj={a:1,b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>对象的成员不仅可以是变量，也可以是函数。按照习惯，在对象中，变量被称呼为属性，函数被称呼为方法。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a:1 ,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c:function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;hello,world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在上面的代码中，对象实例obj有两个属性a和b，有一个方法c()。</p>`,12),o=[e];function c(t,i,r,C,A,d){return n(),a("div",null,o)}const _=s(p,[["render",c]]);export{y as __pageData,_ as default};
