(self.webpackChunkhello_blog=self.webpackChunkhello_blog||[]).push([[882],{96834:(t,e)=>{"use strict";Object.defineProperty(e,"X",{value:!0}),e.Z={computed:{getTags:function(){return this.$store.state.app.tagViews.filter((function(t){return"/article/edit"!==t.path})).slice(-6)}},watch:{$route:function(){this.addTagView()}},mounted:function(){this.getIsActive()},methods:{getIsActive:function(t){if(t)return t.path===this.$route.path},closeTagView:function(t,e){this.$store.dispatch("delTagView",t),e.preventDefault()},generateRoute:function(){return this.$route.matched[this.$route.matched.length-1].name?this.$route.matched[this.$route.matched.length-1]:this.$route.matched[0]},addTagView:function(){this.$store.dispatch("addTagView",this.generateRoute())}}}},64604:(t,e,a)=>{(t.exports=a(9252)(!1)).push([t.id,"/**\n * 变量样式\n */\n.tab-view[data-v-5840a000] {\n  margin-left: 10px;\n}\n",""])},42882:(t,e,a)=>{"use strict";a.r(e),a.d(e,{__esModule:()=>s.X,default:()=>i});var s=a(96834);const n=s.Z;a(6784);const i=(0,a(51900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-wwrapper"},t._l(t.getTags,(function(e){return a("router-link",{key:e.name,staticClass:"tab-view",attrs:{to:e.path}},[a("el-tag",{attrs:{size:"small",closable:"",type:t.getIsActive(e)?"":"info"},on:{close:function(a){return t.closeTagView(e,a)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),1)}),[],!1,null,"5840a000",null).exports},6784:(t,e,a)=>{var s=a(64604);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,a(45346).Z)("2d2f2aec",s,!0,{})}}]);