(this["webpackJsonptodotada-app-frontend"]=this["webpackJsonptodotada-app-frontend"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),i=a.n(s),r=(a(14),a(1)),c=a(2),l=a(4),u=a(3),m=a(5),p=a(6),d=a.n(p),h=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("h2",null,this.props.header)}}]),t}(o.a.Component)),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={task:"",date:"2019-12-16"},a.updateTask=function(e){a.setState({task:e.target.value})},a.updateDate=function(e){a.setState({date:e.target.value})},a.addTask=function(){a.props.addNewTaskFunc(a.state.task,a.state.date),a.setState({task:"",date:"2019-12-16"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("form",null,o.a.createElement("fieldset",null,o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:this.updateTask,value:this.state.task,placeholder:"Enter your task here"}),o.a.createElement("input",{type:"date",name:"task-date",value:this.state.date,onChange:this.updateDate}),o.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm left-space",onClick:this.addTask},"Add"))))}}]),t}(o.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("p",{className:"title-message"},"You have ",this.props.count," tasks left to complete on your To Do list!")}}]),t}(o.a.Component),k=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDelete=function(){a.props.deleteTaskFunc(a.props.id)},a.changeComplete=function(){a.props.changeCompleteFunc(a.props.id)},a.promoteTask=function(){a.props.promoteTaskFunc(a.props.id)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("p",{className:"tooltipone"},this.props.task," ",o.a.createElement("span",{className:"tooltiptext"},this.props.date))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"btn-group",role:"group","aria-label":"To Do List Buttons"},o.a.createElement("button",{onClick:this.changeComplete,type:"button",className:"btn btn-outline-info btn-sm"},o.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),o.a.createElement("button",{onClick:this.handleDelete,type:"button",className:"btn btn-outline-info btn-sm"},o.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))))}}]),t}(o.a.Component)),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={inspirations:[{id:1,inspiration:"Life is a balance of holding on and letting go - Rumi"},{id:2,inspiration:"Laughter is the fireworks of the soul - Josh Billings"},{id:3,inspiration:"To appreciate the beauty of a snowflake it is necessary to stand out in the cold - Aristotle"},{id:4,inspiration:"You can cut all the flowers, but you cannot keep spring from coming - Pablo Neruda"},{id:5,inspiration:"To fall in love with yourself is the first secret to happiness - Robert Morley"},{id:6,inspiration:"You cannot serve from an empty vessel - Eleanor Brownn"}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.inspirations[Math.floor(Math.random()*this.state.inspirations.length)];return o.a.createElement("div",{className:"title-message"},e.inspiration)}}]),t}(o.a.Component),g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDelete=function(){a.props.deleteTaskFunc(a.props.id)},a.changeComplete=function(){a.props.changeCompleteFunc(a.props.id)},a.updateEmotion=function(e){a.props.updateEmotionFunc(a.props.id,e)},a.emotionClass=function(e){return e?"btn btn-outline-info btn-sm active":"btn btn-outline-info btn-sm"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5"},o.a.createElement("p",{className:"strikethrough"},this.props.taDaTask)),o.a.createElement("div",{className:"col-3"},o.a.createElement("div",{className:"btn-group","data-toggle":"buttons","aria-label":"Ta Da List Emoticon Buttons"},o.a.createElement("button",{type:"button",className:this.emotionClass("smile"===this.props.emotion),onClick:function(){return e.updateEmotion("smile")}},o.a.createElement("i",{className:"fa fa-smile-o","aria-hidden":"true"})),o.a.createElement("button",{type:"button",className:this.emotionClass("meh"===this.props.emotion),onClick:function(){return e.updateEmotion("meh")}},o.a.createElement("i",{className:"fa fa-meh-o","aria-hidden":"true"})),o.a.createElement("button",{type:"button",className:this.emotionClass("frown"===this.props.emotion),onClick:function(){return e.updateEmotion("frown")}},o.a.createElement("i",{className:"fa fa-frown-o","aria-hidden":"true"})))),o.a.createElement("div",{className:"col-4"},o.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Ta Da List Buttons"},o.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",onClick:this.changeComplete},o.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm",onClick:this.handleDelete},o.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})))))}}]),t}(o.a.Component),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[{id:d()(),task:"Task One",date:"2019-12-15",complete:!1,rating:0},{id:d()(),task:"Task Two",date:"2019-12-15",complete:!1,rating:0},{id:d()(),task:"Task Three",date:"2019-12-15",complete:!1,rating:0},{id:d()(),task:"Task X",date:"2019-12-15",complete:!0,rating:1},{id:d()(),task:"Task Y",date:"2019-12-15",complete:!0,rating:2,emotion:"meh"},{id:d()(),task:"Task Z",date:"2019-12-15",complete:!0,rating:3,emotion:"smile"}]},a.addTask=function(e,t){console.log(e,t);var n={id:d()(),task:e,date:t,complete:!1,rating:0},o=a.state.tasks.slice();o.push(n),a.setState({tasks:o})},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return console.log(t.id),t.id!==e}));console.log(t),a.setState({tasks:t})},a.changeComplete=function(e){var t=a.state.tasks.map((function(t){return console.log(t.id),t.id===e&&(t.complete=!t.complete),t}));console.log(t),a.setState({tasks:t})},a.updateEmotion=function(e,t){var n=a.state.tasks.map((function(a){return console.log(a.id),a.id===e&&(a.emotion=t),a}));console.log(n),a.setState({tasks:n})},a.promoteTask=function(e){},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(e){return!1===e.complete})),a=this.state.tasks.filter((function(e){return!0===e.complete}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-sm-6 ta-da"},o.a.createElement(h,{header:"To Do to Ta Da!"}),o.a.createElement(f,{addNewTaskFunc:this.addTask}),o.a.createElement(b,{count:t.length}),t.map((function(t){return o.a.createElement(k,{changeCompleteFunc:e.changeComplete,deleteTaskFunc:e.deleteTask,promoteTaskFunc:e.promoteTask,key:t.id,task:t.task,date:t.date,id:t.id})}))),o.a.createElement("div",{className:"col-12 col-sm-6 ta-da"},o.a.createElement(h,{header:"Ta Da!"}),o.a.createElement(E,null),a.map((function(t){return o.a.createElement(g,{changeCompleteFunc:e.changeComplete,deleteTaskFunc:e.deleteTask,updateEmotionFunc:e.updateEmotion,key:t.id,taDaTask:t.task,id:t.id,rating:t.rating,emotion:t.emotion})}))))))}}]),t}(o.a.Component);i.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.7cd4b52a.chunk.js.map