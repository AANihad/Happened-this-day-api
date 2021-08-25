const express = require("express"),
  {
    eventsList,
    showTodayEvents,
    createEvent,
    showEventsCategory,
    showTodayEventsCategory,
    showOneEvent,
    updateEvent,
    deleteEvent,
  } = require("../middleware/events"),
  router = express.Router();

router.route("/").get(showTodayEvents).post(createEvent);
router.route("/all").get(eventsList);
router.route("/:category").get(showTodayEventsCategory);
router.route("/:category/all").get(showEventsCategory);
router
  .route("/events/:id")
  .get(showOneEvent)
  .put(updateEvent)
  .delete(deleteEvent);

module.exports = router;
