import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象的可计算属性.md"}'),l={name:"对象的可计算属性.md"},p=e(`<h4 id="对象的可计算属性" tabindex="-1">对象的可计算属性 <a class="header-anchor" href="#对象的可计算属性" aria-hidden="true">#</a></h4><p>对象的可计算属性是ES6新增的特性。有些情况下，属性名是一个变量，无法使用点号语法得到属性值，此时可以使用方括号的方式读取属性，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const key1 = &#39;a&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const key2 = &#39;b&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj[key1] = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[key2] = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)   // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用中括号的优势是可以通过变量访问属性。</p><p>对于一个确定的属性名称，除了使用点号外，也可以使用中括号读取属性，但此时需要使用引号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj[&#39;a&#39;] = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">obj[&#39;b&#39;] = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[p];function t(c,i,r,C,_,A){return n(),a("div",null,o)}const b=s(l,[["render",t]]);export{y as __pageData,b as default};
