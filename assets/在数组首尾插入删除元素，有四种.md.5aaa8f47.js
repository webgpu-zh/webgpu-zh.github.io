import{_ as s,c as a,o as n,a as l}from"./app.4a2ec065.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"在数组首尾插入删除元素，有四种.md"}'),p={name:"在数组首尾插入删除元素，有四种.md"},e=l(`<h4 id="在数组首尾增加-删除元素" tabindex="-1">在数组首尾增加/删除元素 <a class="header-anchor" href="#在数组首尾增加-删除元素" aria-hidden="true">#</a></h4><p>要在数组首尾插入/删除元素，有四种情况：</p><ul><li>push() :在数组尾部增加任意数量的元素，并选择性返回数组的新长度。</li><li>pop(): 删除数组的最后一项，并选择性返回刚刚删除的最后一项。</li><li>shift() :删除数组的第一项，并选择性返回刚刚删除的第一项。</li><li>unshift():在数组开头添加任意数量的元素，并选择性返回数组的新长度。 上述&quot;选择性返回&quot;的意思是可以接收返回值，也可以不接收。例如：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr1 = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr1.push(4)  // 不接收返回值，此时arr1=[1,2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const arr2 = [4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr.push(7))  // 4 ，接收返回值，返回数组的新长度，此时arr2 = [4,5,6,7]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>对数组的首尾进行增减元素的示例如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">const arr =[2,3]  </span></span>
<span class="line"><span style="color:#A6ACCD;">arr.push(4)  // 在尾部压入一个新元素，此时arr = [2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.push(5,6,7)  // 在尾部一次性压入3个新元素，此时arr=[2,3,4,5,6,7]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.pop()   // 从尾部弹出最后一个元素，此时 arr = [2,3,4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.unshift(1)  //从首部压入一个新元素，此时arr= [1,2,3,4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.unshift(-3,-2,-1,0)  // 在首部一次性压入4个新元素，此时 arr= [-3,-2,-1,0,1,2,3,4,5,6]，注意压入的顺序</span></span>
<span class="line"><span style="color:#A6ACCD;">arr.shift()  // 从首部弹出第一个元素，此时arr =[-2,-1,0,1,2,3,4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(arr) // [-2,-1,0,1,2,3,4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),r=[e];function o(t,c,i,_,C,A){return n(),a("div",null,r)}const u=s(p,[["render",o]]);export{h as __pageData,u as default};
