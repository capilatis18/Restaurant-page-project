(()=>{const e=document.querySelector("#figura"),t=document.querySelector(".p"),c=document.querySelector("#categoria"),n=document.querySelector("#tarea"),o=document.querySelector("#close"),d=document.querySelector("#overlay"),r=document.querySelector("#button"),a=document.querySelector("#main"),l=document.querySelector("#form");function u(){d.classList.remove("overlayPop"),d.classList.add("overlayUnPop"),l.reset()}function i(){d.classList.remove("overlayUnPop"),d.classList.add("overlayPop")}r.addEventListener("click",(()=>{!function(){const e=document.createElement("div");e.classList.add("eventos");const t=document.createElement("p");t.innerText=n.value,e.appendChild(t);const o=document.createElement("div");o.classList.add("tipoChequeo"),e.appendChild(o);const d=document.createElement("p");d.innerText=c.value,o.appendChild(d);const r=document.createElement("input");r.type="checkbox",o.appendChild(r),a.appendChild(e)}(),u()})),o.addEventListener("click",(()=>{u()})),e.addEventListener("click",(()=>{i()})),t.addEventListener("click",(()=>{i()}))})();