(this.webpackJsonppoemandtravel=this.webpackJsonppoemandtravel||[]).push([[9],{628:function(e,o,i){"use strict";var n=i(64),t=i(65),r=i(67),a=i(66),l=i(68),d=i(0),p=i.n(d),c=i(69),s=i(634),u=i(117),g=i(72),b={container:{fontFamily:'Nunito,\n                -apple-system,\n                BlinkMacSystemFont,\n                "Segoe UI",\n                "Helvetica Neue",\n                Arial,\n                sans-serif,\n                "Apple Color Emoji",\n                "Segoe UI Emoji",\n                "Segoe UI Symbol"',fontWeight:"400",lineHeight:"1.5",color:"#212529",textAlign:"left",paddingLeft:"15px",paddingRight:"15px"},navBar:{position:"relative",marginBottom:"20px",marginLeft:"-15px",marginRight:"-15px",border:"1px solid transparent",backgroundColor:"#f8f8f8",borderColor:"#e7e7e7"},nav:{margin:"7.5px"},navRight:{textAlign:"right"},navItem:{display:"inline-block",padding:"10px 5px",lineHeight:"20px"},navButton:{display:"inline-block",padding:"6px 12px",marginTop:"8px",marginBottom:"8px",fontSize:"14px",fontWeight:400,lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer",userSelect:"none",backgroundImage:"none",border:"1px solid transparent",borderRadius:"4px",color:"#333",backgroundColor:"#fff",borderColor:"#ccc"},formContainer:{textAlign:"center"},formSection:{marginBottom:"20px",backgroundColor:"#fff",border:"1px solid #ddd",borderRadius:"4px",textAlign:"left",width:"500px",display:"inline-block"},errorSection:{marginBottom:"20px",color:"#fff",backgroundColor:"#f0ad4e",border:"1px solid #eea236",borderRadius:"4px",textAlign:"left"},sectionHeader:{color:"#000",padding:"10px 15px",borderBottom:"1px solid transparent",borderTopLeftRadius:"3px",borderTopRightRadius:"3px",textAlign:"center"},sectionBody:{padding:"15px"},sectionFooter:{color:"#333",backgroundColor:"#f5f5f5",padding:"10px 15px",borderTop:"1px solid #ddd",borderTopLeftRadius:"3px",borderTopRightRadius:"3px"},formRow:{marginBottom:"15px"},actionRow:{marginBottom:"15px"},space:{display:"inline-block",width:"20px"},signInButton:{position:"relative",padding:"6px 12px 6px 44px",fontSize:"14px",textAlign:"left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block",width:"100%",marginTop:"2px"},input:{display:"block",width:"100%",height:"34px",padding:"6px 12px",fontSize:"14px",lineHeight:"1.42857143",color:"#555",backgroundColor:"#fff",backgroundImage:"none",border:"1px solid #ccc",borderRadius:"4px",boxShadow:"inset 0 1px 1px rgba(0,0,0,.075)",boxSizing:"border-box",transition:"border-color ease-in-out .15s,box-shadow ease-in-out .15s"},button:{display:"inline-block",padding:"6px 12px",marginBottom:"0",fontSize:"14px",fontWeight:400,lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer",userSelect:"none",backgroundImage:"none",border:"1px solid transparent",borderRadius:"4px",color:"#333",backgroundColor:"#fff",borderColor:"#ccc"},a:{color:"#007bff"},pre:{overflow:"auto",fontFamily:'Menlo,\n                Monaco,\n                Consolas,\n                "Courier New",\n                monospace',display:"block",padding:"9.5px",margin:"0 0 10px",fontSize:"13px",lineHeight:"1.42857143",color:"#333",wordBreak:"break-all",wordWrap:"break-word",backgroundColor:"#f5f5f5",border:"1px solid #ccc",borderRadius:"4px"},col1:{display:"inline-block",width:"8.33333333%"},col2:{display:"inline-block",width:"16.66666667%"},col3:{display:"inline-block",width:"25%"},col4:{display:"inline-block",width:"33.33333333%"},col5:{display:"inline-block",width:"41.66666667%"},col6:{display:"inline-block",width:"50%"},col7:{display:"inline-block",width:"58.33333333%"},col8:{display:"inline-block",width:"66.66666667%"},col9:{display:"inline-block",width:"75%"},col10:{display:"inline-block",width:"83.33333333%"},col11:{display:"inline-block",width:"91.66666667%"},col12:{display:"inline-block",width:"100%"}},x=function(e){function o(){var e,i;Object(n.a)(this,o);for(var t=arguments.length,l=new Array(t),d=0;d<t;d++)l[d]=arguments[d];return(i=Object(r.a)(this,(e=Object(a.a)(o)).call.apply(e,[this].concat(l)))).handleStateChange=function(e,o){var n=i.props.authSuccess;"signedIn"===e&&o&&o.getUserData&&o.getUserData((function(e,i){if(i){var t=Object(u.a)(i.UserAttributes,"Name","Value");n(o,t)}else Object(g.a)(e)}))},i}return Object(l.a)(o,e),Object(t.a)(o,[{key:"render",value:function(){var e=this.props.authState;return p.a.createElement("div",{className:"Auth"},p.a.createElement(s.a,{authState:e||"signIn",theme:b,hide:[s.b],onStateChange:this.handleStateChange,signUpConfig:{hideAllDefaults:!0,signUpFields:[{label:"\u540d",key:"given_name",required:!0,placeholder:"\u540d\uff08\u968f\u4fbf\u53d6\u4e00\u4e2a\uff09",type:"string",displayOrder:1},{label:"\u59d3",key:"family_name",required:!0,placeholder:"\u59d3\uff08\u968f\u4fbf\u586b\u4e00\u4e2a\uff09",type:"string",displayOrder:2},{label:"\u90ae\u7bb1",key:"username",required:!0,placeholder:"\u90ae\u7bb1\u5730\u5740",type:"email",displayOrder:3},{label:"\u5bc6\u7801",key:"password",required:!0,placeholder:"\u5bc6\u7801",type:"password",displayOrder:4}]}}))}}]),o}(d.PureComponent);o.a=Object(c.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{authStart:function(){return e(Object(g.c)())},authSuccess:function(o,i){return e(Object(g.d)(o,i))}}}))(x)},675:function(e,o,i){"use strict";i.r(o);var n=i(0),t=i.n(n),r=i(31),a=i(628);o.default=function(e){return e.isAuthenticated?t.a.createElement(r.a,{to:"/"}):t.a.createElement("div",{className:"Auth"},t.a.createElement(a.a,null))}}}]);
//# sourceMappingURL=9.e2fcd403.chunk.js.map