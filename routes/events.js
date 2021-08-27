const express = require("express"),
  {
    eventsList,
    showTodayEvents,
    createEvent,
    showEventsCategory,
    showCategoryYear,
    showCategoryMonth,
    showCategoryMonthYear,
    showCategoryDay,
    showTodayEventsCategory,
    showOneEvent,
    updateEvent,
    deleteEvent,
    showYear,
    showMonthYear,
    showMonth,
    showDay,
    showYearMonth,
  } = require("../middleware/events"),
  router = express.Router();

router.route("/").get(showTodayEvents).post(createEvent);
router.route("/Date/m/:month/").get(showMonth);
router.route("/Date/y/:year/").get(showYear);
router.route("/Date/:year/:month/").get(showYearMonth);
router.route("/Date/:year/:month/:day").get(showDay);
router.route("/all").get(eventsList);

//categories
router.route("/category/:category").get(showTodayEventsCategory);
router.route("/category/:category/all").get(showEventsCategory);
//Date Category
router.route("/category/:category/Date/y/:year").get(showCategoryYear);
router.route("/category/:category/Date/m/:month").get(showCategoryMonth);
router
  .route("/category/:category/Date/:year/:month")
  .get(showCategoryMonthYear);
router.route("/category/:category/Date/:year/:month/:day").get(showCategoryDay);

router
  .route("/events/:id")
  .get(showOneEvent)
  .put(updateEvent)
  .delete(deleteEvent);
//router.route("/Date/:monthOryear/").get(showYearOrMonth);

//Date
router.route("/Date/m/:month/").get(showMonth);
router.route("/Date/y/:year/").get(showYear);
router.route("/Date/:year/:month/").get(showMonthYear);
router.route("/Date/:year/:month/:day").get(showDay);
module.exports = router;
