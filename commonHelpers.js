import{S as d,i as h}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=a=>{const r=new URLSearchParams({key:"45240196-18d84f3cf70a1bfd2b8ad66bc",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},c=document.querySelector(".gallery"),f=new d(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250}),p=a=>{const r=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:o,comments:n,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img
			class="gallery-image"
			src="${s}"
			alt="${e}"
			/>
        <div class="stats">
            <h3 class="stats-title">Likes
             <p class="stats-value">${t}</p>
             </h3>
            <h3 class="stats-title">Views
             <p class="stats-value">${o}</p>
             </h3>
            <h3 class="stats-title">Comments
             <p class="stats-value">${n}</p>
             </h3>
            <h3 class="stats-title">Downloads
             <p class="stats-value">${u}</p>
             </h3>
        </div>
	</a>
</li>`).join("");c.innerHTML=r,f.refresh()},l=document.querySelector(".loader"),y=document.querySelector(".search-form");y.addEventListener("submit",g);function g(a){a.preventDefault(),c.innerHTML="",l.classList.remove("hidden");const r=a.target.elements.search.value.trim().toLowerCase();r?m(r).then(s=>{s.hits.length===0&&h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),p(s.hits)}).catch(s=>alert("An error has occurred: "+s.message)).finally(()=>{a.target.reset(),l.classList.add("hidden")}):l.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
