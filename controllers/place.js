const { Router } = require("express");
const Place = require("../models/place");
// Create router
const router = Router();

// Seed data
const placeSeed = [
  {
    name: "Mt. Everest",
    img: "https://media.gq.com/photos/5dcaf2db81b355000904c757/master/pass/mount-everest-gq-men-of-the-year-2019-lede.jpg",
    description: "This is a Mountain",
  },
  {
    name: "Lake Eola",
    img: "https://a.cdn-hotels.com/gdcs/production142/d1678/02312c78-cd46-4e43-b6c6-d174700968a8.jpg",
    description: "This is a Lake",
  },
  {
    name: "Mall Of America",
    img: "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2016-11/IMG_7491_0.jpg?itok=lrDxDud3",
    description: "This is a Mall",
  },
];

// Routes --
router.get("/seed", async (req, res) => {
  try {
    await Place.remove({});
    await Place.create(placeSeed);
    const places = await Place.find({});
    res.json(places);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Index route - return all Places from db
router.get("/", async (req, res) => {
  res.json(await Place.find({}).catch((error) => res.status(400).json(error)));
});

// Create route - (post) a new Place
router.post("/", async (req, res) => {
  res.json(
    await Place.create(req.body).catch((error) => res.status(400).json(error))
  );
});

// Update route = (put) update a Place from db
router.put("/:id", async (req, res) => {
  res.json(
    await Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).catch(
      (error) => res.status(400).json(error)
    )
  );
});

// Destroy route - (delete) an item by :id
router.delete("/:id", async (req, res) => {
  res.json(
    await Place.findByIdAndRemove(req.params.id).catch((error) =>
      res.status(400).json(error)
    )
  );
});

module.exports = router;
