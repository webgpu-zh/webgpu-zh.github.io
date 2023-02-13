import{_ as s,c as a,o as n,a as e}from"./app.4a2ec065.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数组检索.md"}'),t={name:"数组检索.md"},o=e(`<h4 id="array-prototype-indexof-、-array-prototype-lastindexof" tabindex="-1">Array.prototype.indexOf() 、 Array.prototype.lastIndexOf() <a class="header-anchor" href="#array-prototype-indexof-、-array-prototype-lastindexof" aria-hidden="true">#</a></h4><p>如果不仅要看是否包含某个元素，还要找出第一次出现的位置，则应该使用Array.prototype.indexOf()方法，如果能找到，则返回第一次出现的索引位置，如果没有，则返回-1。如果要返回最后一次出现的索引位置，则使用Array.prototype.lastIndexOf()，例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">cosnt arr = [1, 2, 3, 4, 2, 5]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const result1 = arr.indexOf(2)  // 第一次出现2的索引位置</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(result1)  // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">const result2= arr.indexOf(6)  //第一次出现6的索引位置，没有找到</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(result2)  // -1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const result3 = arr.lastIndexOf(2)  // 最后一次出现2的索引位置</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(result3)  // 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>请注意indexOf()和lastIndexOf()只能找到第一次和最后一次出现的位置，如果需要将所有的位置都找到，则应该使用filter()方法。</p>`,4),p=[o];function l(r,c,i,d,_,y){return n(),a("div",null,p)}const f=s(t,[["render",l]]);export{C as __pageData,f as default};
