(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f264b86"],{"2fee":function(e,t,a){},d101:function(e,t,a){"use strict";a("2fee")},f7b0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("b-container",{attrs:{fluid:""}},[t("b-row",[t("b-col",{attrs:{md:"3"}},[t("iq-card",{staticClass:"calender-small",scopedSlots:e._u([{key:"body",fn:function(){return[t("flat-pickr",{staticClass:"d-none",attrs:{config:e.config,value:Date.now()},on:{"on-change":function(t){return e.goToDate(e.date)}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})]},proxy:!0}])}),t("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[e._v("Classification")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("a",{attrs:{href:"#"}},[t("i",{staticClass:"fa fa-plus mr-0",attrs:{"aria-hidden":"true"}})])]},proxy:!0},{key:"body",fn:function(){return[t("ul",{staticClass:"m-0 p-0 job-classification"},[t("li",{},[t("i",{staticClass:"ri-check-line bg-danger"}),e._v("Meeting")]),t("li",{},[t("i",{staticClass:"ri-check-line bg-success"}),e._v("Business travel")]),t("li",{},[t("i",{staticClass:"ri-check-line bg-warning"}),e._v("Personal Work")]),t("li",{},[t("i",{staticClass:"ri-check-line bg-info"}),e._v("Team Project")])])]},proxy:!0}])}),t("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[e._v("Today's Schedule")])]},proxy:!0},{key:"body",fn:function(){return[t("ul",{staticClass:"m-0 p-0 today-schedule"},e._l(e.getDayEvents(),(function(a){return t("li",{key:a.id,staticClass:"d-flex"},[t("div",{staticClass:"schedule-icon"},[t("i",{staticClass:"ri-checkbox-blank-circle-fill text-primary"})]),t("div",{staticClass:"schedule-text"},[t("span",[e._v(e._s(a.title))]),t("span",[e._v(e._s(e.getPeriodConsult(a)))])])])})),0)]},proxy:!0}])})],1),t("b-col",{attrs:{md:"9"}},[t("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[t("h4",{staticClass:"card-title"},[e._v("Calendar")])]},proxy:!0},{key:"headerAction",fn:function(){return[t("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.showModal()}}},[t("i",{staticClass:"ri-add-line mr-2"}),e._v("Book Appointment")]),t("CalendarForm",{attrs:{onDateClick:e.onDateClick}})]},proxy:!0},{key:"body",fn:function(){return[t("FullCalendar",{on:{onDateClickEvent:function(t){return e.onDateClickEvent(t)}}})]},proxy:!0}])})],1)],1)],1)},l=[],s=a("2f62"),r=a("bcae"),o=function(){var e=this,t=e._self._c;return t("div",[t("b-modal",{attrs:{"hide-footer":"",title:"Appointment",id:"form-calendar-modal"}},[t("div",[t("b-row",{attrs:{lg:"2"}},[t("b-col",[t("span",[e._v("day")]),t("b-form-datepicker",{attrs:{id:"example-datepicker","date-format-options":{day:"numeric",month:"numeric",year:"numeric"}},model:{value:e.event.startStr,callback:function(t){e.$set(e.event,"startStr",t)},expression:"event.startStr"}})],1)],1),t("b-row",{attrs:{lg:"2"}},[t("b-col",[t("span",[e._v("start")]),t("b-form-timepicker",{attrs:{id:"hourpicker-start",disabled:e.event.allDay},model:{value:e.event.start,callback:function(t){e.$set(e.event,"start",t)},expression:"event.start"}})],1),t("b-col",[t("span",[e._v("end")]),t("b-form-timepicker",{attrs:{id:"hourpicker-end",disabled:e.event.allDay},model:{value:e.event.end,callback:function(t){e.$set(e.event,"end",t)},expression:"event.end"}})],1)],1),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.event.allDay,callback:function(t){e.$set(e.event,"allDay",t)},expression:"event.allDay"}},[e._v(" All Day ")]),t("span",[e._v("groupId")]),t("b-form-input",{attrs:{placeholder:"groupId"},model:{value:e.event.groupId,callback:function(t){e.$set(e.event,"groupId",t)},expression:"event.groupId"}}),t("span",[e._v("title")]),t("b-form-input",{attrs:{placeholder:"title"},model:{value:e.event.title,callback:function(t){e.$set(e.event,"title",t)},expression:"event.title"}}),t("span",[e._v("url")]),t("b-form-input",{attrs:{placeholder:"url"},model:{value:e.event.url,callback:function(t){e.$set(e.event,"url",t)},expression:"event.url"}}),t("span",[e._v("classNames")]),t("b-form-input",{attrs:{placeholder:"classNames"},model:{value:e.event.classNames,callback:function(t){e.$set(e.event,"classNames",t)},expression:"event.classNames"}}),t("span",[e._v("backgroundColor")]),t("b-form-input",{attrs:{placeholder:"backgroundColor"},model:{value:e.event.backgroundColor,callback:function(t){e.$set(e.event,"backgroundColor",t)},expression:"event.backgroundColor"}}),t("span",[e._v("borderColor")]),t("b-form-input",{attrs:{placeholder:"borderColor"},model:{value:e.event.borderColor,callback:function(t){e.$set(e.event,"borderColor",t)},expression:"event.borderColor"}}),t("span",[e._v("textColor")]),t("b-form-input",{attrs:{placeholder:"textColor"},model:{value:e.event.textColor,callback:function(t){e.$set(e.event,"textColor",t)},expression:"event.textColor"}}),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.outTime,callback:function(t){e.outTime=t},expression:"outTime"}},[e._v(" out time ")]),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.event.resourceEditable,callback:function(t){e.$set(e.event,"resourceEditable",t)},expression:"event.resourceEditable"}},[e._v(" resourceEditable ")]),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.event.startEditable,callback:function(t){e.$set(e.event,"startEditable",t)},expression:"event.startEditable"}},[e._v(" startEditable ")]),t("b-form-checkbox",{attrs:{switch:""},model:{value:e.event.durationEditable,callback:function(t){e.$set(e.event,"durationEditable",t)},expression:"event.durationEditable"}},[e._v(" durationEditable ")])],1),t("b-row",{staticClass:"text-center float-right"},[t("b-button",{staticClass:"mt-2",attrs:{variant:"outline-warning"},on:{click:e.hideModal}},[e._v("Close")]),t("b-button",{staticClass:"mt-2",attrs:{variant:"outline-danger"},on:{click:e.remove}},[e._v("Remove")]),t("b-button",{staticClass:"mt-2",attrs:{variant:"success "},on:{click:e.save}},[e._v("Save")])],1)],1)],1)},i=[],c={props:["onDateClick"],data(){return{event:{groupId:null,allDay:!1,start:null,end:null,title:null,url:null,classNames:null,display:null,backgroundColor:null,borderColor:null,overlap:!1,startEditable:!0,durationEditable:!0,resourceEditable:!0,textColor:null},outTime:!1}},watch:{onDateClick(e){if(console.log("event form",e),e.id){let t=this.events.filter(t=>t.id==e.id)[0];this.event=this.cloneObject(t),console.log("exist",this.event)}else this.event=this.cloneObject(e),this.event.allDay=!1,console.log("new",this.event);let t=e.startStr?new Date(e.startStr).toISOString().split("T")[0]:this.event.dateStr;if(this.event.startStr=t,!e.allDay){console.log(this.event.end,"ned");let e=new Date(this.event.start?this.event.start:this.event.startStr),t=new Date(this.event.end?this.event.end:new Date(this.event.startStr).setMinutes(e.getMinutes()+30));console.log(e,t,"aqui"),this.event.start=e.toLocaleTimeString(),this.event.end=t.toLocaleTimeString()}}},methods:{...Object(s["b"])({deleteEvent:"Calendar/deleteEvent",createEvent:"Calendar/createEvent",updateEvent:"Calendar/updateEvent"}),save(){console.log("save evevent",this.event),this.event.allDay||(this.event.start=this.event.start?new Date(this.event.startStr.split("T",1)+"T"+this.event.start).toISOString():this.event.dateStr,this.event.end=this.event.start?new Date(this.event.startStr.split("T",1)+"T"+this.event.end).toISOString():this.event.dateStr),this.outTime&&(this.event.overlap=!1,this.event.display="background"),this.event.id?this.updateEvent(this.event):(this.event.id=2*Math.random(),this.createEvent(this.event)),this.hideModal()},remove(){this.hideModal(),this.deleteEvent(this.onDateClick.id)},hideModal(){this.$bvModal.hide("form-calendar-modal")}},computed:{...Object(s["c"])({events:"Calendar/events"})}},d=c,u=(a("d101"),a("2877")),v=Object(u["a"])(d,o,i,!1,null,"0a2e8a71",null),h=v.exports,b={name:"GoogleCalendar",components:{CalendarForm:h},data(){return{config:{inline:!0},showForm:!1,onDateClick:null,date:null}},created(){},mounted(){r["a"].index()},computed:{...Object(s["c"])({events:"Calendar/events"})},methods:{...Object(s["b"])({goToDate:"Calendar/goToDate"}),onDateClickEvent(e){this.onDateClick=e},showModal(){this.$bvModal.show("form-calendar-modal"),console.log("show form")},getDayEvents(){let e=this.events.filter(e=>{let t=(new Date).getDate(),a=new Date(e.start||e.date).getDate();return a===t});return e},getPeriodConsult(e){if(e.allDay)return"all day";let t=new Date(e.start),a=new Date(e.end),n=this.getTime(t),l=this.getTime(a);return`${n} to ${l}`},getTime(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes();return a=this.checkTime(a),n=this.checkTime(n),a+":"+n},checkTime(e){return e<10&&(e="0"+e),e}}},p=b,m=Object(u["a"])(p,n,l,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2f264b86.dcfa57e2.js.map