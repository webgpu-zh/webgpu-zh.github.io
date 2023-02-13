import{_ as s,c as a,o as n,a as l}from"./app.4a2ec065.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数组的fill()方法.md"}'),p={name:"数组的fill()方法.md"},e=l(`<h4 id="array-prototype-fill" tabindex="-1">Array.prototype.fill() <a class="header-anchor" href="#array-prototype-fill" aria-hidden="true">#</a></h4><p>数组的fill()可以让数组在指定的索引范围内填入相同的值，该方法接收三个参数： 要填充的值、起始索引(默认为0)、终止索引(默认为最后一个元素，可以用负整数表示倒数)。</p><p>fill()方法会修改源数组，来看下面的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr1 = [1,2,3,4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2=[...arr1]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr3=[...arr1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr1.fill(20)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr1)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [20,20,20,20,20,20]</span></span>
<span class="line"><span style="color:#A6ACCD;">// =&gt; 所有位置都填充为20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr2.fill(20,2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr2)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [1,2,20,20,20,20]</span></span>
<span class="line"><span style="color:#A6ACCD;">// 从第3个元素开始，一直到结尾</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr3.fill(20,1,-2)</span></span>
<span class="line"><span style="color:#A6ACCD;">// [1,20,20,20,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">// 从第2个开始(包含)，到倒数第二个结束(不包含)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),o=[e];function r(t,c,i,A,C,_){return n(),a("div",null,o)}const D=s(p,[["render",r]]);export{d as __pageData,D as default};
