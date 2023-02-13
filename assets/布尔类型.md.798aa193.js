import{_ as s,c as a,o as n,a as l}from"./app.4a2ec065.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"布尔类型.md"}'),e={name:"布尔类型.md"},o=l(`<h4 id="布尔类型" tabindex="-1">布尔类型 <a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a></h4><p>布尔类型只有两个字面量：true和false。</p><p>下面这些值视作true：</p><ul><li>非空字符串，注意，&quot; &quot;有一个空格，也算非空。</li><li>任意对象，包括空对象</li><li>正负无穷大</li><li>非零数值</li></ul><p>下面这些值视作false：</p><ul><li>空字符串&quot;&quot;</li><li>NaN</li><li>数字0</li><li>null</li><li>undefined</li></ul><p>可以使用<code>!!()</code>和<code>Boolean()</code>将其它形式的值转为布尔类型，以便于条件判断，前者是后者的简写形式。</p><p>来看下面的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 下面这些值都视作true</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(hello&#39;)  // =&gt; true</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(&#39;  &#39;)  // 非空字符串，空格也算非空</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(5/0)  // 正负无穷大</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean({})   // 任意对象，包括空对象</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 下面这些值都视作false</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(&#39;&#39;)   // =&gt;false 空字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(0)   </span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(NaN)</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean(undefined)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在if语句中，不必显式地使用<code>!!()</code>，会自动隐式调用:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const a=2</span></span>
<span class="line"><span style="color:#A6ACCD;">if (a){console.log(true)}   //=&gt; true</span></span>
<span class="line"><span style="color:#A6ACCD;">let b</span></span>
<span class="line"><span style="color:#A6ACCD;">if (b){console.log(true)}</span></span>
<span class="line"><span style="color:#A6ACCD;">else {console.log(false)}   //=&gt; false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),p=[o];function t(c,i,r,C,A,d){return n(),a("div",null,p)}const y=s(e,[["render",t]]);export{_ as __pageData,y as default};
