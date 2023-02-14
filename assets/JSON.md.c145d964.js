import{_ as s,c as n,o as a,a as l}from"./app.4a2ec065.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JSON.md"}'),o={name:"JSON.md"},p=l(`<h4 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-hidden="true">#</a></h4><p>JSON全称是JavaScript对象表示法，是通用的数据交换格式，许多软件的配置文件均使用JSON文件格式。</p><p>要特别说明的是，JSON不是对象，JSON就是字符串，JSON字符串可以包括三种语法：</p><ul><li>原始值</li><li>对象</li><li>数组</li><li><strong>将对象转换为JSON</strong></li></ul><p>要将对象转换为JSON字符串，使用JSON.stringify()，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1, b:2, c:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const json = JSON.stringify(obj)  </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(json)   //  {&quot;a&quot;:1,&quot;b&quot;:2,&quot;c&quot;:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以在第二个参数中指定一个数组，表示筛选哪些属性进入JSON字符串：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const obj = {a:1, b:2, c:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const json = JSON.stringify(obj,[&#39;a&#39;,&#39;c&#39;])  </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(json)   //  {&quot;a&quot;:1,&quot;c&quot;:3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>将JSON序列化为对象</strong></p><p>可以将JSON序列化为对象，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const json = &#39;{&quot;a&quot;:1,&quot;b&quot;:2,&quot;c&quot;:3}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = JSON.parse(json)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>再来看一个例子，从本地的配置文件中读取JSON字符串转化为对象，修改后保存回配置文件。 如下是配置文件settings.json的内容：</p><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>如下读取配置文件并解析为对象，然后写回配置文件中：</p><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const fs = require(&#39;fs&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const json = fs.readFileSync(&#39;settings.json&#39;,&#39;utf</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = JSON.parse(json)  </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj)   </span><span style="color:#676E95;font-style:italic;">// { a: 1, b: 2, c: 3 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj.a = </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.c = </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">const json</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> = JSON.stringify(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.writeFileSync(&#39;settings.json&#39;,json</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,&#39;utf</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">&#39;)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,15),e=[p];function t(c,i,r,C,y,A){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{d as __pageData,u as default};
