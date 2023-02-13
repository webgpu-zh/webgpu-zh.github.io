import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"新建对象实例.md"}'),p={name:"新建对象实例.md"},l=e(`<h4 id="新建对象实例" tabindex="-1">新建对象实例 <a class="header-anchor" href="#新建对象实例" aria-hidden="true">#</a></h4><p>Object是JavaScript中最常见的数据类型，也是其它引用类型的基类。一个对象实例由一个或多个名 / 值对组成。</p><p>创建对象的方法有多种，第一种是使用对象字面量的方式新建一个对象实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1,b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第二种方式是使用new Object()创建对象，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = new Object({a:1, b:2})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第三种方式是使用Object.fromEntites()创建对象，这个方法接受一个可迭代对象，例如一个二维数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr = [ [&#39;a&#39;,1],[&#39;b&#39;,2] ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = Object.fromEnties(arr)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>也可以接收一个Map类型的实例，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const map = new Map([ [&#39;a&#39;,1],[&#39;b&#39;,2] ])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = Object.fromEnties(map)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>第五种方式是读取一个JSON字符串创建对象，该字符串包裹的是一个对象字面量，也可以是通过Node.js的fs模块的readFileSync()方法从本地某个.json文件读取的。 通过JSON字符串创建对象的示例如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const str = &#39;{&#39;a&#39;:1,&#39;b&#39;:2}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = JSON.parse(str)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),o=[l];function t(c,i,r,C,d,A){return n(),a("div",null,o)}const _=s(p,[["render",t]]);export{y as __pageData,_ as default};
