import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"合并对象.md"}'),o={name:"合并对象.md"},p=e(`<h4 id="合并对象" tabindex="-1">合并对象 <a class="header-anchor" href="#合并对象" aria-hidden="true">#</a></h4><p><strong>使用Object.assign()合并对象</strong></p><p>可以使用Object.assign()合并对象，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj1 = {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj2 = {a:2, c:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = Object.assign(obj1,obj2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // { a: 2, b: 2, c: 3 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>合并对象时，如果存在同名属性，则后边的对象属性值会覆盖前面的属性值。 <strong>使用三点操作符合并对象</strong> 作为一种语法糖，可以使用三点操作符合并对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj1 = {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj2 = {a:2, c:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {...obj1,...obj2}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // { a: 2, b: 2, c: 3 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>最后，要特别说明的是，无论使用Object.assign()，还是使用三点运算符，只推荐源对象不包括嵌套属性、并且属性值是原始值的时候使用，此时新对象对于源对象是独立的，不存在深浅拷贝的问题。如果源对象包括嵌套属性、或者属性值存在非原始值（其实嵌套属性本身也意味着属性值非原始值了），那么新对象的某些属性可能还引用着源对象，这里面有一些“语法陷阱”需要避免，建议先使用其它方式将对象打平，再进行合并。</p>`,7),l=[p];function t(c,i,r,_,C,d){return n(),a("div",null,l)}const g=s(o,[["render",t]]);export{A as __pageData,g as default};
