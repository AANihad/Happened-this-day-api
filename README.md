# Happened this day api
A simple REST api made using Node-JS  and mongoDB dedicated to recovering the events set on a given date, from a specific category.

## How the REST-API works:
variables such as `:month` should be replaced by the their value such as (from 01 to 12).
Example : `http://localhost:3000/events/Date/1973/06/10` is a valid address.

| Displaying                       | Using dates                   | Example                          |
| -------------------------------- | ----------------------------- | -------------------------------- |
| All events today                 | events/                       |                                  |
| A specific event using ID        | events/:id                    | /events/6126685a57b9a540dc7b5015 |
| From a specific month (01 to 12) | events/Date/m/:month/         | /events/Date/m/08                |
| All events from a specific year  | events/Date/y/:year/          | /events/Date/y/1952              |
| Year and Month                   | events/Date/:year/:month/     | /events/Date/1842/04             | 
| Full Date                        | events/Date/:year/:month/:day | /events/Date/1973/06/10          |
| All events (the full database)   | events/all                    |                                  |

The category can be one of : "History", "Sports", "Music", "Movies", "Theater", "Cultural", "Video Games", "Science", "Litterature", "Birthdays", "Anime & Manga".
		
|                                                     | Using categories              | Example | 
| --------------------------------------------------- | ----------------------------- | ------- |
| All the events from a category that happended today | events/category/:category     | events/category/:music         |
| All the events from a category                      | events/category/:category/all | events/category/:Anime%20&%20Manga/all         |

| Display all the events from a category in a specific | Using Category and date                          | Example                                        |
| ---------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| year                                                 | events/category/:category/Date/y/:year           | /events/category/Anime%20&%20Manga/Date/y/1997 |
| month                                                | events/category/:category/Date/m/:month          | /events/category/History/Date/m/08             |
| month of a specific year                             | eventscategory/:category/Date/:year/:month       | events/category/Birthdays/Date/1849/08              | 
| date                                                 | events/category/:category/Date/:year/:month/:day | /events/category/Science/Date/1973/06/10       |
