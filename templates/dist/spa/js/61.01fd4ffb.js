(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{5875:function(t,e,a){"use strict";var s=a("5e1b"),o=a.n(s);e["default"]=o.a},"5e1b":function(t,e){},f84b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticStyle:{display:"none"},model:{value:t.scaneddata.request_time,callback:function(e){t.$set(t.scaneddata,"request_time",e)},expression:"scaneddata.request_time"}}),a("q-card",{directives:[{name:"show",rawName:"v-show",value:!t.fab,expression:"!fab"}],style:{width:t.width,height:t.height},attrs:{flat:""}},[a("q-card-section",[a("q-bar",{staticClass:"bg-white q-mb-sm shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("scan.scan_goods_label"))+": "+t._s(t.asn_scan))])]),a("q-bar",{staticClass:"bg-white q-mb-sm shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("scan.scan_goods_label"))+": "+t._s(t.goods_scan))])]),a("q-bar",{staticClass:"bg-white shadow-1 "},[a("div",{staticStyle:{"font-size":"12px",width:"100%"}},[t._v(t._s(t.$t("scan.scan_goods_label"))+": "+t._s(t.bin_scan))])])],1),a("q-scroll-area",{ref:"scrollArea",style:{height:t.scroll_height,width:t.width},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},[a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(t._s(t.scan_goods_code))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.goods_actual_qty))]),a("th",{staticClass:"text-center"},[t._v(t._s(t.sorted_qty))])])]),a("tbody",[t._l(t.table_list,(function(e,s){return a("tr",{key:s,attrs:{id:"dom"+s}},[a("td",{class:{"scan-background text-center":e.goods_code===t.goods_scan,"text-center":e.goods_code!==t.goods_scan}},[t._v(t._s(e.goods_code))]),a("td",{class:{"scan-background text-center":e.goods_code===t.goods_scan,"text-center":e.goods_code!==t.goods_scan}},[t._v(t._s(e.goods_actual_qty))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.sorted_qty))])])}))],2)])],1)],1)],1)},o=[],n=a("3004"),i=a("18d6"),c=a("09f9"),d={name:"Pagezebra_sorting",data(){return{openid:"",login_name:"",authin:"0",pathname:"asn/detail/?asn_status=4&asn_code=",width:"",height:"",scroll_height:"",table_list:[],scan_goods_code:this.$t("scan.scan_goods_code"),goods_actual_qty:this.$t("scan.view_picking.picking_qty"),sorted_qty:this.$t("scan.view_picking.order_qty"),thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#E0E0E0",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#EEEEEE",width:"9px",opacity:.2},bar_scanned:"",asn_scan:"",bin_scan:"",goods_scan:"",error1:this.$t("scan.scan_goods_label_error"),error2:this.$t("scan.view_picking.picking_qty_error")}},methods:{getASNDetailList(t){var e=this;Object(n["e"])(e.pathname+t,{}).then((t=>{0===t.results.length?(navigator.vibrate(100),e.$q.notify({message:"No ASN Data",position:"top",icon:"close",color:"negative"})):(console.log(t),e.asn_scan=t.results[0].asn_code,e.table_list=t.results)})).catch((t=>{navigator.vibrate(100),e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))},getGoodsList(t){var e=this;e.table_list.filter((a=>!a.goods_code.includes(t)||(e.goods_scan=t,a.sorted_qty+=1,e.table_list=[],e.table_list.push(a),!1)))},getBinList(t){var e=this;Object(n["e"])("binset/?bin_name="+t,{}).then((t=>{0===t.results.length?(navigator.vibrate(100),e.$q.notify({message:"No Bin Data",position:"top",icon:"close",color:"negative"})):1===t.results.length?(e.bin_scan=t.results[0].bin_name,e.goods_scan="",e.table_list[0].bin_name=e.bin_scan,e.table_list[0].qty=e.table_list[0].sorted_qty,Object(n["i"])("asn/movetobin/",e.table_list[0]).then((t=>{e.getASNDetailList(e.asn_scan),e.$q.notify({message:"Success Move To Bin",position:"top",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))):(navigator.vibrate(100),e.$q.notify({message:"Repeating Data",position:"top",icon:"close",color:"negative"}))})).catch((t=>{navigator.vibrate(100),e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))},sortedSubmit(){var t=this,e={asn_code:t.asn_scan,goodsData:t.table_list,creater:t.login_name};t.sortedDataSubmit(e)},sortedDataSubmit(t){var e=this;Object(n["i"])("asn/sorted/",t).then((t=>{e.table_list=[],e.goods_scan="",e.dn_scan="",t.detail||e.$q.notify({message:"Success Confirm ASN Sorted List",position:"top",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,position:"top",icon:"close",color:"negative"})}))}},computed:{fab:{get(){return this.$store.state.fabchange.fab}},scaneddata:{get(){return this.$store.state.scanedsolve.scaneddata}}},created(){var t=this;i["a"].has("openid")?t.openid=i["a"].getItem("openid"):(t.openid="",i["a"].set("openid","")),i["a"].has("login_name")?t.login_name=i["a"].getItem("login_name"):(t.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.width=1*c["a"].width+"px",t.height=c["a"].height-50+"px",t.scroll_height=c["a"].height-225+"px"},updated(){var t=this;""!==t.scaneddata&&t.bar_scanned!==t.scaneddata.request_time&&("ASN"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.goods_scan="",t.asn_scan="",t.bin_scan="",t.getASNDetailList(t.scaneddata.code)):"GOODS"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.goods_scan="",t.bin_scan="",t.getGoodsList(t.scaneddata.code)):"BINSET"===t.scaneddata.mode?(t.bar_scanned=t.scaneddata.request_time,t.goods_scan="",t.bin_scan="",t.getBinList(t.scaneddata.code)):t.$q.notify({message:"No Query Data",position:"top",icon:"close",color:"negative"}))},beforeDestroy(){}},r=d,l=a("42e1"),_=a("5875"),g=a("27f9"),h=a("f09f"),b=a("a370"),u=a("d847"),p=a("4983"),m=a("2bb1"),v=a("eebe"),y=a.n(v),f=Object(l["a"])(r,s,o,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(f);e["default"]=f.exports;y()(f,"components",{QInput:g["a"],QCard:h["a"],QCardSection:b["a"],QBar:u["a"],QScrollArea:p["a"],QMarkupTable:m["a"]})}}]);