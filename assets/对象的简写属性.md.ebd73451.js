import{_ as s,c as a,o as n,a as p}from"./app.4a2ec065.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象的简写属性.md"}'),l={name:"对象的简写属性.md"},e=p(`<h4 id="对象的简写特性" tabindex="-1">对象的简写特性 <a class="header-anchor" href="#对象的简写特性" aria-hidden="true">#</a></h4><p>EcamsSript 6为对象新增了简写特性，这并没有改变对象本身的行为，但极大地提升了编码和阅读的效率。</p><p>上面这个例子演示的是属性值是变量的情况，但是又有一个特征，就是：属性名和属性值的标识符是一样的，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const a=1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b=2</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj={a:a,b:b} </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这时候，就可以使用简写方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const a=1</span></span>
<span class="line"><span style="color:#A6ACCD;">const b=2</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj={a,b} // 等价于 const obj = {a:a, b:b}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)  // {a:1, b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>除了属性可以简写以外，方法也有简写的方式，就是去掉冒号和function关键字，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">   	b:2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   	sum(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    	return a+b</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.sum())</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在有些场景中，可以看到对象的最后一个属性值后面还留有一个逗号，这种逗号叫做拖尾逗号。拖尾逗号可用在需要经常增加、删除对象属性的情况，可以保证每次操作的一致性，避免发生低级的语法错误。</p><p>不过，要特别注意的是，JSON格式不支持拖尾逗号。</p>`,10),o=[e];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const y=s(l,[["render",t]]);export{b as __pageData,y as default};
