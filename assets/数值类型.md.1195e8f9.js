import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数值类型.md"}'),l={name:"数值类型.md"},p=e(`<h4 id="数值类型" tabindex="-1">数值类型 <a class="header-anchor" href="#数值类型" aria-hidden="true">#</a></h4><p>使用如下方式新建数值类型的变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let num = 1     // 整数</span></span>
<span class="line"><span style="color:#A6ACCD;">let floatNum = 0.1   // 浮点数</span></span>
<span class="line"><span style="color:#A6ACCD;">let num=1.0  // 虽然跟了小数点，但依然会被处理成整数</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>NaN是一种特殊的数值，表示运算错误，但不会报错。Infinity表示无穷大，-Infinity表示无穷小，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">0/0   //=&gt; NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">5/0   // =&gt; Infinity，很多语言会报错，但是这里为无穷大</span></span>
<span class="line"><span style="color:#A6ACCD;">5/-0  // =&gt; -Infinity</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>有三种函数用于将其它形式的值转为数值，Number()是通用的，可将类似数值的字符串或单数值元素的数组转换为数组。parseInt()和parseFloat()用于将开头是数字而存在非数字的字符串提取成数值，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Number(true)  // 遇布尔值转为1或0</span></span>
<span class="line"><span style="color:#A6ACCD;">Number(null)  // 0</span></span>
<span class="line"><span style="color:#A6ACCD;">Number(undefined)  // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Number(&#39;123&#39;)  // =&gt;123</span></span>
<span class="line"><span style="color:#A6ACCD;">Number(&#39;123 456&#39;)  // =&gt; NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">Number(&#39;123hello&#39;) // =&gt; NaN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Number(&#39;&#39;)  //=&gt;0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">parseInt(&#39;123hello&#39;)  //=&gt; 123</span></span>
<span class="line"><span style="color:#A6ACCD;">parseFloat(&#39;1.23hello&#39;) //=&gt; 1.23</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>由于乘法运算和减法运算在碰到数值时会隐式调用Number()，因此可以使用此方法快速调用Number()，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">true * 1    //=&gt;1，等同于Number(true) </span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;123&#39; * 2   // =&gt; 246，等同于Number(&#39;123&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),t=[p];function o(c,i,r,C,A,d){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{y as __pageData,m as default};
