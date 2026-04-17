/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

var COLOR_ICON = BLACK_ROCKET_ICON;

TrelloPowerUp.initialize({
  "format-url": function (t, options) {
    console.log("booyakasha");
    // options.url has the url that we are being asked to format
    return {
      icon: BLACK_ROCKET_ICON, // don't use a colored icon here
      text: "👉 " + options.url + " 👈",
      subtext: "This will show us some text.",
      image: {
        url: "https://www.wikihow.com/images/thumb/4/41/Get-the-URL-for-Pictures-Draft-Step-1.jpg/v4-460px-Get-the-URL-for-Pictures-Draft-Step-1.jpg", // thumbnail url
        size: "contain", // background-size value that could be 'contain', 'original' or 'cover'
      },
      actions: [
        {
          text: "Download",
          callback: (t) => {
            // you can do things like t.popup etc.
            console.log("Action clicked");
          },
        },
      ],
      // thumbnail: COLOR_ICON // Deprecated - OK to use color icon here
    };

    // if we don't actually have any valuable information about the url
    // we can let Trello know like so:
    // throw t.NotHandled();
  },
  "card-buttons": function (t, options) {
    console.log("card-buttons");
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
  "attachment-thumbnail": function (t, options) {
    var parkName = formatNPSUrl(t, options.url);
    if (parkName) {
      // return an object with some or all of these properties:
      // title, image, modified (Date), created (Date),
      // createdBy, modifiedBy
      console.log("attachment-thumbnail");
      return {
        title: parkName,
        image: {
          url: "./images/nps.svg",
          logo: true, // false if you are using a thumbnail of the content
        },
      };
    } else {
      throw t.NotHandled();
    }
  },
});

var formatNPSUrl = function (t, url) {
  if (!/^https?:\/\/www\.nps\.gov\/[a-z]{4}\//.test(url)) {
    return null;
  }
  var parkShort = /^https?:\/\/www\.nps\.gov\/([a-z]{4})\//.exec(url)[1];
  if (parkShort && parkMap[parkShort]) {
    return parkMap[parkShort];
  } else {
    return null;
  }
};
