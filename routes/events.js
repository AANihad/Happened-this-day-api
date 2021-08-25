const express = require("express"),
  {
    eventsList,
    showTodayEvents,
    createEvent,
    showEventsCategory,
    showOneEvent,
    updateEvent,
    deleteEvent,
  } = require("../middleware/events"),
  router = express.Router();

router.route("/").get(showTodayEvents).post(createEvent);
router.route("/categories/:category").get(showEventsCategory);
//router.route("/:id").get(showOneEvent).put(updateEvent).delete(deleteEvent);

module.exports = router;
