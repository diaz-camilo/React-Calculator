(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),r=n.n(s),i=(n(13),n(4)),l=n(2),o=n(3),d=n(6),u=n(5),h=(n(14),n(0)),j=function(e){var t=function(t){return Object(h.jsx)("div",{className:"grid-item",onClick:function(){return e.handleButtonPressed(t)},children:Object(h.jsx)("span",{children:t})})},n=function(t){return Object(h.jsx)("div",{className:"grid-item operator",onClick:function(){return e.handleButtonPressed(t)},children:Object(h.jsx)("span",{children:t})})};return Object(h.jsxs)("div",{className:"grid-container",children:[t(7),t(8),t(9),n("+"),t(4),t(5),t(6),n("*"),t(1),t(2),t(3),n("-"),Object(h.jsx)("div",{className:"grid-item",onClick:e.handleClear,children:Object(h.jsx)("span",{children:"C"})}),t(0),t("."),n("/")]})},b=function(e){return Object(h.jsxs)("div",{className:"app-handlebar",children:[Object(h.jsxs)("div",{className:"close-max-min",children:[Object(h.jsx)("div",{className:"close"}),Object(h.jsx)("div",{className:"min"}),Object(h.jsx)("div",{className:"max"})]}),Object(h.jsx)("p",{className:"title",children:e.title})]})},p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={formula:""},e.newValue=function(t){return e.state.formula.concat(t)},e.handleButtonPressed=function(t){var n=e.newValue(t);e.setState({formula:n}),e.props.calc(n)},e.handleClear=function(){e.setState({formula:""}),e.props.calc("")},e.handleChange=function(t){var n=t.target.value;e.setState({formula:n}),e.props.calc(n)},e.inputToDisplay=function(){return Object(i.a)(e.state.formula).map((function(e,t){return null!==e.match(/[^\d+*/-]/g)?Object(h.jsx)("span",{className:"bad-char",children:e},t):e}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"parent",children:[Object(h.jsx)(b,{title:"React Calc!"}),Object(h.jsxs)("div",{className:"app-input input-container",children:[Object(h.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.formula,placeholder:" 0"}),Object(h.jsx)("div",{className:"input-field-replacement",children:Object(h.jsx)("div",{children:this.inputToDisplay()})})]}),Object(h.jsx)(j,{handleButtonPressed:this.handleButtonPressed,handleClear:this.handleClear})]})}}]),n}(a.Component),O=p,f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={calcString:""},e.calc=function(t){return e.setState({calcString:t})},e.total=function(){var t,n,a=e.state.calcString.slice(),c="",s=Object(i.a)(a.matchAll(/^(\d+(?:.\d+)?)(\+|-|\*|\/){1}(\d+(?:.\d+)?)$/g))[0];if(void 0!==s)switch(t=parseFloat(s[1]),n=parseFloat(s[3]),s[2]){case"+":c=t+n;break;case"-":c=t-n;break;case"*":c=t*n;break;case"/":c=0!==n?t/n:"Division by zero is undefined"}return"Division by zero is undefined"===c|""===c?Object(h.jsx)("h3",{children:c}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Result = ",c]}),Object(h.jsx)("h4",{children:"Also, did you know?"}),Object(h.jsxs)("p",{children:["The hypotenuse of a triangle with sides ",t," and"," ",n," = ",Math.hypot(t,n),Object(h.jsx)("br",{}),"or that ",Object(h.jsx)("br",{}),t," to the power of ",n," ="," ",Math.pow(t,n)]})]})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{children:"Calcuate with React!"}),null!==e.state.calcString.match(/[^\d+*/-]/g)&&Object(h.jsxs)("h1",{children:[Object(h.jsx)("span",{children:"\ud83e\udd16"})," Unsuported character detected in input field."]}),Object(h.jsx)(O,{calc:this.calc}),this.total()]})}}]),n}(a.Component),m=f,x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.8b52c4e3.chunk.js.map