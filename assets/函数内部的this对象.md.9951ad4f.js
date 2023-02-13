import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"函数内部的this对象.md"}'),p={name:"函数内部的this对象.md"},l=e(`<h4 id="函数内部的this对象" tabindex="-1">函数内部的this对象 <a class="header-anchor" href="#函数内部的this对象" aria-hidden="true">#</a></h4><p>this，顾名思义，就是“这个”。</p><p>this被用在对象的方法中，表示“这个对象”。</p><p>函数可以被用作对象的方法。同一个函数，被不同对象调用时，上下文是不一样的，this指代调用的上下文对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function sayName(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(\`I am \${this.name}\`)   </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const zhangsan = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name: &#39;Zhang San&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	sayName: sayName</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const lisi = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name : &#39;Li Si&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	sayName : sayName</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">zhangsan.sayName()   // I am Zhang San  </span></span>
<span class="line"><span style="color:#A6ACCD;">lisi.sayName()   // I am Li Si   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),t=[l];function o(c,i,r,C,A,_){return n(),a("div",null,t)}const d=s(p,[["render",o]]);export{y as __pageData,d as default};
