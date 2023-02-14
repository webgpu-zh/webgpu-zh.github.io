import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象属性名的简写.md"}'),l={name:"对象属性名的简写.md"},o=e(`<h4 id="对象属性名的简写" tabindex="-1">对象属性名的简写 <a class="header-anchor" href="#对象属性名的简写" aria-hidden="true">#</a></h4><p>在很多时候，对象的属性值是一个变量标识符，而这个标识符和属性名是一样的，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const a = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {a:a, b:b}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种情况下，可以使用一种简化的语法，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const a = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {a , b}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),p=[o];function t(c,i,r,_,C,d){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{b as __pageData,h as default};
