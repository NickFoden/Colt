exports.ids=[7],exports.modules={29:function(t,e,r){var content=r(33);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(5).default;t.exports.__inject__=function(t){o("d6e754b4",content,!0,t)}},32:function(t,e,r){"use strict";r.r(e);var o=r(29),c=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=c.a},33:function(t,e,r){(e=r(4)(!1)).push([t.i,".project-card[data-v-56f68e02]{-webkit-transition:.25s cubic-bezier(.175,.885,.32,1.275);transition:.25s cubic-bezier(.175,.885,.32,1.275)}.project-card[data-v-56f68e02]:hover{-webkit-transform:scale(1.005);transform:scale(1.005)}",""]),t.exports=e},39:function(t,e,r){"use strict";r.r(e);var o=r(10),c={name:"ProjectCard",props:["posts"]},n=r(1);var l={name:"ProjectBoard",components:{ProjectCard:Object(n.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode(t._ssrList(t.posts,(function(e){return'<li class="project-card p-6 md:p-12 shadow-md hover:shadow-lg mb-8 cursor-pointer" data-v-56f68e02><a'+t._ssrAttr("href",e.url)+' data-v-56f68e02><h2 class="text-blue-dark text-xl mb-3" data-v-56f68e02>'+t._ssrEscape(t._s(e.title))+'</h2> <ul class="text-red list-none mb-3" data-v-56f68e02><li class="inline-block mr-2" data-v-56f68e02>'+t._ssrEscape(t._s(e.languages))+'</li></ul> <p class="text-blue-light" data-v-56f68e02>'+t._ssrEscape(t._s(e.description)+" ")+"</p></a></li>"})))])}),[],!1,(function(t){var e=r(32);e.__inject__&&e.__inject__(t)}),"56f68e02","7a15d82b").exports},data:()=>({posts:[]}),asyncData:async({params:t})=>({posts:(await o.a.collection("posts").where("active","==",!0).get()).docs.map(t=>{let e=t.data();return{title:e.title,description:e.description,difficulty:e.difficulty,languages:e.languages,url:e.url,active:e.active}})})},d=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto p-4 mt-12"},[this._ssrNode('<div class="flex justify-between mb-8">',"</div>",[this._ssrNode('<h1 class="text-2xl lg:text-3xl text-red">Available Projects</h1> '),this._ssrNode('<button class="bg-red px-2 text-xs shadow-md hover:shadow-lg">',"</button>",[e("nuxt-link",{staticClass:"text-white font-bold",attrs:{to:"/addproject"}},[this._v("Add a Project\n      ")])],1)],2),this._ssrNode(" "),this._ssrNode("<ul>","</ul>",[e("project-card",{staticClass:"mx-auto",attrs:{posts:this.posts}})],1)],2)}),[],!1,null,null,"1050fd53");e.default=d.exports}};