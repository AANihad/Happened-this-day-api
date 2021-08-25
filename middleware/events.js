const Event = require("../models/events");

module.exports = {
  eventsList: async (req, res, next) => {
    console.log("eventsList");
    try {
      const events = await Event.find({});
      res.json(events);
    } catch (e) {
      next({ message: e.message, status: 500 });
    }
  },
  createEvent: async (req, res, next) => {
    try {
      const { name, date, description, country, place, category, media } =
          req.body,
        event = await Event.create({
          name,
          date,
          description,
          country,
          place,
          category,
          media,
        });
      res.json(event);
    } catch (e) {
      next({ message: e.message, status: 500 });
    }
  },
  showTodayEvents: async (req, res, next) => {
    console.log("showTodayEvents");

    try {
      const events = await Event.find({});

      d = new Date();

      events.forEach((event) => {
        //console.log(event.date + " - " + d);
        if (
          event.date.getDate() === d.getDate() &&
          event.date.getMonth() === d.getMonth()
        )
          console.log(event.date + " - " + d);

        /*  console.log(event.date.getDate() == d.getDate());
        console.log(event.date.getDate() + "/" + d.getDate());
        console.log(event.date.getMonth() == d.getMonth()); */
      });

      events.filter(
        (event) =>
          event.date.getDate() === d.getDate() &&
          event.date.getMonth() === d.getMonth()
      );

      res.json(events);
    } catch (e) {
      next({ message: e.message, status: 500 });
    }
  },
  showOneEvent: async (req, res, next) => {
    console.log("showOneEvent");
    try {
      const id = req.params.id,
        event = await Event.findById(id);
      res.json(event.fixRating());
    } catch (e) {
      next({ message: e.message, status: 500 });
    }
  },
  updateEvent: async (req, res, next) => {
    try {
      const id = req.params.id,
        { date, description, place, country, media } = req.body;
      let event = await Event.findById(id);
      event.date = date ? date : event.name;
      event.description = description ? description : event.description;
      event.place = place ? place : event.place;
      event.country = country ? country : event.country;
      event.media = media ? media : event.media;
      await event.save();
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  deleteEvent: async (req, res, next) => {
    try {
      const id = req.params.id;
      let event = await Event.findById(id);
      event.remove();
      res.json(event);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showEventsCategory: async (req, res, next) => {
    try {
      const category = req.params.category,
        events = await Event.find({ category });
      res.json(events);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
};
