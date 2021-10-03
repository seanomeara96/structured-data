(this["webpackJsonpstructured-data"]=this["webpackJsonpstructured-data"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(12),s=n.n(a),r=(n(18),n(11)),c=n(2),o=n(3),d=n(4),l=n(6),u=n(5),p=(n(19),n(7)),m=n(0),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[this.props.itemList.map((function(t){var n=t.id,i=t.type,a=t.name,s=t.itemUrl,r=t.imgUrl,c=t.imgAlt;return Object(m.jsx)(v,{id:n,type:i,name:a,itemUrl:s,imgUrl:r,imgAlt:c,removeItem:e.props.removeItem,updateItem:e.props.updateItem},n)})),Object(m.jsx)("i",{className:"ui button",onClick:this.props.addItem,children:"Add Item"})]})}}]),n}(i.Component);function v(e){return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Item Type"}),Object(m.jsxs)("select",{id:"type",onChange:function(t){return e.updateItem(e.id,{type:t.target.value})},value:e.type,name:"item-type",children:[Object(m.jsx)("option",{value:"tool",children:"Tool"}),Object(m.jsx)("option",{value:"supply",children:"Supply"})]}),Object(m.jsx)("label",{children:"Item Name"}),Object(m.jsx)("input",{id:"name",name:"name",onChange:function(t){return e.updateItem(e.id,{name:t.target.value})},value:e.name,type:"text",required:!0,placeholder:"Item Name"}),Object(m.jsx)("label",{children:"Item Url"}),Object(m.jsx)("input",{id:"itemUrl",placeholder:"Link to item where possible",name:"item-url",value:e.itemUrl,onChange:function(t){return e.updateItem(e.id,{itemUrl:t.target.value})},type:"text"}),Object(m.jsx)("label",{children:"Item Img Url"}),Object(m.jsx)("input",{id:"imgUrl",name:"image-url",value:e.imgUrl,onChange:function(t){return e.updateItem(e.id,{imgUrl:t.target.value})},type:"text"}),Object(m.jsx)("label",{children:"Item Img Alt text"}),Object(m.jsx)("input",{id:"image-alt",name:"image-alt",value:e.imgAlt,onChange:function(t){return e.updateItem(e.id,{imgAlt:t.target.value})},type:"text"}),Object(m.jsx)("i",{className:"ui button",onClick:function(){e.removeItem(e.id)},children:"Remove This Item"})]})}function j(e){return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Estimated Cost"}),Object(m.jsx)("input",{type:"text",name:"estimated-cost",placeholder:"Estimated Cost",onChange:function(t){e.updateHandler(t.target.value)},value:e.value})]})}function g(e){return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Estimated Time"}),Object(m.jsxs)("select",{onChange:function(t){e.intervalUpdateHandler(t.target.value)},value:e.intervalValue,id:"estimated-time-interval",name:"estimated-time-interval",children:[Object(m.jsx)("option",{value:"minutes",children:"Minutes"}),Object(m.jsx)("option",{value:"hours",children:"Hours"})]}),Object(m.jsx)("input",{placeholder:"Estimated Time",type:"text",name:"estimated-time-duration",id:"estimated-time-duration",onChange:function(t){return e.durationUpdateHandler(t.target.value)},value:e.durationValue})]})}function b(e){var t=e.children,n=e.clickHandler;return Object(m.jsx)("i",{onClick:n,className:"ui button",children:t})}var f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{style:{height:"100%",width:"100%",padding:"2rem",boxSizing:"border-box"},children:Object(m.jsxs)("form",{className:"ui form",children:[Object(m.jsx)(j,{updateHandler:this.props.updateEstimatedCost,value:this.props.fields.estimatedCost}),Object(m.jsx)(g,{intervalUpdateHandler:this.props.updateEstimatedTimeInterval,durationUpdateHandler:this.props.updateEstimatedTimeDuration,intervalValue:this.props.fields.estimatedTimeInterval,durationValue:this.props.fields.estimatedTimeDuration}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Necessary Items:"}),this.props.fields.includesNecessaryItems?Object(m.jsx)(h,{addItem:this.props.addNecessity,removeItem:this.props.removeNecessity,updateItem:this.props.updateNecessity,itemList:this.props.fields.necessities,changeHandler:this.props.updateNecessities}):Object(m.jsx)(b,{clickHandler:this.props.includeNecessaryItems,children:"Include Tools & Materials"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Steps"}),this.props.fields.includesSteps?Object(m.jsx)(x,{steps:this.props.fields.steps,addStep:this.props.addStep,updateStepTextInput:this.props.updateStepTextInput,addNewDirection:this.props.addNewDirection,updateDirection:this.props.updateDirection,removeDirection:this.props.removeDirection}):Object(m.jsx)(b,{clickHandler:this.props.includeSteps,children:"Include Steps"})]})]})})}}]),n}(i.Component);function x(e){return Object(m.jsxs)("div",{children:[e.steps.map((function(t){var n;return Object(m.jsx)(O,(n={updateStepTextInput:e.updateStepTextInput,updateStepUrl:e.updateStepUrl,addDirection:e.addDirection,updateDirections:e.updateDirections,addNewDirection:e.addNewDirection,removeDirection:e.removeDirection,updateDirection:e.updateDirection},Object(p.a)(n,"removeDirection",e.removeDirection),Object(p.a)(n,"step",t),n),t.id)})),Object(m.jsx)(b,{clickHandler:e.addStep,children:"Add Step"})]})}function O(e){var t=e.step,n=t.id,i=t.name,a=t.rank,s=t.url,r=t.directions,c=t.imgSrc,o=t.imgAlt;return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("h3",{children:"Step ".concat(a+1)}),Object(m.jsx)("label",{children:"Step Title"}),Object(m.jsx)("input",{type:"text",name:"name",value:i,onChange:function(t){var i=t.target;return e.updateStepTextInput(n,i.name,i.value)},placeholder:"Step Title"}),Object(m.jsx)("label",{children:"Step URL"}),Object(m.jsx)("input",{type:"text",name:"url",onChange:function(t){var i=t.target;return e.updateStepTextInput(n,i.name,i.value)},placeholder:"Step URL",value:s}),Object(m.jsx)("label",{children:"Image Src"}),Object(m.jsx)("input",{type:"text",name:"imgSrc",value:c,onChange:function(t){var i=t.target;return e.updateStepTextInput(n,i.name,i.value)}}),Object(m.jsx)("label",{children:"Img Alt"}),Object(m.jsx)("input",{type:"text",name:"imgAlt",value:o,onChange:function(t){var i=t.target;return e.updateStepTextInput(n,i.name,i.value)}}),Object(m.jsx)("label",{children:"Directions"}),r.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("textarea",{id:t.id,value:t.contemt,onChange:function(i){e.updateDirection(n,t.id,i.target.value)}}),Object(m.jsx)(b,{clickHandler:function(){return e.removeDirection(n,t.id)},children:"Remove Direction"})]})})),Object(m.jsx)(b,{clickHandler:function(){return e.addNewDirection(n)},children:"Add Direction"})]})}var y=n(13);function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return'<div itemscope itemtype="https://schema.org/HowTo">'.concat(e.join("\n"),"\n  </div>")}function S(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(i){console.error("Fallback: Oops, unable to copy",i)}document.body.removeChild(t)}(e)}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.length?'<img itemprop="image" alt="'.concat(t,'" src="').concat(e,'"/>'):""}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length?'<div itemprop="name">'.concat(e,"</div>"):""}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.length?t.length?'<a itemprop="url" href="'.concat(e,'">').concat(t,"</a>"):'<link itemprop="url" href="'.concat(e,'" />'):""}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length?'<div itemprop="itemListElement" itemscope itemtype="https://schema.org/HowToDirection">\n    <div itemprop="text">'.concat(e,"</div>\n  </div>"):""}function w(e){var t=e.fields,n=[];if(t.estimatedCost&&n.push(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e?'<div>About <span itemprop="estimatedCost" itemscope itemtype="https://schema.org/MonetaryAmount">\n    <meta itemprop="currency" content="EUR"/>\n    <meta itemprop="value" content="cost"/>\n    \u20ac'.concat(e,"\n  </span>\n  </div>"):""}(t.estimatedCost)),t.estimatedTimeInterval&&t.estimatedTimeDuration&&n.push(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"minutes",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t?'<div>About <span itemprop="totalTime" content="PT'.concat(t).concat("hours"===e?"H":"M",'">').concat(t," ").concat(e,"</span></div>"):""}(t.estimatedTimeInterval,t.estimatedTimeDuration)),t.necessities.length&&t.necessities.forEach((function(e){var t=e.name,i=e.type,a=e.itemUrl,s=e.imgUrl,r=e.imgAlt;"tool"===i?n.push(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";console.log(n);var a=D(e);return'<div itemprop="tool" itemscope itemtype="https://schema.org/HowToTool">\n    '.concat(t.length?C(t,a):a,"\n    ").concat(n.length?T(n,i):"","\n  </div>")}(t,a,s,r)):"supply"===i?n.push(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=D(e);return'<div itemprop="supply" itemscope itemtype="https://schema.org/HowToSupply">\n   '.concat(t.length?C(t,a):a,"\n   ").concat(n.length?T(n,i):"","\n  </div>")}(t,a,s,r)):console.log("something gone wrong in output.js")})),t.steps.length){var a=1;t.steps.forEach((function(e){n.push(function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return'<div id="step-'.concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,'" itemprop="step" itemscope itemtype="https://schema.org/HowToStep">\n    ').concat(t.length?C(t):"","\n    ").concat(e.length?D(e):"","\n    ").concat(i.length?T(i,a):"","\n    ").concat(n.map((function(e){return N(e.content)})).join("\n"),"\n  </div>")}(a,e.name,e.url,e.directions)),a++}))}var s=Object(i.useState)("lightblue"),r=Object(y.a)(s,2),c=r[0],o=r[1];return Object(m.jsx)("div",{style:{height:"100%",width:"100%",padding:"2rem",boxSizing:"border-box",backgroundColor:c,cursor:"pointer"},onClick:function(e){S(e.target.innerText)},onMouseDown:function(){o("blue")},onMouseUp:function(){o("lightblue")},children:I(n)})}var U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={estimatedTimeInterval:"minutes",estimatedTimeDuration:"",estimatedCost:"",necessities:[],steps:[],includesNecessaryItems:!1,includesSteps:!1},e.updateEstimatedCost=function(t){return e.setState({estimatedCost:t})},e.updateEstimatedTimeDuration=function(t){return e.setState({estimatedTimeDuration:t})},e.updateEstimatedTimeInterval=function(t){return e.setState({estimatedTimeInterval:t})},e.updateNecessities=function(t){return e.setState({necessities:t})},e.includeNecessaryItems=function(){return e.setState({includesNecessaryItems:!0})},e.includeSteps=function(){return e.setState({includesSteps:!0})},e.updateNecessity=function(t,n){var i=Object(c.a)(e.state.necessities),a=i.findIndex((function(e){return e.id===t}));i[a]=Object(r.a)(Object(r.a)({},i[a]),n),e.setState({necessities:i})},e.removeNecessity=function(t){e.setState({necessities:e.state.necessities.filter((function(e){return e.id!==t}))})},e.addNecessity=function(){e.setState({necessities:[].concat(Object(c.a)(e.state.necessities),[{id:"tool-supply"+parseInt(1e3*Math.random()),type:"tool",name:"",itemUrl:"",imgUrl:"",imgAlt:""}])})},e.newDirection=function(){return{id:"direction-id"+parseInt(1e3*Math.random()),content:""}},e.addNewDirection=function(t){var n=Object(c.a)(e.state.steps);n.find((function(e){return e.id===t})).directions.push(e.newDirection()),e.setState({steps:n})},e.addStep=function(){var t={id:"step-id"+parseInt(1e3*Math.random()),rank:e.state.steps.length,name:"",url:"",imgSrc:"",imgAlt:"",directions:[e.newDirection()]};e.setState({steps:[].concat(Object(c.a)(e.state.steps),[t])})},e.updateStepTextInput=function(t,n,i){var a=Object(c.a)(e.state.steps),s=a.findIndex((function(e){return e.id===t}));a[s][n]=i,e.setState({steps:a})},e.updateDirection=function(t,n,i){var a=Object(c.a)(e.state.steps);a.find((function(e){return e.id===t})).directions.find((function(e){return e.id===n})).content=i,e.setState({steps:a})},e.removeDirection=function(t,n){var i=Object(c.a)(e.state.steps),a=i.find((function(e){return e.id===t})),s=a.directions.filter((function(e){return e.id!==n}));a.directions=s,e.setState({steps:i})},e}return Object(d.a)(n,[{key:"render",value:function(){return console.log("app state",this.state),Object(m.jsxs)("div",{style:{display:"flex",width:"100%",height:"100%"},children:[Object(m.jsx)("div",{style:{width:"50%",height:"100%"},children:Object(m.jsx)(f,{fields:this.state,updateEstimatedCost:this.updateEstimatedCost,updateEstimatedTimeDuration:this.updateEstimatedTimeDuration,updateEstimatedTimeInterval:this.updateEstimatedTimeInterval,updateNecessities:this.updateNecessities,includeNecessaryItems:this.includeNecessaryItems,addNecessity:this.addNecessity,updateNecessity:this.updateNecessity,removeNecessity:this.removeNecessity,includeSteps:this.includeSteps,addStep:this.addStep,addNewDirection:this.addNewDirection,updateStepTextInput:this.updateStepTextInput,updateDirection:this.updateDirection,removeDirection:this.removeDirection})}),Object(m.jsx)("div",{style:{width:"50%",height:"100%"},children:Object(m.jsx)(w,{fields:this.state})})]})}}]),n}(i.Component),k=U;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};s.a.render(Object(m.jsx)(k,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()}},[[21,1,2]]]);
//# sourceMappingURL=main.4a7b4c41.chunk.js.map