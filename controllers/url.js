const Url = require("../models/url-data");
const tiny = require("turl")

exports.shortenUrl = async (req, res, next) => {
  try {
    const originalUrl = req.body.originalUrl;
   
    const shortUrl = tiny(originalUrl)

    const url = new Url({
      originalUrl: originalUrl,
      shortUrl: shortUrl
    });

    await url.save();
    console.log(url.shortUrl)
    res.status(200).json({ shortUrl });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.redirectUrl = async (req, res, next) => {
  try {
      const shortUrl = req.params.shortUrl;
 

      const url = await Url.findOne({ shortUrl });
      console.log("Retrieved URL:", url); 

      if (url) {
          console.log("Original URL:", url.originalUrl); 
          res.redirect(url.originalUrl);
      } else {
          console.log("URL not found"); 
          res.status(404).json({ error: 'URL not found' });
      }
  } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
