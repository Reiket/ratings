const ratings = document.querySelectorAll('.rating'); //получаєм всі об'єкти з класом rating

if (ratings.length > 0) { //перевіряєм чи вони існують
   initRatings();
}

function initRatings() {
   let ratingActive, ratingValue;
   for (let index = 0; index < ratings.length; index++) { //перебираєм всі рейтинги
      const rating = ratings[index];
      initRating(rating); // передаєм по одному в функцію
   }

   function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating__set')) {
         setRating(rating);
      }
   }


   //іниціалізація перемінних
   function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
   }

   //Зміна ширини активних зірок

   function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
   }

   function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item');
      for (let index = 0; index < ratingItems.length; index++) {
         const ratingItem = ratingItems[index];
         ratingItem.addEventListener('click', function (e) {
            initRatingVars(rating);

            setRatingActiveWidth(ratingItem.value);
         });
      }
      console.log(ratingItems);
   }
}