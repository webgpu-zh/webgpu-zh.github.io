import{_ as a,c as s,o as n,a as l}from"./app.4a2ec065.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数组的flat()方法.md"}'),e={name:"数组的flat()方法.md"},p=l(`<h4 id="array-prototype-flat" tabindex="-1">Array.prototype.flat() <a class="header-anchor" href="#array-prototype-flat" aria-hidden="true">#</a></h4><p>有些场景下，我们需要将具有嵌套结构的数组打平，ES2019新增了flat()方法用于数组的打平操作，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr1= [ 1, [2,3],4 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2=arr.flat()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr2)   //=&gt;[1,2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>该方法还可以接收一个整数，表示打平的深度，默认情况下，打平一级嵌套，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr=[[[1]]]   // 三级嵌套</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr1=arr.flat()  </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr1)    //=&gt; [[1]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2=arr.flat(2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr2)  //=&gt;[1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意，当打平深度高于嵌套层级时，永远只会返回一维数组：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// const arr=[[[1]]]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr3=arr.flat(6)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr)   //=&gt;[1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>也就是说，打平的结果永远还是数组。</p>`,8),t=[p];function o(r,c,i,C,d,A){return n(),s("div",null,t)}const g=a(e,[["render",o]]);export{y as __pageData,g as default};
