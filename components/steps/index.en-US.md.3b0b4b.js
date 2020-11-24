(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{3131:function(t,e){t.exports={content:["section",["p",["code","Steps"]," is a navigation bar that guides users through the steps of a task."],["h2","When To Use"],["p","When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier."]],meta:{category:"Components",type:"Navigation",cols:1,title:"Steps",cover:"https://gw.alipayobjects.com/zos/antfincdn/UZYqMizXHaj/Steps.svg",filename:"components/steps/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Steps</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first</span> <span class="token attr-name">step"</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>second</span> <span class="token attr-name">step"</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Step</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>third</span> <span class="token attr-name">step"</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Steps</span><span class="token punctuation">></span></span>`},["code",`<Steps>
  <Step title="first step" />
  <Step title="second step" />
  <Step title="third step" />
</Steps>`]],["h3","Steps"],["p","The whole of the step bar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","className"],["td","Additional class to Steps"],["td","string"],["td","-"],["td"]],["tr",["td","current"],["td","To set the current step, counting from 0. You can overwrite this state by using ",["code","status"]," of ",["code","Step"]],["td","number"],["td","0"],["td"]],["tr",["td","direction"],["td","To specify the direction of the step bar, ",["code","horizontal"]," or ",["code","vertical"]],["td","string"],["td",["code","horizontal"]],["td"]],["tr",["td","initial"],["td","Set the initial step, counting from 0"],["td","number"],["td","0"],["td"]],["tr",["td","labelPlacement"],["td","Place title and description with ",["code","horizontal"]," or ",["code","vertical"]," direction"],["td","string"],["td",["code","horizontal"]],["td"]],["tr",["td","percent"],["td","Progress circle percentage of current step in ",["code","process"]," status (only works on basic Steps)"],["td","number"],["td","-"],["td","4.5.0"]],["tr",["td","progressDot"],["td","Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be ",["code","vertical"]],["td","boolean ","|"," (iconDot, {index, status, title, description}) => ReactNode"],["td","false"],["td"]],["tr",["td","size"],["td","To specify the size of the step bar, ",["code","default"]," and ",["code","small"]," are currently supported"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","status"],["td","To specify the status of current step, can be set to one of the following values: ",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","string"],["td",["code","process"]],["td"]],["tr",["td","type"],["td","Type of steps, can be set to one of the following values: ",["code","default"],", ",["code","navigation"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","onChange"],["td","Trigger when Step is changed"],["td","(current) => void"],["td","-"],["td"]]]],["h3","Steps.Step"],["p","A single step in the step bar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","description"],["td","Description of the step, optional property"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","disabled"],["td","Disable click"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","Icon of the step, optional property"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","status"],["td","To specify the status. It will be automatically set by ",["code","current"]," of ",["code","Steps"]," if not configured. Optional values are: ",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","string"],["td",["code","wait"]],["td"]],["tr",["td","subTitle"],["td","Subtitle of the step"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","title"],["td","Title of the step"],["td","ReactNode"],["td","-"],["td"]]]]]}}}]);
