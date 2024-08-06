import{a as m,S as y,i as n}from"./assets/vendor-D1eTGYtO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();async function d({searchInput:o,page:e,perPage:i}){return(await m.get("https://pixabay.com/api/",{params:{key:"45240196-18d84f3cf70a1bfd2b8ad66bc",q:o,page:e,per_page:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),L=new y(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250}),u=o=>{const e=o.map(({webformatURL:i,largeImageURL:c,tags:t,likes:a,views:l,comments:p,downloads:g})=>`<li class="gallery-item">
	<a class="gallery-link" href="${c}">
		<img
			class="gallery-image"
			src="${i}"
			alt="${t}"
			/>
        <div class="stats">
            <h3 class="stats-title">Likes
             <p class="stats-value">${a}</p>
             </h3>
            <h3 class="stats-title">Views
             <p class="stats-value">${l}</p>
             </h3>
            <h3 class="stats-title">Comments
             <p class="stats-value">${p}</p>
             </h3>
            <h3 class="stats-title">Downloads
             <p class="stats-value">${g}</p>
             </h3>
        </div>
	</a>
</li>`).join("");f.insertAdjacentHTML("beforeend",e),L.refresh()},s={loader:document.querySelector(".loader"),searchInput:document.querySelector(".search-form"),loadMore:document.querySelector(".load-btn"),gallery:document.querySelector(".gallery")};s.searchInput.addEventListener("submit",v);const r={searchInput:"",page:1,perPage:15,totalPages:0};async function v(o){if(o.preventDefault(),s.gallery.innerHTML="",r.page=1,s.loader.classList.add("hidden"),s.loadMore.classList.add("is-hidden"),r.searchInput=o.target.elements.search.value.trim(),r.searchInput===""){n.error({message:"Please entry the search!",position:"topRight",timeout:2e3,icon:""}),o.currentTarget.reset();return}try{const e=await d(r);r.totalPages=Math.ceil(e.totalHits/r.perPage),u(e.hits),r.totalPages>1?(s.loadMore.classList.remove("is-hidden"),s.loadMore.addEventListener("click",h)):s.loadMore.classList.add("is-hidden")}catch(e){n.error({message:`An error has occurred: ${e}`,position:"topRight",timeout:2e3,icon:""})}finally{o.target.reset(),s.loader.classList.add("hidden")}}async function h(o){s.loadMore.classList.add("is-hidden"),s.loader.classList.remove("hidden"),r.page+=1;try{const e=await d(r);u(e.hits)}catch(e){n.error({message:`An error has occurred:: ${e}`,position:"topRight",timeout:2e3})}finally{s.loader.classList.add("hidden");const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"}),r.page===r.totalPages?(s.loadMore.classList.add("is-hidden"),n.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",timeout:2e3,icon:""}),s.loadMore.removeEventListener("click",h)):s.loadMore.classList.remove("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
