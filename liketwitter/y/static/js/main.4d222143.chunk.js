(this.webpackJsonpliketwitter=this.webpackJsonpliketwitter||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a.n(c),i=(a(17),a(8)),s=a(7),o=a(3),u=a(4),m=a(1),h=a(6),p=a(5),b=(a(18),function(e){var t=e.postAmount,a=e.likedPost;return l.a.createElement("section",{className:"app-header d-flex"},l.a.createElement("h1",null,"Danil"),l.a.createElement("span",null,a," \u0417\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c \u0438\u0437 ",t))}),d=(a(19),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchText:""},n.setSearchText=n.setSearchText.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"setSearchText",value:function(e){var t=e.target.value;this.setState({searchText:t}),this.props.findPost(t)}},{key:"render",value:function(){return l.a.createElement("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",className:"form-control search-input",onChange:this.setSearchText,value:this.state.searchText})}}]),a}(n.Component)),f=(a(20),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={filter:n.props.filter},n.buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0435\u0441\u044f"}],n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var a=t.name,n=t.label;return l.a.createElement("button",{key:a,className:e.props.filter==a?"filter-btn btn btn-primary":"filter-btn btn btn-outline-primary",type:"button",onClick:function(){return e.props.filterPost(a)}},n)}));return l.a.createElement("div",{className:"btn-group"},t)}}]),a}(n.Component)),v=a(2),g=(a(21),function(e){var t,a=e.className,n=void 0===a?"star":a;return l.a.createElement("svg",(t={className:n,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg"},Object(v.a)(t,"xmlns",!0),Object(v.a)(t,"xlink","http://www.w3.org/1999/xlink"),Object(v.a)(t,"x","0px"),Object(v.a)(t,"y","0px"),Object(v.a)(t,"width","23.354px"),Object(v.a)(t,"height","23.354px"),Object(v.a)(t,"viewBox","0 0 46.354 46.354"),Object(v.a)(t,"style",{enableBackground:"new 0 0  46.354, 46.354"}),Object(v.a)(t,"xmlSpace","preserve"),t),l.a.createElement("g",null,l.a.createElement("path",{d:"M21.57,2.049c0.303-0.612,0.927-1,1.609-1c0.682,0,1.307,0.388,1.609,1l5.771,11.695c0.261,0.529,0.767,0.896,1.352,0.981\r L44.817,16.6c0.677,0.098,1.237,0.572,1.448,1.221c0.211,0.649,0.035,1.363-0.454,1.839l-9.338,9.104\r c-0.423,0.412-0.616,1.006-0.517,1.588l2.204,12.855c0.114,0.674-0.161,1.354-0.715,1.756c-0.553,0.4-1.284,0.453-1.89,0.137\r l-11.544-6.07c-0.522-0.275-1.147-0.275-1.67,0l-11.544,6.069c-0.604,0.317-1.337,0.265-1.89-0.136\r c-0.553-0.401-0.829-1.082-0.714-1.756l2.204-12.855c0.1-0.582-0.094-1.176-0.517-1.588L0.542,19.66\r c-0.489-0.477-0.665-1.19-0.454-1.839c0.211-0.649,0.772-1.123,1.449-1.221l12.908-1.875c0.584-0.085,1.09-0.452,1.351-0.982\r L21.57,2.049z"})),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null))}),E=function(){return l.a.createElement("svg",{className:"bin",height:"22.7px",viewBox:"-40 0 427 427.00131",width:"22.7px",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),l.a.createElement("path",{d:"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),l.a.createElement("path",{d:"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"}),l.a.createElement("path",{d:"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}))},k=function(e){var t=e.className;return l.a.createElement("svg",{className:t,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 391.837 391.837",style:{height:"22.7px",width:"22.7px",enableBackground:"new 0 0 391.837 391.837;"},space:"preserve"},l.a.createElement("g",null,l.a.createElement("path",{d:"M285.257,35.528c58.743,0.286,106.294,47.836,106.58,106.58\r c0,107.624-195.918,214.204-195.918,214.204S0,248.165,0,142.108c0-58.862,47.717-106.58,106.58-106.58l0,0\r c36.032-0.281,69.718,17.842,89.339,48.065C215.674,53.517,249.273,35.441,285.257,35.528z"})),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null),l.a.createElement("g",null))},x=(a(22),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.liked,n=e.important,c=e.deletePost,r=e.onLike,i=e.onFavirite,s="star",o="app-list-item d-flex justify-content-between";n&&(s+=" active-star",o+=" fav-border");var u="like";return a&&(u+=" show"),l.a.createElement("li",{className:o},l.a.createElement("p",{className:"app-list-item-label",onClick:r},t),l.a.createElement("p",{className:"d-flex justify-content-center align-items-center"},l.a.createElement("button",{className:"btn btn-sm",type:"button",onClick:c},l.a.createElement(E,null)),l.a.createElement("button",{className:"btn btn-sm",type:"button",onClick:i},l.a.createElement(g,{className:s})),l.a.createElement(k,{className:u})))}}]),a}(n.Component)),j=function(e){var t=e.posts,a=e.deletePost,n=e.onLike,c=e.onFavirite,r=t.map((function(e){var t=e.label,r=e.important,i=e.id,s=e.liked;return t?l.a.createElement(x,{label:t,important:r,liked:s,deletePost:function(){a(i)},onLike:function(){n(i)},onFavirite:function(){c(i)}}):void 0}));return l.a.createElement("ul",{className:"app-list list-group"},r)},O=(a(23),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={text:""},n.changeText=n.changeText.bind(Object(m.a)(n)),n.createPost=n.createPost.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"changeText",value:function(e){var t=e.target.value;this.setState((function(e){e.text;return{text:t}}))}},{key:"createPost",value:function(e){e.preventDefault(),""!=this.state.text?(this.props.addPost(this.state.text),this.setState({text:""})):console.log("\u041d\u0430\u043f\u0438\u0448\u0442\u0435 \u0442\u0435\u043a\u0441\u0442")}},{key:"render",value:function(){return l.a.createElement("form",{action:"#",className:"bottom-panel d-flex",onSubmit:this.createPost},l.a.createElement("input",{type:"text",name:"text",placeholder:"\u041e \u0447\u0451\u043c \u0432\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u0443\u043c\u0430\u0435\u0442\u0435",className:"form-control new-post-label",onChange:this.changeText,value:this.state.text}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),a}(n.Component)),y=a(9),w=a.n(y),P=(a(24),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).props=e,n.state={data:[{label:"Going to learning React",important:!0,id:"fgdfgdg",liked:!1,key:"xcvx"},{label:"Make my own project",important:!1,id:"xzcgvvz",liked:!1,key:"sfsf"},{label:"React is cool",important:!1,id:"rte3543",liked:!1,key:"retet"}],searchText:"",filter:"all"},n.deletePost=n.deletePost.bind(Object(m.a)(n)),n.addPost=n.addPost.bind(Object(m.a)(n)),n.onLike=n.onLike.bind(Object(m.a)(n)),n.onFavirite=n.onFavirite.bind(Object(m.a)(n)),n.setSearch=n.setSearch.bind(Object(m.a)(n)),n.setFilterPost=n.setFilterPost.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"deletePost",value:function(e){this.setState((function(t){var a=t.data;return console.log(e),{data:a.filter((function(t){return t.id!=e}))}}))}},{key:"addPost",value:function(e){var t={label:e,important:!1,id:w()("post-"),key:w()("post-key-"),liked:!1};this.setState((function(e){var a=e.data;return{data:[].concat(Object(s.a)(a),[t])}}))}},{key:"onLike",value:function(e){this.setState((function(t){var a=t.data,n=a.findIndex((function(t){return t.id==e})),l=a[n],c=Object(i.a)(Object(i.a)({},l),{},{liked:!l.liked});return{data:[].concat(Object(s.a)(a.slice(0,n)),[c],Object(s.a)(a.slice(n+1)))}}))}},{key:"onFavirite",value:function(e){this.setState((function(t){var a=t.data,n=a.findIndex((function(t){return t.id==e})),l=a[n],c=Object(i.a)(Object(i.a)({},l),{},{important:!l.important});return{data:[].concat(Object(s.a)(a.slice(0,n)),[c],Object(s.a)(a.slice(n+1)))}}))}},{key:"setSearch",value:function(e){this.setState({searchText:e})}},{key:"searchPost",value:function(e,t){return 0==t?e:e.filter((function(e){return e.label.indexOf(t)>-1}))}},{key:"filterPost",value:function(e,t){return"like"==t?e.filter((function(e){return e.liked})):e}},{key:"setFilterPost",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.searchText,n=e.filter,c=t.length,r=t.filter((function(e){return e.liked})).length,i=this.filterPost(this.searchPost(t,a),n);return l.a.createElement("main",{className:"app"},l.a.createElement(b,{postAmount:c,likedPost:r}),l.a.createElement("section",{className:"search-panel"},l.a.createElement(d,{findPost:this.setSearch}),l.a.createElement(f,{filter:this.state.filter,filterPost:this.setFilterPost})),l.a.createElement(j,{posts:i,deletePost:this.deletePost,onLike:this.onLike,onFavirite:this.onFavirite}),l.a.createElement(O,{addPost:this.addPost}))}}]),a}(n.Component));a(25);console.log(P),r.a.render(l.a.createElement(P,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.4d222143.chunk.js.map