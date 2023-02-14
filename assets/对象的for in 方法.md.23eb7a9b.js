import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象的for in 方法.md"}'),o={name:"对象的for in 方法.md"},t=e(`<h4 id="对象的for-in-方法" tabindex="-1">对象的for in 方法 <a class="header-anchor" href="#对象的for-in-方法" aria-hidden="true">#</a></h4><p>可迭代对象可以使用for of 循环遍历，而Object类型并非可迭代对象，不过可以使用for in 方法遍历其属性名和属性值，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1, b:2, c:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let key in obj){</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(key)  // a  b  c</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>从这里可以看出，如果只有一个参数，那么只遍历属性名称。</p>`,4),p=[t];function c(l,r,i,_,d,f){return n(),a("div",null,p)}const h=s(o,[["render",c]]);export{A as __pageData,h as default};
