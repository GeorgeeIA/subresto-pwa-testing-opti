const assert = require('assert');

Feature('Liking Restaurants');

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 10);

  I.seeElement('.restaurant__title a');
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
