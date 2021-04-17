const Url = require("../models/url");
const validUrl = require("valid-url");
const { nanoid } = require("nanoid");
const { errorName } = require("../utils/constants");
const config = require("config");
const baseUrl = config.get("baseUrl");

const resolvers = {
  urls: (_, args) => {
    return Url.find();
  },
  shortenUrl: async ({ longUrl }) => {
    if (!validUrl.isUri(longUrl)) {
      throw new Error(errorName.INVALID_URL);
    }

    const urlCode = nanoid(6);

    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        return url;
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        return url;
      }
    } catch (error) {
      console.log(error.message);
      throw new Error(errorName.SERVER_ERROR);
    }
  },
};

module.exports = resolvers;
