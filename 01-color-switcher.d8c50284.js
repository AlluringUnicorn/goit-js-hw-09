const t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");e.disabled=!1;const a={intervalId:null,start(){this.intervalId=setInterval((()=>t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3)},stop(){clearInterval(this.intervalId)}};e.addEventListener("click",(function(){a.start(),d.disabled=!1,e.disabled=!0})),d.addEventListener("click",(function(){a.stop(),e.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.d8c50284.js.map