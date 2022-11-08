let loadMoreBtn = document.querySelector('#loadMore');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.galleryShowcase .galleryImageContainer .galleryItem')];
   for (var i = currentItem; i < currentItem + 4; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 4;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
