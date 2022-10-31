import DbSource from '../../data/db-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
            <section class="content">
                <head-line></head-line>
                <div class="latest">
                    <h1 class="latest__label">Restaurant Rekomendasi</h1>
                    <arsech-bar></arsech-bar>
                    <div id="restaurants" class="restaurants">
                    </div>
                </div>
            </section>        
        `;
  },

  async afterRender() {
    const restaurants = await DbSource.home();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;
