const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.resto__title a', 30);
  I.seeElement('.resto__title a');

  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.resto-item', 30);
  I.seeElement('.resto-item');

  const likedRestaurantTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 30);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto__title a', 30);
  I.seeElement('.resto__title a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__title a').at(i));

    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    names.push(await I.grabTextFrom('.resto__title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.resto-item');
  console.log(visibleLikedRestaurants);
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.resto__title').at(index + 1));
    assert.strictEqual(name, visibleTitle);
  });
});
