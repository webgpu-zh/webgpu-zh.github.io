import{_ as s,c as n,o as a,a as e}from"./app.4a2ec065.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"函数内部的arguments对象.md"}'),t={name:"函数内部的arguments对象.md"},r=e(`<h4 id="函数内部的arguments对象" tabindex="-1">函数内部的arguments对象 <a class="header-anchor" href="#函数内部的arguments对象" aria-hidden="true">#</a></h4><p>对于使用了function关键字的函数声明或函数表达式，函数内部有一个arguments对象，这是一个类数组对象，可以通过Array.from(arguments)将其转化为数组。arguments.length表示实参的个数。arguments[n]表示第n个参数。</p><p>注意，箭头函数没有arguments对象。</p><p>有了arguments对象，即便是不写形参，也可以定义函数，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function sum(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	const result=Array.from(arguments).reduce((prev,cur)=&gt;prev+cur)</span></span>
<span class="line"><span style="color:#A6ACCD;">	return result</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum(1,2))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum(1,2,3))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),p=[r];function l(o,c,i,_,u,m){return a(),n("div",null,p)}const A=s(t,[["render",l]]);export{g as __pageData,A as default};
