import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"字符串模板字面量.md"}'),l={name:"字符串模板字面量.md"},t=e(`<h4 id="字符串模板字面量" tabindex="-1">字符串模板字面量 <a class="header-anchor" href="#字符串模板字面量" aria-hidden="true">#</a></h4><p>模板字面量取代了早期和其它语言的%d、%f等写法，使得变量化的字符串更容易书写，也更易阅读。模板字符串使用反单引号(\`\`)包容，它有最主要的两个特点：保留了换行符等不可见字符（以往只能用\\n）；提供了变量解析和运算。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let str = \`第一行 (这里按回车)</span></span>
<span class="line"><span style="color:#A6ACCD;">第二行\`</span></span>
<span class="line"><span style="color:#A6ACCD;">str   // =&gt;&#39;第一行\\n第二行&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let a=1</span></span>
<span class="line"><span style="color:#A6ACCD;">let b=2</span></span>
<span class="line"><span style="color:#A6ACCD;">\`a的值是\${a}\`  // =&gt;&#39;a的值是1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">\`a+b的结果是\${a+b}\`    // =&gt; &#39;a+b的结果是3&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>虽然string类型是原始值，但是表现出像对象一样使用属性和方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let str=&#39;hello&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">str.length  // =&gt;5， 字符串的长度</span></span>
<span class="line"><span style="color:#A6ACCD;">[...str]  //=&gt;[ &#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39; ] ，将字符串快速打平为数组</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),p=[t];function o(c,r,i,_,C,d){return n(),a("div",null,p)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
