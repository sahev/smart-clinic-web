(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d2cc8ee"],{"2a35":function(t,a,e){t.exports=e.p+"img/11.e1221930.png"},"376c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("b-container",{attrs:{fluid:""}},[a("form",[a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("iq-card",{attrs:{"body-class":"p-0"},scopedSlots:t._u([{key:"body",fn:function(){return[a("div",{staticClass:"iq-edit-list"},[a("tab-nav",{staticClass:"iq-edit-profile d-flex",attrs:{pills:!0}},[a("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!0,href:"#personal-information",title:"Personal Information"}}),a("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!1,href:"#chang-pwd",title:" Change Password"}}),a("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!1,href:"#emailandsms",title:"Email and SMS"}}),a("tab-nav-items",{staticClass:"col-md-3 p-0",attrs:{active:!1,href:"#manage-contact",title:"Manage Contact"}})],1)],1)]},proxy:!0}])})],1),a("b-col",{attrs:{lg:"12"}},[a("div",{staticClass:"iq-edit-list-data"},[a("tab-content",{attrs:{id:"pills-tabContent-2"}},[a("tab-content-item",{attrs:{active:!0,id:"personal-information"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Personal Information")])]},proxy:!0},{key:"body",fn:function(){return[a("b-form-group",{staticClass:"row align-items-center"},[a("b-col",{attrs:{md:"12"}},[a("div",{staticClass:"profile-img-edit"},[a("b-img",{staticClass:"profile-pic height-150 width-150",attrs:{src:t.user.profile_image,alt:"profile-pic"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.profile_image,expression:"user.profile_image"}],attrs:{type:"hidden"},domProps:{value:t.user.profile_image},on:{input:function(a){a.target.composing||t.$set(t.user,"profile_image",a.target.value)}}}),a("div",{staticClass:"p-image"},[a("div",{staticClass:"position-relative"},[a("i",{staticClass:"ri-pencil-line upload-button"}),a("b-form-file",{staticClass:"h-100 position-absolute",staticStyle:{opacity:"0"},attrs:{accept:"image/*"},on:{change:t.previewImage}})],1)])],1)])],1),a("b-row",{attrs:{"align-v":"center"}},[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"First Name","label-for":"fname"}},[a("ValidationProvider",{attrs:{name:"First name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"First Name"},model:{value:t.user.fname,callback:function(a){t.$set(t.user,"fname",a)},expression:"user.fname"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Last Name","label-for":"lname"}},[a("ValidationProvider",{attrs:{name:"Last name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Last Name"},model:{value:t.user.lname,callback:function(a){t.$set(t.user,"lname",a)},expression:"user.lname"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Username","label-for":"uname"}},[a("ValidationProvider",{attrs:{name:"User name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Username"},model:{value:t.user.username,callback:function(a){t.$set(t.user,"username",a)},expression:"user.username"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Gender:","label-class":"d-block"}},[a("b-form-radio",{attrs:{inline:"",value:"male"},model:{value:t.user.gender,callback:function(a){t.$set(t.user,"gender",a)},expression:"user.gender"}},[t._v("Male")]),a("b-form-radio",{attrs:{inline:"",value:"female"},model:{value:t.user.gender,callback:function(a){t.$set(t.user,"gender",a)},expression:"user.gender"}},[t._v("Female")])],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{label:"Date Of Birth:","label-for":"dob"}},[a("b-form-input",{attrs:{type:"date",id:"dob"},model:{value:t.user.dob,callback:function(a){t.$set(t.user,"dob",a)},expression:"user.dob"}})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"City:","label-for":"uname"}},[a("b-form-input",{attrs:{type:"text",placeholder:"City"},model:{value:t.user.city,callback:function(a){t.$set(t.user,"city",a)},expression:"user.city"}})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{"label-for":"exampleFormControlSelect4",label:"State:"}},[a("b-form-select",{attrs:{plain:"",options:t.states,id:"exampleFormControlSelect4"},model:{value:t.user.state,callback:function(a){t.$set(t.user,"state",a)},expression:"user.state"}})],1),a("b-form-group",{staticClass:"col-sm-6",attrs:{"label-for":"exampleFormControlSelect3",label:"Country:"}},[a("b-form-select",{attrs:{plain:"",options:t.countries,id:"exampleFormControlSelect3"},model:{value:t.user.country,callback:function(a){t.$set(t.user,"country",a)},expression:"user.country"}})],1),a("b-form-group",{staticClass:"col-sm-12",attrs:{label:"Address:"}},[a("b-form-textarea",{staticStyle:{"line-height":"22px"},attrs:{name:"address",rows:"5"},model:{value:t.user.address1,callback:function(a){t.$set(t.user,"address1",a)},expression:"user.address1"}})],1)],1),a("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{staticClass:"iq-bg-danger",attrs:{type:"reset",variant:"none"}},[t._v("Cancel")])]},proxy:!0}])})],1),a("tab-content-item",{attrs:{active:!1,id:"chang-pwd"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Change Password")])]},proxy:!0},{key:"body",fn:function(){return[a("b-form-group",[a("label",{attrs:{for:"cpass"}},[t._v("Current Password:")]),a("b-link",{staticClass:"float-right",attrs:{href:"javascripe:void();"}},[t._v("Forgot Password")]),a("b-form-input",{attrs:{type:"password",id:"cpass"},on:{focusout:function(a){return t.changePassword()}},model:{value:t.currentPassword,callback:function(a){t.currentPassword=a},expression:"currentPassword"}})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"New Password:","label-for":"pass"}},[a("ValidationProvider",{attrs:{name:"Password",rules:"confirmed:repeat_password"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"password",placeholder:"Password"},model:{value:t.user.password,callback:function(a){t.$set(t.user,"password",a)},expression:"user.password"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Repeat Password:","label-for":"rpass"}},[a("ValidationProvider",{attrs:{vid:"repeat_password",name:"Repeat Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function({errors:e}){return[a("b-form-input",{class:e.length>0?" is-invalid":"",attrs:{type:"password",placeholder:"Repeat Password"},model:{value:t.user.repeat_password,callback:function(a){t.$set(t.user,"repeat_password",a)},expression:"user.repeat_password"}}),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(e[0]))])])]}}])})],1),a("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{staticClass:"iq-bg-danger",attrs:{type:"reset",variant:"none"}},[t._v("Cancel")])]},proxy:!0}])})],1),a("tab-content-item",{attrs:{active:!1,id:"emailandsms"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Email and SMS")])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"form-group row align-items-center"},[a("label",{staticClass:"col-md-3",attrs:{for:"emailnotification"}},[t._v("Email Notification:")]),a("div",{staticClass:"col-md-9 custom-control custom-switch"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"emailnotification",checked:""}}),a("label",{staticClass:"custom-control-label",attrs:{for:"emailnotification"}})])]),a("div",{staticClass:"form-group row align-items-center"},[a("label",{staticClass:"col-md-3",attrs:{for:"smsnotification"}},[t._v("SMS Notification:")]),a("div",{staticClass:"col-md-9 custom-control custom-switch"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"smsnotification",checked:""}}),a("label",{staticClass:"custom-control-label",attrs:{for:"smsnotification"}})])]),a("div",{staticClass:"form-group row align-items-center"},[a("label",{staticClass:"col-md-3",attrs:{for:"npass"}},[t._v("When To Email")]),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"email01"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"email01"}},[t._v("You have new notifications.")])]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"email02"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"email02"}},[t._v("You're sent a direct message")])]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"email03",checked:""}}),a("label",{staticClass:"custom-control-label",attrs:{for:"email03"}},[t._v("Someone adds you as a connection")])])])]),a("div",{staticClass:"form-group row align-items-center"},[a("label",{staticClass:"col-md-3",attrs:{for:"npass"}},[t._v("When To Escalate Emails")]),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"email04"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"email04"}},[t._v(" Upon new order.")])]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"email05"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"email05"}},[t._v(" New membership approval")])]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"email06",checked:""}}),a("label",{staticClass:"custom-control-label",attrs:{for:"email06"}},[t._v(" Member registration")])])])]),a("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{staticClass:"iq-bg-danger",attrs:{type:"reset",variant:"none"}},[t._v("Cancel")])]},proxy:!0}])})],1),a("tab-content-item",{attrs:{active:!1,id:"manage-contact"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Manage Contact")])]},proxy:!0},{key:"body",fn:function(){return[a("b-form",[a("b-form-group",[a("label",{attrs:{for:"contact_no"}},[t._v("Contact Number:")]),a("b-form-input",{attrs:{id:"contact_no",type:"text"},model:{value:t.user.mobile_no,callback:function(a){t.$set(t.user,"mobile_no",a)},expression:"user.mobile_no"}})],1),a("b-form-group",[a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("b-form-input",{attrs:{id:"email",type:"text"},model:{value:t.user.email,callback:function(a){t.$set(t.user,"email",a)},expression:"user.email"}})],1),a("b-form-group",[a("label",{attrs:{for:"url"}},[t._v("Url:")]),a("b-form-input",{attrs:{id:"url",type:"text"},model:{value:t.user.url,callback:function(a){t.$set(t.user,"url",a)},expression:"user.url"}})],1),a("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{staticClass:"iq-bg-danger",attrs:{type:"reset",variant:"none"}},[t._v("Cancel")])],1)]},proxy:!0}])})],1)],1)],1)])],1)],1)])},r=[],o=e("bcae"),i={name:"DoctorProfileEdit",mounted(){o["a"].index()},data(){return{user:{fname:"",lname:"",name:"",username:"",email:"",password:"",address1:"",address2:"",company_name:"",profile_image:e("2a35"),mobile_no:"",country:"",state:"",city:"",pincode:"",role:"",gender:"",dob:"",url:""},currentPassword:"",countries:[{value:"Canada",text:"Canada"},{value:"Niada",text:"Niada"},{value:"USA",text:"USA"},{value:"India",text:"India"},{value:"Africa",text:"Africa"}],states:[{value:"California",text:"California"},{value:"Florida",text:"Florida"},{value:"Georgia",text:"Georgia"},{value:"Connecticut",text:"Connecticut"},{value:"Louisiana",text:"Louisiana"}]}},methods:{previewImage:function(t){const a=t.target;if(a.files&&a.files[0]){const t=new FileReader;t.onload=t=>{this.user.profile_image=t.target.result},t.readAsDataURL(a.files[0])}},changePassword:function(){}}},l=i,n=e("2877"),c=Object(n["a"])(l,s,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4d2cc8ee.cca4d15c.js.map