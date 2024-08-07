import{a as m,S as y,i as c}from"./assets/vendor-D1eTGYtO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();async function d({searchInput:o,page:e,perPage:i}){return(await m.get("https://pixabay.com/api/",{params:{key:"45240196-18d84f3cf70a1bfd2b8ad66bc",q:o,page:e,per_page:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),L=new y(".gallery-item a",{className:"js-lightbox",overlayOpacity:.8,captionsData:"alt",captionDelay:250}),u=o=>{const e=o.map(({webformatURL:i,largeImageURL:n,tags:t,likes:s,views:l,comments:g,downloads:p})=>`<li class="gallery-item">
	<a class="gallery-link" href="${n}">
		<img
			class="gallery-image"
			src="${i}"
			alt="${t}"
			/>
        <div class="stats">
            <h3 class="stats-title">Likes
             <p class="stats-value">${s}</p>
             </h3>
            <h3 class="stats-title">Views
             <p class="stats-value">${l}</p>
             </h3>
            <h3 class="stats-title">Comments
             <p class="stats-value">${g}</p>
             </h3>
            <h3 class="stats-title">Downloads
             <p class="stats-value">${p}</p>
             </h3>
        </div>
	</a>
</li>`).join("");f.insertAdjacentHTML("beforeend",e),L.refresh()},a={loader:document.querySelector(".loader"),searchInput:document.querySelector(".search-form"),loadMore:document.querySelector(".load-btn"),gallery:document.querySelector(".gallery")};a.searchInput.addEventListener("submit",v);const r={searchInput:"",page:1,perPage:15,totalPages:0};async function v(o){if(o.preventDefault(),a.gallery.innerHTML="",r.page=1,a.loader.classList.add("hidden"),a.loadMore.classList.add("is-hidden"),r.searchInput=o.target.elements.search.value.trim(),r.searchInput===""){c.error({message:"Please entry the search!",position:"topRight",timeout:2e3,icon:""}),o.currentTarget.reset();return}try{const e=await d(r);e.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,icon:""}),r.totalPages=Math.ceil(e.totalHits/r.perPage),u(e.hits),r.totalPages>1?(a.loadMore.classList.remove("is-hidden"),a.loadMore.addEventListener("click",h)):a.loadMore.classList.add("is-hidden")}catch(e){c.error({message:`An error has occurred: ${e}`,position:"topRight",timeout:2e3,icon:""})}finally{o.target.reset(),a.loader.classList.add("hidden")}}async function h(o){a.loadMore.classList.add("is-hidden"),a.loader.classList.remove("hidden"),r.page+=1;try{const e=await d(r);u(e.hits)}catch(e){c.error({message:`An error has occurred:: ${e}`,position:"topRight",timeout:2e3})}finally{a.loader.classList.add("hidden");const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"}),r.page===r.totalPages?(a.loadMore.classList.add("is-hidden"),c.info({message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",timeout:2e3,icon:""}),a.loadMore.removeEventListener("click",h)):a.loadMore.classList.remove("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
