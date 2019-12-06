# Cookies

## What are cookies?
Cookies allow a JavaScript program to store data on the user's hard disk.

A "spying" of the user hard disk is just as impossible as the placement of executable code. Because you write a cookie in a JavaScript, you can not specify where the cookie is stored to the user - this controls the browser of the user. In addition, cookies can not write uncontrolled amounts of data to the user's computer, but only a limited number of lines. Each such row defines a variable and assigns a value to that variable (name-value pairs). A cookie can therefore be compared with an entry in a configuration file - with the difference that the cookie can't change configuration data of the user's computer.

## How to use cookies?

### Write a cookie
Cookies are saved as name-value pairs.
`movie = Jungle Book`

JavaScript can create, read, and delete cookies with the document.cookie property.
With JavaScript, a cookie can be created like this:
`document.cookie = "movie=Jungle Book;"`

You can also specify when the cookie **expires** like this:
`document.cookie = "movie=Jungle Book; expires=Thu, 18 Dec 2013 12:00:00 UTC"`

You can also specify where the cookie belongs to with **path** like this:
`document.cookie = "movie=Jungle Book; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"`

### Read a cookie
To read a cookie you can use the following code, this will return all cookies saved by the browser:
`var allCookies = document.cookie` returns e.g. movie=Jungle Book; cookie2=value; cookie3=value

### Delete a cookie
To delete a cookie you can use the following code, this will delete the cookie by a passed timestamp:
`document.cookie = "movie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"`

> You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don't specify the path.

[wiki]: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
