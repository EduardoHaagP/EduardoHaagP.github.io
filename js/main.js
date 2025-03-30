document.addEventListener('DOMContentLoaded', function() {
    const featuredImageContainer = document.getElementById('containerImgEvidente');
    let featuredImage = document.getElementById('ImagemEvidente');
    const supportingImages = document.querySelectorAll('.imagemSuporte');

    supportingImages.forEach(img => {
      img.addEventListener('click', function() {
        // Get the clicked image's source and alt text
        const newFeaturedSrc = this.src;
        const newFeaturedAlt = this.alt;

        // Get the current featured image's source and alt text
        const oldFeaturedSrc = featuredImage.src;
        const oldFeaturedAlt = featuredImage.alt;

        // Update the featured image's source and alt text
        const newImg = document.createElement('img');
        newImg.src = newFeaturedSrc;
        newImg.alt = newFeaturedAlt;
        newImg.id = 'featuredImage';
        featuredImageContainer.innerHTML = ''; //clear old image
        featuredImageContainer.appendChild(newImg); //append new image
        featuredImage = document.getElementById('featuredImage');

        // Update the clicked supporting image's source and alt text to the old featured image
        this.src = oldFeaturedSrc;
        this.alt = oldFeaturedAlt;

      });
    });
  });