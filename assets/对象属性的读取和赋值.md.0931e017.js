import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象属性的读取和赋值.md"}'),o={name:"对象属性的读取和赋值.md"},l=e(`<h4 id="对象属性的读取和赋值" tabindex="-1">对象属性的读取和赋值 <a class="header-anchor" href="#对象属性的读取和赋值" aria-hidden="true">#</a></h4><p>通常情况下，对象的属性名是明确的字面量，这时候时候点号选取对象属性，读取或写入属性的值，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj.a = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用点号可以连续读取属性，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:{a:1,b:2}, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这里的两个属性名a并不冲突，因为它们从属于不同的对象命名空间。</p>`,6),p=[l];function t(c,i,r,_,d,C){return n(),a("div",null,p)}const b=s(o,[["render",t]]);export{h as __pageData,b as default};
