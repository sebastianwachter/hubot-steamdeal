'use strict';

const cheerio = require('cheerio');
const got = require('got');

module.exports = (robot) => {
  robot.hear('steamdeal', (msg) => {
    got('http://store.steampowered.com').then((res) => {
      var body = res.body;
      if (res.statusCode !== 200) return msg.send('Steam currently unavailable!');

      let $ = cheerio.load(body);
      let id = $('.dailydeal_ctn .dailydeal_cap').attr('data-ds-appid');
      let url = `http://store.steampowered.com/api/appdetails/?appids=${id}`;
      got(url, { json: true }).then((res) => {
        let game = res.body[id].data;
        let name = game.name;
        let price = game.price_overview;
        let final = price.final / 100;
        let initial = price.initial / 100;
        let discount = price.discount_percent;
        msg.send(`Instead of ${initial}€ you get ${name} for ${final}€! That\'s -${discount}%!`);
        msg.send(game.header_image);
      });
    });
  });
};
