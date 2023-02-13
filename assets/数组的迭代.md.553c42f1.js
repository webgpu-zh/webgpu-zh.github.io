import{_ as a,c as s,o as n,a as e}from"./app.4a2ec065.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"数组的迭代.md"}'),r={name:"数组的迭代.md"},l=e(`<h4 id="数组的迭代" tabindex="-1">数组的迭代 <a class="header-anchor" href="#数组的迭代" aria-hidden="true">#</a></h4><p>数组有五个迭代函数，它们都接收一个函数作为参数，传入的函数接收三个参数：元素、索引位置、数组本身。这五个迭代函数分别是：</p><ul><li>Array.prototype.map()：返回对每个元素进行操作后的新数组。</li><li>Array.prototype.filter()：返回回调函数返回值为true的元素组成的新数组。</li><li>Array.prototype.every()：如果回调函数返回值均为true，则返回true，否则返回false。</li><li>Array.prototype.some()：只要有一个或以上的回调函数返回值为true，则返回true，否则返回false。</li><li>Array.prototype.forEach()：不返回新数组，而是直接在原来的数组上对每个元素执行回调函数定义的操作。 来看几个例子：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2 = arr.map((element,index,array)=&gt;element*2)  </span></span>
<span class="line"><span style="color:#A6ACCD;">// 对每个元素乘以2，存储到新数组中，arr2=[2,4,6,8,10,12,14,16,18]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr3 = arr.filter((element,index,array)=&gt;element &gt; 5) </span></span>
<span class="line"><span style="color:#A6ACCD;">// 找出大于5的值，存储到新数组中，arr3=[6,7,8,9]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr4=arr.every((element,index,array)=&gt;element%2==0) </span></span>
<span class="line"><span style="color:#A6ACCD;">// 所有元素都是偶数吗？显然不是，arr4 = false</span></span>
<span class="line"><span style="color:#A6ACCD;">const arr5=arr.some((element,index,array)=&gt;element%2==0)  </span></span>
<span class="line"><span style="color:#A6ACCD;">// 存在元素是偶数吗？arr5=true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">arr.forEach((element,index,array)=&gt;element**2)  </span></span>
<span class="line"><span style="color:#A6ACCD;">// 直接修改原数组，对每个元素进行平方，arr=[1,4,9,16,25,36,49,64,81]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[l];function p(o,c,i,A,y,C){return n(),s("div",null,t)}const m=a(r,[["render",p]]);export{d as __pageData,m as default};
