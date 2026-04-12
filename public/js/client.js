/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

var COLOR_ICON = BLACK_ROCKET_ICON;

TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    console.log("booyakasha");
    return [
      {
        icon: "/rocket.png",
        text: "Estimate Size",
        callback: function (t) {
          return t.popup({
            title: "Estimation",
            url: "/estimate.html",
          });
        },
      },
    ];
  },
  'format-url': function (t, options) {
    // options.url has the url that we are being asked to format
    return {
      icon: BLACK_ROCKET_ICON, // don't use a colored icon here
      text: '👉 ' + options.url + ' 👈',
      subtext: 'This will show us some text.',
      image: {
        url: 'https://www.wikihow.com/images/thumb/4/41/Get-the-URL-for-Pictures-Draft-Step-1.jpg/v4-460px-Get-the-URL-for-Pictures-Draft-Step-1.jpg', // thumbnail url
        size: 'contain' // background-size value that could be 'contain', 'original' or 'cover'
      },
      actions: [{
        text: 'Download',
        callback: (t) => {
          // you can do things like t.popup etc.
          console.log('Action clicked');
        },
      }]
      // thumbnail: COLOR_ICON // Deprecated - OK to use color icon here
    };

    // if we don't actually have any valuable information about the url
    // we can let Trello know like so:
    // throw t.NotHandled();
  }

});
