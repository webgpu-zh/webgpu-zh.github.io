import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象的枚举.md"}'),l={name:"对象的枚举.md"},o=e(`<h4 id="对象的枚举" tabindex="-1">对象的枚举 <a class="header-anchor" href="#对象的枚举" aria-hidden="true">#</a></h4><p>对象是一组名/值对，可以使用如下方法枚举属性名、属性值、名/值对：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj =  {a:1, b:2, c:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const keys = Object.keys(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(keys)  //   [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const values = Object.values(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(values)  //  [ 1, 2, 3 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const entries = Object.entries(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(entries)  // [ [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),p=[o];function t(c,r,i,_,C,A){return n(),a("div",null,p)}const b=s(l,[["render",t]]);export{y as __pageData,b as default};
