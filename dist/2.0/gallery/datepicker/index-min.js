KISSY.add("brix/gallery/datepicker/index",function(e,t,i,n){function a(e){var t=864e5,i=new Date,n=i.getTime();return i.setTime(n+t*e),i}function r(){r.superclass.constructor.apply(this,arguments);var t=this,i=e.one(t.get("trigger"));if(i){var n=t.get("triggerType");e.each(n,function(e){i.on(e,t.toggle,t)})}var a=t.get("isCompare");a&&t.on("afterCompareTextChange",function(){t.setChunkData("compareText",t.get("compareText"))})}var o='<div class="datepicker-bd"> {{^isCompare}} <label>\u65e5\u671f\u8303\u56f4\uff1a</label><div class="range" bx-tmpl="datapickRange1" bx-datakey="start,end"><input class="input" input_type="Start" value="{{start}}"><span class="input-split">-</span><input class="input" input_type="End" value="{{end}}"></div> {{/isCompare}} {{#isCompare}} <label>\u5f53\u524d\u65e5\u671f\uff1a</label><div bx-tmpl="datepicker" bx-datakey="compareText" class="range">{{compareText}} </div><label>\u4e0e\u5176\u4ed6\u65e5\u671f\u6bd4\u8f83\uff1a(\u987b\u540c\u6837\u5929\u6570)</label><div class="range" bx-tmpl="datapickRange2" bx-datakey="start,end"><input class="input" input_type="Start" value="{{start}}"><span class="input-split">-</span><input class="input" input_type="End" value="{{end}}"></div> {{/isCompare}} {{#isQuick}} {{{quick_html}}} {{/isQuick}} <div class="operator"><a class="btn btn-size25 btn-confirm" href="#">\u786e\u5b9a</a><a class="btn-cancel" href="#">\u53d6\u6d88</a></div></div>',s=new Date,l=a(-1),c={today:{text:"\u4eca\u5929",dateRange:[s,s]},yestoday:{text:"\u6628\u5929",dateRange:[l,l]},days7before:{text:"\u8fc7\u53bb7\u5929",dateRange:[a(-7),l]},days14before:{text:"\u8fc7\u53bb15\u5929",dateRange:[a(-15),l]}},u="\u4e0d\u9650";return r.Date=n.Date,r.ATTRS={trigger:{value:!1},triggerType:{value:["click"]},quickDates:{value:c},dates:{value:{start:null,end:null}},isQuick:{value:!0},isCompare:{value:!1},compareText:{value:"\u8fc7\u53bb7\u5929"},align:{value:{node:!1,points:["bl","tl"],offset:[0,0]}},notLimited:{value:!1},pages:{value:2},minDateStart:{value:!1},minDateEnd:{value:!1},maxDateStart:{value:!1},maxDateEnd:{value:!1},disabledStart:{value:!1},disabledEnd:{value:!1},tmpl:{valueFn:function(){var e=this,t=o;return e.get("el")||(t='<div class="datepicker">'+t+"</div>"),t}},data:{valueFn:function(){var e=this,t=e.get("isQuick"),i=e.get("isCompare"),a=e.get("compareText"),r=e.get("dates"),o=r.start?n.Date.format(r.start,"isoDate"):u,s=r.end?n.Date.format(r.end,"isoDate"):u;return{start:o,end:s,isQuick:t,isCompare:i,compareText:a}}},autoRender:{value:!1}},r.RENDERERS={quick:{html:function(e){var t=e.get("quickDates"),i='<label>\u5feb\u6377\u65e5\u671f:</label><ul class="quick-list">';for(var n in t)i+='<li><a class="quick-item" key="'+n+'" href="#">'+t[n].text+"</a></li>";return i+="</ul>"}}},r.DOCEVENTS={"":{click:function(t){var i=this,n=i.get("el"),a=e.one(t.target),r=e.one(i.get("trigger"));n.equals(a)||n.contains(a)||!r||r.contains(a)||a[0]==r[0]||i.calendar&&i.calendar.get("el").contains(a)||i.hide()}}},r.EVENTS={input:{click:function(t){var i=this,a=e.one(t.currentTarget),o=n.Date.parse(a.val())||new Date,s=n.Date.parse(a.val()),l=e.clone(i.get("align"));l.node=a[0],i.calendar||(i.calendar=new n({date:o,selected:s,popup:!0,closable:!0,notLimited:i.get("notLimited"),pages:i.get("pages"),align:l}),i.calendar.on("select",function(e){var t=i.calendar.get("trigger");e.date?t.val(n.Date.format(e.date,"isoDate")):t.val(u)})),i.calendar.set("date",o),i.calendar.set("selected",s),i.calendar.set("trigger",a),i.calendar.set("align",l);var c=a.attr("input_type");i.calendar.set("minDate",i.get("minDate"+c)),i.calendar.set("maxDate",i.get("maxDate"+c)),i.calendar.set("disabled",i.get("disabled"+c)),i.fire(r.FIRES.inputClick,{type:c}),i.calendar.show()}},".btn-confirm":{click:function(e){e.preventDefault();var t=this,i=t.get("el"),a=i.one(".quick-list"),o={isQuick:!1},s=i.all("input");a&&a.all("a").removeClass("quick-current");var l=s.item(0).val(),c=s.item(1).val();if(t.get("isQuick")){var u=t.get("quickDates");for(var d in u){var p=u[d];if(n.Date.format(p.dateRange[0],"isoDate")==l&&n.Date.format(p.dateRange[1],"isoDate")==c){var f=i.one(".quick-list").one('[key="'+d+'"]');f.addClass("quick-current");break}}}o.start=n.Date.parse(l),o.end=n.Date.parse(c),t.fire(r.FIRES.selected,o)!==!1&&t.hide()}},".btn-cancel":{click:function(e){e.preventDefault(),this.hide()}},".quick-item":{click:function(t){t.preventDefault();var i=this,a=e.one(t.currentTarget),o=i.get("el"),s=i.get("quickDates"),l=e.one(t.currentTarget).attr("key"),c=s[l],u={isQuick:!0};o.one(".quick-list").all("a").removeClass("quick-current"),a.addClass("quick-current"),u.start=c.dateRange[0],u.end=c.dateRange[1],u.quickDate=c;var d=o.all("input");d.each(function(e,t){e.val(n.Date.format(c.dateRange[t],"isoDate"))}),i.fire(r.FIRES.selected,u),i.hide()}}},r.METHODS={show:function(){var t=this;if(t.get("rendered")||t.render(),t.overlay){var i=e.clone(t.get("align"));i.node||(i.node=t.get("trigger")),t.overlay.set("align",i),t.overlay.show(),t.fire(r.FIRES.show)}},hide:function(){var e=this;e.overlay&&(e.overlay.hide(),e.fire(r.FIRES.hide))},toggle:function(e){var t=this;e&&e.preventDefault(),t.overlay?"hidden"==t.overlay.get("el").css("visibility")?t.show():t.hide():t.show()}},r.FIRES={selected:"selected",inputClick:"inputClick",show:"show",hide:"hide"},e.extend(r,t,{initialize:function(){var e=this;e.overlay=new i({srcNode:e.get("el")}),e.overlay.render()},destructor:function(){var t=this,i=e.one(t.get("trigger"));if(i){var n=t.get("triggerType");e.each(n,function(e){i.detach(e,t.toggle,t)})}t.calendar&&(t.calendar.destroy(),t.calendar=null),t.overlay&&(t.overlay.destroy(),t.overlay=null)}}),e.augment(r,r.METHODS),r},{requires:["brix/core/brick","overlay","../calendar/index"]});