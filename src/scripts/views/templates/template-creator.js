import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster lazyload" loading="lazy" type="jpg/webp" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Kategori</h4>
    <p>
      ${restaurant.categories.map((categories) => `${categories.name}`).join('')}
    </p>
  </div>
  <div class="resto__overview">
    <h3>Menu :</h3>
    <p>Makanan : ${restaurant.menus.foods.map((food) => food.name)}</p>
    <p>Minuman : ${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    <h3>Overview : </h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurantInfo">
      ${restaurant.customerReviews.map((review) => `
          <div class="restaurantInfoList">
              <h6 tabindex="0">${review.name}</h6>
              <p tabindex="0" class="date-review">${review.date}</p>
              <p tabindex="0">${review.review}</p>
          </div>
      `).join('')}
  </div>
`;

const createItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${restaurant.name || '-'}" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" type="jpg/webp">
      <div class="resto-item__header__rating">
        <p><i class="fa-sharp fa-solid fa-star"></i><span class="resto-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
