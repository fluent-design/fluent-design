(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{3153:function(t,o){t.exports={content:["section",["p","\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u9F20\u6807\u79FB\u5165\u5219\u663E\u793A\u63D0\u793A\uFF0C\u79FB\u51FA\u6D88\u5931\uFF0C\u6C14\u6CE1\u6D6E\u5C42\u4E0D\u627F\u8F7D\u590D\u6742\u6587\u672C\u548C\u64CD\u4F5C\u3002"],["p","\u53EF\u7528\u6765\u4EE3\u66FF\u7CFB\u7EDF\u9ED8\u8BA4\u7684 ",["code","title"]," \u63D0\u793A\uFF0C\u63D0\u4F9B\u4E00\u4E2A ",["code","\u6309\u94AE/\u6587\u5B57/\u64CD\u4F5C"]," \u7684\u6587\u6848\u89E3\u91CA\u3002"]],meta:{category:"Components",subtitle:"\u6587\u5B57\u63D0\u793A",type:"\u6570\u636E\u5C55\u793A",title:"Tooltip",cover:"https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg",filename:"components/tooltip/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6CE8\u610F",title:"\u6CE8\u610F"},"\u6CE8\u610F"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","title"],["td","\u63D0\u793A\u6587\u5B57"],["td","ReactNode ","|"," () => ReactNode"],["td","-"]]]],["h3","\u5171\u540C\u7684 API"],["p","\u4EE5\u4E0B API \u4E3A Tooltip\u3001Popconfirm\u3001Popover \u5171\u4EAB\u7684 API\u3002"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","align"],["td","\u8BE5\u503C\u5C06\u5408\u5E76\u5230 placement \u7684\u914D\u7F6E\u4E2D\uFF0C\u8BBE\u7F6E\u53C2\u8003 ",["a",{title:null,href:"https://github.com/react-component/tooltip"},"rc-tooltip"]],["td","object"],["td","-"],["td"]],["tr",["td","arrowPointAtCenter"],["td","\u7BAD\u5934\u662F\u5426\u6307\u5411\u76EE\u6807\u5143\u7D20\u4E2D\u5FC3"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoAdjustOverflow"],["td","\u6C14\u6CE1\u88AB\u906E\u6321\u65F6\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E"],["td","boolean"],["td","true"],["td"]],["tr",["td","color"],["td","\u80CC\u666F\u989C\u8272"],["td","string"],["td","-"],["td","4.3.0"]],["tr",["td","defaultVisible"],["td","\u9ED8\u8BA4\u662F\u5426\u663E\u9690"],["td","boolean"],["td","false"],["td"]],["tr",["td","destroyTooltipOnHide"],["td","\u5173\u95ED\u540E\u662F\u5426\u9500\u6BC1 Tooltip\uFF0C\u5F53 ",["code","keepParent"]," \u4E3A ",["code","false"]," \u65F6\u9500\u6BC1\u7236\u5BB9\u5668"],["td","boolean ","|"," { keepParent?: boolean }"],["td","false"],["td"]],["tr",["td","getPopupContainer"],["td","\u6D6E\u5C42\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A"],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","mouseEnterDelay"],["td","\u9F20\u6807\u79FB\u5165\u540E\u5EF6\u65F6\u591A\u5C11\u624D\u663E\u793A Tooltip\uFF0C\u5355\u4F4D\uFF1A\u79D2"],["td","number"],["td","0.1"],["td"]],["tr",["td","mouseLeaveDelay"],["td","\u9F20\u6807\u79FB\u51FA\u540E\u5EF6\u65F6\u591A\u5C11\u624D\u9690\u85CF Tooltip\uFF0C\u5355\u4F4D\uFF1A\u79D2"],["td","number"],["td","0.1"],["td"]],["tr",["td","overlayClassName"],["td","\u5361\u7247\u7C7B\u540D"],["td","string"],["td","-"],["td"]],["tr",["td","overlayStyle"],["td","\u5361\u7247\u6837\u5F0F"],["td","object"],["td","-"],["td"]],["tr",["td","placement"],["td","\u6C14\u6CE1\u6846\u4F4D\u7F6E\uFF0C\u53EF\u9009 ",["code","top"]," ",["code","left"]," ",["code","right"]," ",["code","bottom"]," ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","leftTop"]," ",["code","leftBottom"]," ",["code","rightTop"]," ",["code","rightBottom"]],["td","string"],["td",["code","top"]],["td"]],["tr",["td","trigger"],["td","\u89E6\u53D1\u884C\u4E3A\uFF0C\u53EF\u9009 ",["code","hover"]," ","|"," ",["code","focus"]," ","|"," ",["code","click"]," ","|"," ",["code","contextMenu"],"\uFF0C\u53EF\u4F7F\u7528\u6570\u7EC4\u8BBE\u7F6E\u591A\u4E2A\u89E6\u53D1\u884C\u4E3A"],["td","string ","|"," string","[","]"],["td",["code","hover"]],["td"]],["tr",["td","visible"],["td","\u7528\u4E8E\u624B\u52A8\u63A7\u5236\u6D6E\u5C42\u663E\u9690"],["td","boolean"],["td","false"],["td"]],["tr",["td","onVisibleChange"],["td","\u663E\u793A\u9690\u85CF\u7684\u56DE\u8C03"],["td","(visible) => void"],["td","-"],["td"]]]],["h2","\u6CE8\u610F"],["p","\u8BF7\u786E\u4FDD ",["code","Tooltip"]," \u7684\u5B50\u5143\u7D20\u80FD\u63A5\u53D7 ",["code","onMouseEnter"],"\u3001",["code","onMouseLeave"],"\u3001",["code","onFocus"],"\u3001",["code","onClick"]," \u4E8B\u4EF6\u3002"]]}}}]);
