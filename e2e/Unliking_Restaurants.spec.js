const assert = require('assert');

Feature('Unliking Resto');
Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked menu restaurant', ({ I }) => {
  I.dontSeeElement('.resto-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.content__heading');
  I.amOnPage('/');

  I.waitForElement('.resto__title a', 30);
  I.seeElement('.resto__title a');

  const firstRestaurant = locate('.resto__title a').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');

  const unlikedRestaurantsTitles = await I.grabTextFrom('.resto__title a');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);

  I.seeElement('.resto__title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.resto-item');
});
