(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237571"],{fb65:function(i,a,e){"use strict";e.r(a);var t=function(){var i=this,a=i._self._c;return a("div",[a("h1",{staticClass:"mb-0"},[i._v("Sign Up")]),a("p",[i._v("Enter your email address and password to access admin panel.")]),a("ClinicSignUpForm")],1)},l=[],s=function(){var i=this,a=i._self._c;return a("ValidationObserver",{ref:"form",scopedSlots:i._u([{key:"default",fn:function({handleSubmit:e}){return[a("form",{staticClass:"mt-4",on:{submit:function(a){return a.preventDefault(),e(i.onSubmit)}}},[a("ValidationProvider",{attrs:{vid:"name",name:"Full Name",rules:"required|fullName"},scopedSlots:i._u([{key:"default",fn:function({errors:e}){return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[i._v("Your Full Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:i.user.name,expression:"user.name"}],class:"form-control mb-0"+(e.length>0?" is-invalid":""),attrs:{type:"text",id:"name","aria-describedby":"emailHelp",placeholder:"Your Full Name"},domProps:{value:i.user.name},on:{input:function(a){a.target.composing||i.$set(i.user,"name",a.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[a("span",[i._v(i._s(e[0]))])])])]}}],null,!0)}),a("ValidationProvider",{attrs:{vid:"name",name:"Email",rules:"required|email|userEmailAvailable"},scopedSlots:i._u([{key:"default",fn:function({errors:e}){return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[i._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:i.user.email,expression:"user.email"}],class:"form-control mb-0"+(e.length>0?" is-invalid":""),attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:i.user.email},on:{input:function(a){a.target.composing||i.$set(i.user,"email",a.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[a("span",[i._v(i._s(e[0]))])])])]}}],null,!0)}),a("ValidationProvider",{attrs:{vid:"name",name:"clinic alias",rules:"required|maxcaracters"},scopedSlots:i._u([{key:"default",fn:function({errors:e}){return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"text"}},[i._v("Alias to Access Clinic ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:i.clinicAlias,expression:"clinicAlias"}],class:"controllllll form-control mb-0"+(e.length>0?" is-invalid":""),attrs:{type:"text",id:"clinicalias",placeholder:"Your Clinic Alias"},domProps:{value:i.clinicAlias},on:{input:function(a){a.target.composing||(i.clinicAlias=a.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[a("span",[i._v(i._s(e[0]))])])])]}}],null,!0)}),a("div",{staticClass:"d-inline-block w-100"},[a("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[i._v("Next")])]),a("div",{staticClass:"sign-info"},[a("span",{staticClass:"dark-color d-inline-block line-height-2"},[i._v(" Already Have Account ? "),i.$route.meta.dark?a("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/dark/auth/sign-in1"}},[i._v(" Sign in ")]):a("router-link",{staticClass:"iq-waves-effect pr-4",attrs:{to:"/auth/sign-in1"}},[i._v(" Sign in ")])],1),a("social-login-form")],1)],1)]}}])})},n=[],o=e("1363"),r=e("2f62"),c=e("8925"),u={name:"SignUp1Form",components:{SocialLoginForm:o["a"]},computed:{...Object(r["c"])({users:"Setting/usersState"})},data:()=>({host:window.location.hostname+(""!==window.location.port?":"+window.location.port:""),protocol:window.location.protocol,clinicAlias:"",user:{name:"",email:""},isValid:null}),mounted(){console.log(window.location)},methods:{onSubmit(){let i="/auth/details-clinic-sign-up",a=`?fullName=${this.user.name}&email=${this.user.email}&alias=${this.clinicAlias}`,e=this.protocol+"//"+this.host+i+a;window.location.href=e},async find(){let i=await c["a"].findByAlias(this.clinicAlias);200===i.status?this.isValid=!0:this.isValid=!1}}},d=u,m=e("2877"),p=Object(m["a"])(d,s,n,!1,null,null,null),v=p.exports,f=e("b0af"),h=e("358c"),b={name:"SignUp1",components:{ClinicSignUpForm:v},data:()=>({}),methods:{loginOAuth0(){new f["a"].WebAuth(h["a"].auth0Config).authorize()}}},g=b,w=Object(m["a"])(g,t,l,!1,null,null,null);a["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d237571.3aac97c7.js.map