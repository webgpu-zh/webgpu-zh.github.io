import{_ as s,c as n,o as a,a as l}from"./app.4a2ec065.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"对象的属性特性.md"}'),p={name:"对象的属性特性.md"},e=l(`<h4 id="对象的属性特性" tabindex="-1">对象的属性特性 <a class="header-anchor" href="#对象的属性特性" aria-hidden="true">#</a></h4><p>对象的属性的特性属于比较复杂但不是很难的知识点。</p><p>对象的成员分为属性和方法，而对象的属性又分为：</p><ul><li><p>数据属性</p></li><li><p>访问器属性</p></li></ul><p><strong>对象的数据属性</strong></p><p>一般情况下，对象的属性就是数据属性，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1,b:2}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这里，a、b均为数据属性。</p><p>对象的数据属性有4个特性：</p><ul><li>value：表示该属性的值</li><li>writable：表示该属性的值是否可以被修改</li><li>enumerable：表示该属性是否可以通过for-in 循环遍历，默认情况下为true，如果将该特性设置为false，则for-in循环时将遍历不到该属性。</li><li>configurable：表示是否可以通过delet删除该属性，或者是否可以修改其特性。</li></ul><p>这里要注意的是writable和configurable的区别，writable侧重于能不能修改属性的值，而configurable侧重于能不能配置该属性的特性。</p><p><strong>对象的属性的特性使用</strong></p><p>Object.defineProperty()方法来定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(obj,&#39;a&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">	value:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	writable:false,   // 不能修改该属性的值</span></span>
<span class="line"><span style="color:#A6ACCD;">  	enumerable:true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	configurable:true</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)    // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.a = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)  //  1 ： 不会报错，但是静默失败</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>对象的访问器属性</strong></p><p>对象的访问器属性有4个特性：</p><ul><li><p>get：获取函数，在读取该属性时调用。</p></li><li><p>set：获取函数，在写入属性时被调用。</p></li><li><p>enumerable：与数据属性的作用相同。</p></li><li><p>configurable：与数据属性的作用相同。</p></li><li><p>这里的难点是get和set，如果对属性只定义了get函数，那么该属性就是只读的，必须同时定义get和set函数才说明该属性是可写的，例如：</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(obj,&#39;b&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">	get(){return this.a},</span></span>
<span class="line"><span style="color:#A6ACCD;">  	set(value){this.a = value}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.b)    // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)  //   2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这里a是数据属性，b是a的访问器属性，可读可写。再来看一个只读访问器的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.defineProperty(obj,&#39;b&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">	get(){return this.a},</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.b)    // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.b = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a)  //   1 ： 不会报错，但是静默失败</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,20),o=[e];function t(c,i,r,C,A,b){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
