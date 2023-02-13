import{_ as s,c as a,o as n,a as l}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数组的本质也是对象.md"}'),e={name:"数组的本质也是对象.md"},p=l(`<h4 id="数组的本质也是对象" tabindex="-1">数组的本质也是对象 <a class="header-anchor" href="#数组的本质也是对象" aria-hidden="true">#</a></h4><p>现在，我们来探讨一个问题——数组的本质。</p><p>我们知道，数组的索引使用中括号，中括号里面是数字，表示元素的序号，从0开始，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr[0])  // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这种中括号的访问方式类似于对象的属性访问。我们知道，对于是字面量的属性名称，对象属性的访问需要使用引号，将这种规则加到数组上试试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr[&quot;0&quot;])  // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>依然能够找到第一个元素。</p><p>这就说明，数组的本质也是对象，只不过基于对象做了一些特殊处理，包括：</p><ul><li><p>默认情况下，数组元素的属性名是整数，且从0开始整数递增。</p></li><li><p>数组不能使用点号语法访问元素值，例如arr.0是错误的。</p></li></ul><p>既然属性的本质是对象，那么除了只能是数值的默认属性之外，也可以添加一些自定义属性，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr[&#39;key1&#39;] = &#39;hello&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[&#39;key2&#39;] = &#39;world&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr)   // [ 1, 2, 3, key1: &#39;hello&#39;, key2: &#39;world&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr.key1)  // hello, 对象的点号访问语法</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr[&#39;key2&#39;])  // world,  对象的中括号加引号访问语法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),o=[p];function t(c,r,i,C,d,A){return n(),a("div",null,o)}const h=s(e,[["render",t]]);export{y as __pageData,h as default};
