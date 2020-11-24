(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{3051:function(e,t){e.exports={content:["section",["p","24 Grids System."],["h2","Design concept"],["div",{class:"grid-demo"},["div",{class:"ant-row demo-row"},["div",{class:"ant-col-24 demo-col demo-col-1"},`
    100%
  `]],["div",{class:"ant-row demo-row"},["div",{class:"ant-col-6 demo-col demo-col-2"},`
    25%
  `],["div",{class:"ant-col-6 demo-col demo-col-3"},`
    25%
  `],["div",{class:"ant-col-6 demo-col demo-col-2"},`
    25%
  `],["div",{class:"ant-col-6 demo-col demo-col-3"},`
    25%
  `]],["div",{class:"ant-row demo-row"},["div",{class:"ant-col-8 demo-col demo-col-4"},`
    33.33%
  `],["div",{class:"ant-col-8 demo-col demo-col-5"},`
    33.33%
  `],["div",{class:"ant-col-8 demo-col demo-col-4"},`
    33.33%
  `]],["div",{class:"ant-row demo-row"},["div",{class:"ant-col-12 demo-col demo-col-1"},`
    50%
  `],["div",{class:"ant-col-12 demo-col demo-col-3"},`
    50%
  `]],["div",{class:"ant-row demo-row"},["div",{class:"ant-col-16 demo-col demo-col-4"},`
    66.66%
  `],["div",{class:"ant-col-8 demo-col demo-col-5"},`
    33.33%
  `]]],["p","In most business situations, Ant Design needs to solve a lot of information storage problems within the design area, so based on 12 Grids System, we divided the design area into 24 sections."],["p","We name the divided area 'box'. We suggest four boxes for horizontal arrangement at most, one at least. Boxes are proportional to the entire screen as shown in the picture above. To ensure a high level of visual comfort, we customize the typography inside of the box based on the box unit."],["h2","Outline"],["p","In the grid system, we define the frame outside the information area based on ",["code","row"]," and ",["code","column"],", to ensure that every area can have stable arrangement."],["p","Following is a brief look at how it works:"],["ul",["li",["p","Establish a set of ",["code","column"]," in the horizontal space defined by ",["code","row"]," (abbreviated col)."]],["li",["p","Your content elements should be placed directly in the ",["code","col"],", and only ",["code","col"]," should be placed directly in ",["code","row"],"."]],["li",["p","The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by ",["code","<Col span={8} />"],"."]],["li",["p","If the sum of ",["code","col"]," spans in a ",["code","row"]," are more than 24, then the overflowing ",["code","col"]," as a whole will start a new line arrangement."]]],["p","Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using ",["code","order"],"."],["p",'Layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.']],meta:{category:"Components",type:"Layout",cols:1,title:"Grid",cover:"https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg",filename:"components/grid/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Design-concept",title:"Design concept"},"Design concept"]],["li",["a",{className:"bisheng-toc-h2",href:"#Outline",title:"Outline"},"Outline"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:"],["ul",["li",["p",["a",{title:null,href:"http://roylee0704.github.io/react-flexbox-grid/"},"react-flexbox-grid"]]],["li",["p",["a",{title:null,href:"https://github.com/whoisandy/react-blocks/"},"react-blocks"]]]],["h3","Row"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","align"],["td","Vertical alignment"],["td",["code","top"]," ","|"," ",["code","middle"]," ","|"," ",["code","bottom"]],["td",["code","top"]],["td"]],["tr",["td","gutter"],["td","Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time ",["code","[horizontal, vertical]"]],["td","number ","|"," object ","|"," array"],["td","0"],["td"]],["tr",["td","justify"],["td","Horizontal arrangement"],["td",["code","start"]," ","|"," ",["code","end"]," ","|"," ",["code","center"]," ","|"," ",["code","space-around"]," ","|"," ",["code","space-between"]],["td",["code","start"]],["td"]],["tr",["td","wrap"],["td","Auto wrap line"],["td","boolean"],["td","true"],["td","4.8.0"]]]],["h3","Col"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","flex"],["td","Flex layout style"],["td","string ","|"," number"],["td","-"],["td"]],["tr",["td","offset"],["td","The number of cells to offset Col from the left"],["td","number"],["td","0"],["td"]],["tr",["td","order"],["td","Raster order"],["td","number"],["td","0"],["td"]],["tr",["td","pull"],["td","The number of cells that raster is moved to the left"],["td","number"],["td","0"],["td"]],["tr",["td","push"],["td","The number of cells that raster is moved to the right"],["td","number"],["td","0"],["td"]],["tr",["td","span"],["td","Raster number of cells to occupy, 0 corresponds to ",["code","display: none"]],["td","number"],["td","none"],["td"]],["tr",["td","xs"],["td",["code","screen < 576px"]," and also default setting, could be a ",["code","span"]," value or an object containing above props"],["td","number ","|"," object"],["td","-"],["td"]],["tr",["td","sm"],["td",["code","screen \u2265 576px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number ","|"," object"],["td","-"],["td"]],["tr",["td","md"],["td",["code","screen \u2265 768px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number ","|"," object"],["td","-"],["td"]],["tr",["td","lg"],["td",["code","screen \u2265 992px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number ","|"," object"],["td","-"],["td"]],["tr",["td","xl"],["td",["code","screen \u2265 1200px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number ","|"," object"],["td","-"],["td"]],["tr",["td","xxl"],["td",["code","screen \u2265 1600px"],", could be a ",["code","span"]," value or an object containing above props"],["td","number ","|"," object"],["td","-"],["td"]]]],["p","The breakpoints of responsive grid follow ",["a",{title:null,href:"https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints"},"BootStrap 4 media queries rules"]," (not including ",["code","occasionally part"],")."],["style",`
  [data-theme="dark"] #components-grid-demo-playground pre {
    background: rgba(255,255,255,0.8);
    color: rgba(255,255,255,.65);
  }
`]]}}}]);
