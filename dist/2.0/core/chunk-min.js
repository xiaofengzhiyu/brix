KISSY.add("brix/core/chunk",function(e,t,r,n,a,i){function l(e,t){for(var r=0;e.length>r;r++)for(var n=0;t.length>n;n++)if(e[r]==t[n])return!0;return!1}var o=t.all,u=e.noop,s=n.extend({constructor:function s(){var e=this;s.superclass.constructor.apply(e,arguments);var t=e.get("tmpler");(e.get("autoRender")||!t||t.inDom)&&e.render()},bindInternal:u,syncInternal:u,initializer:function(){var e=this,t=e.get("tmpl");if(t){e._bx_buildTmpler(t,e.get("level"));var r=e.get("tmpler");r&&(e._bx_buildDataset(e.get("data")),r.inDom&&e.set("el",t))}},_bx_buildTmpler:function(e,t){var r=this;if(!r.get("isBuidTmpler")){r.set("isBuidTmpler",!0);var n=new i(e,t);r.set("tmpler",n)}},_bx_buildDataset:function(t){var r=this;if(!r.get("isBuidDataset")){r.set("isBuidDataset",!0),t=e.clone(t||{});var n=new a({data:t}),i=r.get("renderer");i&&n.setRenderer(i,r),r.set("dataset",n),n.on("*Change",function(t){var a=!1,i=e.map(t.subAttrName,function(e){return/^data\./g.test(e)?(a=!0,e.replace(/^data\./,"")):"zuomo.xb@taobao.com"});a&&r._bx_renderTmpl(i,n.get("data"))})}},destructor:function(){var e=this,t=e.get("tmpler"),r=e.get("dataset");t&&e.set("tmpler",null),r&&(e.set("dataset",null),r.detach()),e.detach()},bindUI:u,syncUI:u,addSubTmpl:function(e,t,r){var n=this;if(n._bx_buildTmpler("",!1),n._bx_buildDataset(),e){var a=n.get("tmpler");a.addSubTmpl(e,t,r)}},getStoreTmpl:function(e){var t=this,r=t.get("tmpler");return r?r.getStoreTmpl(e):""},setChunkData:function(t,r,n){var a=this,i=a.get("dataset");if(i){if(e.isObject(t)){t=e.clone(t);var l={};for(var o in t)l["data."+o]=t[o];t=l,n=r}else t="data."+t,r=e.clone(r);var u="html";n&&n.renderType&&(u=n.renderType,delete n.renderType),a.set("renderType",u),i.set.apply(i,arguments)}},render:function(){var e=this;if(!e.get("rendered")){e.fire("beforeRenderUI");var t=e.get("dataset");t&&e._bx_render(t.get("data")),e.fire("afterRenderUI"),e.setInternal("rendered",!0),e.fire("beforeBindUI"),s.superclass.bindInternal.call(e),e.callMethodByHierarchy("bindUI","__bindUI"),e.callMethodByHierarchy("initialize","constructor"),e.fire("afterBindUI"),e.fire("beforeSyncUI"),s.superclass.syncInternal.call(e),e.callMethodByHierarchy("syncUI","__syncUI"),e.fire("afterSyncUI")}return e},_bx_render:function(n){var a=this,i=a.get("tmpler");if(i&&!i.inDom){var l,u=a.get("container"),s=a.get("el"),c=e.trim(i.render(n));if(s&&0!==s.length)if(8>=r.ie){for(l=new t("<div />"),u.append(l),l.html(c);l[0].childNodes.length>0;)u[0].appendChild(l[0].childNodes[0]);l.remove(),l=null}else u.append(c);else{var f="brix_"+e.guid();if(8>=r.ie){l=new t("<div />"),u.append(l),l.html(c);var p=l[0].childNodes;if(p.length>1)l.attr("id",f);else{for(f=p[0].id||f,p[0].id=f;p.length>0;)u[0].appendChild(p[0]);l.remove(),l=null}}else l=new t(c),l.length>1?l=o('<div id="'+f+'"></div>').append(l):(f=l.attr("id")||f,l.attr("id",f)),u.append(l);a.set("el","#"+f)}}},_bx_renderTmpl:function(t,r){var n=this,a=n.get("tmpler");if(a&&n.get("rendered")){var i=n.get("el"),o=a.subTmpls;e.each(o,function(a){var o=e.map(a.datakey.split(","),function(t){return e.trim(t)});if(l(o,t)){var u=i.all("[bx-tmpl="+a.name+"]");i.attr("bx-tmpl")==a.name&&(u=i.add(u)),u.each(function(t){if(t.attr("bx-datakey")==a.datakey){var i={};e.each(o,function(e){for(var t=r,n=e.split("."),a=n.length,l=0;l!==a;)t=t[n[l]],l++;i[n[a-1]]=t,t=null}),e.each(r,function(t,r){e.isFunction(t)&&(i[r]=t)});var l=n.get("renderType")||"html";n.fire("beforeRefreshTmpl",{node:t,renderType:l}),t[l](e.trim(a.tmpler.render(i))),n.fire("afterRefreshTmpl",{node:t}),i=null}}),u=null}})}}},{ATTRS:{el:{getter:function(t){return e.isString(t)&&(t=o(t)),t}},destroyAction:{value:"remove"},container:{value:"body",getter:function(t){return e.isString(t)&&(t=o(t)),t}},tmpl:{value:!1},tmpler:{value:!1},rendered:{value:!1},autoRender:{value:!0},data:{value:!1},dataset:{value:!1},renderer:{value:!1},level:{value:3}}});return s},{requires:["node","ua","rich-base","./dataset","./tmpler"]});