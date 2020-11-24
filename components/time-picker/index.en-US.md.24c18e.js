(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{3146:function(t,e){t.exports={content:["section",["p","By clicking the input box, you can select a time from a popup panel."]],meta:{category:"Components",type:"Data Entry",title:"TimePicker",cover:"https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg",filename:"components/time-picker/index.en-US.md"},description:["section",["p","To select/input a time."],["h2","When To Use"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Methods",title:"Methods"},"Methods"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["hr"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">'13:30:56'</span><span class="token punctuation">,</span> <span class="token string">'HH:mm:ss'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`import moment from 'moment';

<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;`]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","Whether allow clearing text"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","If get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","Whether has border style"],["td","boolean"],["td","true"],["td"]],["tr",["td","className"],["td","The className of picker"],["td","string"],["td","-"],["td"]],["tr",["td","clearIcon"],["td","The custom clear icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","clearText"],["td","The clear tooltip of icon"],["td","string"],["td","clear"],["td"]],["tr",["td","defaultValue"],["td","To set default time"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","disabled"],["td","Determine whether the TimePicker is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabledHours"],["td","To specify the hours that cannot be selected"],["td","function()"],["td","-"],["td"]],["tr",["td","disabledMinutes"],["td","To specify the minutes that cannot be selected"],["td","function(selectedHour)"],["td","-"],["td"]],["tr",["td","disabledSeconds"],["td","To specify the seconds that cannot be selected"],["td","function(selectedHour, selectedMinute)"],["td","-"],["td"]],["tr",["td","format"],["td","To set the time format"],["td","string"],["td",["code","HH:mm:ss"]],["td"]],["tr",["td","getPopupContainer"],["td","To set the container of the floating layer, while the default is to create a div element in body"],["td","function(trigger)"],["td","-"],["td"]],["tr",["td","hideDisabledOptions"],["td","Whether hide the options that can not be selected"],["td","boolean"],["td","false"],["td"]],["tr",["td","hourStep"],["td","Interval between hours in picker"],["td","number"],["td","1"],["td"]],["tr",["td","inputReadOnly"],["td","Set the ",["code","readonly"]," attribute of the input tag (avoids virtual keyboard on touch devices)"],["td","boolean"],["td","false"],["td"]],["tr",["td","minuteStep"],["td","Interval between minutes in picker"],["td","number"],["td","1"],["td"]],["tr",["td","open"],["td","Whether to popup panel"],["td","boolean"],["td","false"],["td"]],["tr",["td","placeholder"],["td","Display when there's no value"],["td","string ","|"," ","[","string, string]"],["td",["code","Select a time"]],["td"]],["tr",["td","popupClassName"],["td","The className of panel"],["td","string"],["td","-"],["td"]],["tr",["td","popupStyle"],["td","The style of panel"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","Called from time picker panel to render some addon to its bottom"],["td","() => ReactNode"],["td","-"],["td"]],["tr",["td","secondStep"],["td","Interval between seconds in picker"],["td","number"],["td","1"],["td"]],["tr",["td","showNow"],["td","Whether to show ",["code","Now"]," button on panel"],["td","boolean"],["td","-"],["td","4.4.0"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","use12Hours"],["td","Display as 12 hours format, with default format ",["code","h:mm:ss a"]],["td","boolean"],["td","false"],["td"]],["tr",["td","value"],["td","To set time"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"],["td"]],["tr",["td","onChange"],["td","A callback function, can be executed when the selected time is changing"],["td","function(time: moment, timeString: string): void"],["td","-"],["td"]],["tr",["td","onOpenChange"],["td","A callback function which will be called while panel opening/closing"],["td","(open: boolean) => void"],["td","-"],["td"]],["tr",["td","onSelect"],["td","A callback function, executes when a value is selected"],["td","function(time: moment): void"],["td","-"],["td"]]]],["h2","Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"],["td"]],["tr",["td","focus()"],["td","Get focus"],["td"]]]],["h3","RangePicker"],["p","Same props from ",["a",{title:null,href:"/components/date-picker/#RangePicker"},"RangePicker"]," of DatePicker. And includes additional props:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","order"],["td","Order start and end time"],["td","boolean"],["td","true"],["td","4.1.0"]]]],["style",`
.code-box-demo .ant-picker { margin: 0 8px 12px 0; }
.ant-row-rtl .code-box-demo .ant-picker { margin: 0 0 12px 8px; }
`],["h2","FAQ"],["ul",["li",["p",["a",{title:null,href:"/docs/react/replace-moment#TimePicker"},"How to use TimePicker with customize date library like dayjs"]]]]]}}}]);
