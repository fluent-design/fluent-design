(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{3150:function(n,s){n.exports={content:["section",["p","\u5782\u76F4\u5C55\u793A\u7684\u65F6\u95F4\u6D41\u4FE1\u606F\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u5F53\u6709\u4E00\u7CFB\u5217\u4FE1\u606F\u9700\u6309\u65F6\u95F4\u6392\u5217\u65F6\uFF0C\u53EF\u6B63\u5E8F\u548C\u5012\u5E8F\u3002"]],["li",["p","\u9700\u8981\u6709\u4E00\u6761\u65F6\u95F4\u8F74\u8FDB\u884C\u89C6\u89C9\u4E0A\u7684\u4E32\u8054\u65F6\u3002"]]]],meta:{category:"Components",subtitle:"\u65F6\u95F4\u8F74",type:"\u6570\u636E\u5C55\u793A",title:"Timeline",cover:"https://gw.alipayobjects.com/zos/antfincdn/vJmo00mmgR/Timeline.svg",filename:"components/timeline/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>\u521B\u5EFA\u670D\u52A1\u73B0\u573A <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>\u521D\u6B65\u6392\u9664\u7F51\u7EDC\u5F02\u5E38 <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>\u6280\u672F\u6D4B\u8BD5\u5F02\u5E38 <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>\u7F51\u7EDC\u5F02\u5E38\u6B63\u5728\u4FEE\u590D <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span>`},["code",`<Timeline>
  <Timeline.Item>\u521B\u5EFA\u670D\u52A1\u73B0\u573A 2015-09-01</Timeline.Item>
  <Timeline.Item>\u521D\u6B65\u6392\u9664\u7F51\u7EDC\u5F02\u5E38 2015-09-01</Timeline.Item>
  <Timeline.Item>\u6280\u672F\u6D4B\u8BD5\u5F02\u5E38 2015-09-01</Timeline.Item>
  <Timeline.Item>\u7F51\u7EDC\u5F02\u5E38\u6B63\u5728\u4FEE\u590D 2015-09-01</Timeline.Item>
</Timeline>`]],["h3","Timeline"],["p","\u65F6\u95F4\u8F74\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","mode"],["td","\u901A\u8FC7\u8BBE\u7F6E ",["code","mode"]," \u53EF\u4EE5\u6539\u53D8\u65F6\u95F4\u8F74\u548C\u5185\u5BB9\u7684\u76F8\u5BF9\u4F4D\u7F6E"],["td",["code","left"]," ","|"," ",["code","alternate"]," ","|"," ",["code","right"]],["td","-"]],["tr",["td","pending"],["td","\u6307\u5B9A\u6700\u540E\u4E00\u4E2A\u5E7D\u7075\u8282\u70B9\u662F\u5426\u5B58\u5728\u6216\u5185\u5BB9"],["td","boolean ","|"," ReactNode"],["td","false"]],["tr",["td","pendingDot"],["td","\u5F53\u6700\u540E\u4E00\u4E2A\u5E7D\u7075\u8282\u70B9\u5B58\u5728\u6642\uFF0C\u6307\u5B9A\u5176\u65F6\u95F4\u56FE\u70B9"],["td","ReactNode"],["td","<","LoadingOutlined />"]],["tr",["td","reverse"],["td","\u8282\u70B9\u6392\u5E8F"],["td","boolean"],["td","false"]]]],["h3","Timeline.Item"],["p","\u65F6\u95F4\u8F74\u7684\u6BCF\u4E00\u4E2A\u8282\u70B9\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","color"],["td","\u6307\u5B9A\u5706\u5708\u989C\u8272 ",["code","blue"],", ",["code","red"],", ",["code","green"],", ",["code","gray"],"\uFF0C\u6216\u81EA\u5B9A\u4E49\u7684\u8272\u503C"],["td","string"],["td",["code","blue"]]],["tr",["td","dot"],["td","\u81EA\u5B9A\u4E49\u65F6\u95F4\u8F74\u70B9"],["td","ReactNode"],["td","-"]],["tr",["td","label"],["td","\u8BBE\u7F6E\u6807\u7B7E"],["td","ReactNode"],["td","-"]],["tr",["td","position"],["td","\u81EA\u5B9A\u4E49\u8282\u70B9\u4F4D\u7F6E"],["td",["code","left"]," ","|"," ",["code","right"]],["td","-"]]]]]}}}]);
