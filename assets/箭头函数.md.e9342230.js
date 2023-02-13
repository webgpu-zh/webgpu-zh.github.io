import{_ as s,c as n,o as a,a as l}from"./app.4a2ec065.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"箭头函数.md"}'),p={name:"箭头函数.md"},e=l(`<h4 id="箭头函数" tabindex="-1">箭头函数 <a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a></h4><p>箭头函数省去了function关键字，改而使用胖箭头来隔开参数列表和函数体：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let fun = (arg1,arg2,...) =&gt;{ </span></span>
<span class="line"><span style="color:#A6ACCD;">    // statements</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>箭头函数通常被当作参数传递给其它函数使用，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const  arr=[1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.forEach(x=&gt;x*2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr)  //=&gt;[2,4,6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用箭头函数有几个注意事项。</p><p>第一，当参数只有一个参数时，可不加圆括号。没有参数或者多于1个参数，都需要加圆括号，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const  fun1 = x=&gt;x+1  // 只有一个参数</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun2 = ()=&gt;1   // 没有参数</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun3 = (x,y)=&gt;x+y  // 多于一个参数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第二，当箭头函数的函数体只有一行，并且这一行是赋值、打印、返回值的时候，不能加花括号，也不能写return，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 这两种写法都是错的：</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun1= x =&gt; return x+1</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun2= x =&gt; {return x+1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 这三种写法是对的：</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun3= x =&gt;x+1</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun4= x =&gt;console.log(x)</span></span>
<span class="line"><span style="color:#A6ACCD;">const  fun5= x =&gt;x.a=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第三，当箭头函数的函数体只有一行，并且这一行返回一个对象时，需要在花括号两边加上圆括号，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const fun = () =&gt; ({a:1,b:2})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(fun())  // {a:1,b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),t=[e];function o(c,i,r,C,A,d){return a(),n("div",null,t)}const y=s(p,[["render",o]]);export{u as __pageData,y as default};
