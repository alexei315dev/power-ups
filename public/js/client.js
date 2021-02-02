/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Fstartup.png?1494946700268';

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
     return [{
      icon: BLACK_ROCKET_ICON,
      text: 'translate',
      callback: function(t) {
        return t.popup({
          title: "transBtn",
          url: 'index.html',
          height: 250
        });
      }
    }];
	},
});
