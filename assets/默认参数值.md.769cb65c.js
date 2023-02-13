import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"默认参数值.md"}'),t={name:"默认参数值.md"},l=e(`<h4 id="默认参数值" tabindex="-1">默认参数值 <a class="header-anchor" href="#默认参数值" aria-hidden="true">#</a></h4><p>在定义函数时，可以为参数赋予一个默认值。如果调用该函数时没有传递实参，那么就会使用默认值传递，这比以往的默认undefined值更方便了一步。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function  sum(a=0,b=0){</span></span>
<span class="line"><span style="color:#A6ACCD;">  return a+b</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum())    // =&gt; 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum(1))   //=&gt; 1</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum(1,2)) //=&gt;3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[l];function p(c,r,i,_,d,C){return n(),a("div",null,o)}const h=s(t,[["render",p]]);export{u as __pageData,h as default};
