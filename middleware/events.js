const Event = require("../models/events");

module.exports = {
  eventsList: async (req, res, next) => {
    console.log("eventsList");
    try {
      const events = await Event.find({});
      res.json(events);
    } catch (e) {
      res.json({ error: e.message });
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
    try {
      const events = await Event.find({});

      let filtered = events.filter(function (event) {
        let today = new Date();
        return (
          event.date.getDate() == today.getDate() && // Because dates are starting from 0
          event.date.getMonth() == today.getMonth()
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showOneEvent: async (req, res, next) => {
    try {
      const id = req.params.id,
        event = await Event.findById(id);
      res.json(event);
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
  //Show categories
  showEventsCategory: async (req, res, next) => {
    try {
      const category = req.params.category,
        events = await Event.find({ category });
      res.json(events);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showTodayEventsCategory: async (req, res, next) => {
    try {
      const category = req.params.category,
        events = await Event.find({ category });
      let filtered = events.filter(function (event) {
        let today = new Date();
        return (
          event.date.getDate() + 1 == today.getDate() &&
          event.date.getMonth() == today.getMonth()
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  /*showYearOrMonth: async (req, res, next) => {
    console.log("showYearOrMonth");
    try {
      const events = await Event.find({});
      const number =req.params.monthOryear ;
      if (number.toString().lengh <2) {
        const month = number -1;
        let filtered = events.filter(function (event) {
          return (
            event.date.getMonth() == month
            );
          });
          res.json(filtered);
         }
      else {
          let filtered = events.filter(function (event) {
            return (
              event.date.getFullYear() == Number(number));});
              res.json(filtered);
           
      }      
         
      
    } catch (e) {
      res.json({ error: e.message });
    }
  },*/
  //show events per DATE
  showYear: async (req, res, next) => {
    try {
      console.log("showMonthYear");
      const events = await Event.find({});
      const year = req.params.year;
      console.log(year);

      events.forEach((event) => {
        console.log(event.date.getFullYear());
        console.log("---");
      });

      let filtered = events.filter(function (event) {
        return (
         event.date.getFullYear() == year
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showMonth : async (req, res, next) => {
    try {
      console.log("showMonth");
      const events = await Event.find({});
      const 
        month = req.params.month - 1;
      console.log(month);

      events.forEach((event) => {
        console.log( event.date.getMonth());
        console.log("---");
      });

      let filtered = events.filter(function (event) {
        return (
         // event.date.getFullYear() == year && // Because dates are starting from 0
          event.date.getMonth() == month
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showMonthYear: async (req, res, next) => {
    try {
      console.log("showMonthYear");
      const events = await Event.find({});
      const year = req.params.year,
        month = req.params.month - 1;
      console.log(year, month);

      events.forEach((event) => {
        console.log(event.date.getFullYear(), event.date.getMonth());
        console.log("---");
      });

      let filtered = events.filter(function (event) {
        return (
         event.date.getFullYear() == year && // Because dates are starting from 0
          event.date.getMonth() == month
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showDay: async (req, res, next) => {
    try {
      console.log("showDay");
      const events = await Event.find({});
      const year = req.params.year,
        month = req.params.month - 1,
        day = req.params.day;
      let filtered = events.filter(function (event) {
        return (
          event.date.getFullYear() == year && // Because dates are starting from 0
          event.date.getMonth() == month &&
          event.date.getDate() == day
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  //show events categories per date
  showCategoryYear: async (req, res, next) => {
    try {
      console.log("showMonthYear");
      const category = req.params.category,
        events = await Event.find({ category }),
       year = req.params.year;
      console.log(year);

      events.forEach((event) => {
        console.log(event.date.getFullYear());
        console.log("---");
      });

      let filtered = events.filter(function (event) {
        return (
         event.date.getFullYear() == year
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showCategoryMonth: async (req, res, next) => {
    try {
      console.log("showCategoryMonth");
      const category = req.params.category,
        events = await Event.find({ category }),
        month = req.params.month - 1;
      console.log(month);

      events.forEach((event) => {
        console.log( event.date.getMonth());
        console.log("---");
      });

      let filtered = events.filter(function (event) {
        return (
         // event.date.getFullYear() == year && // Because dates are starting from 0
          event.date.getMonth() == month
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showCategoryMonthYear: async (req, res, next) => {
    try {
      console.log("showCategoryMonthYear");
      const category = req.params.category,
        events = await Event.find({ category });
        const year = req.params.year,
        month = req.params.month - 1;
      console.log(year, month);

      events.forEach((event) => {
        console.log(event.date.getFullYear(), event.date.getMonth());
        console.log("---");
      });

      let filtered = events.filter(function (event) {
        return (
         event.date.getFullYear() == year && // Because dates are starting from 0
          event.date.getMonth() == month
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  showCategoryDay: async (req, res, next) => {
    try {
      console.log("showCategoryDay");
      const category = req.params.category,
        events = await Event.find({ category });
        const year = req.params.year,
        month = req.params.month - 1,
        day = req.params.day;
      let filtered = events.filter(function (event) {
        return (
          event.date.getFullYear() == year && // Because dates are starting from 0
          event.date.getMonth() == month &&
          event.date.getDate() == day
        );
      });
      res.json(filtered);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
};
