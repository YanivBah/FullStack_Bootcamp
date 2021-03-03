# GitHub API

Github has an awesome API that we can do among other thing’s, is to get
information on a particular user. To get a particular github user information
just type in your browser the following:
`https://api.github.com/users/{username}` You will get back a json object. With
this knowledge we can make a fun little app. Here is a small
[demo](https://www.youtube.com/watch?v=YPjfT-u6F2Q) Please style it better than
this!

Lets create a small app that will have an input field. When you type a user’s
name in the input field you will fetch from the github api that particular users
information and display a card of the users information. That card should have
at least the following:

1. Avatar image
2. Name of user
3. Number of public repo’s

When a user clicks on the card it will open a new page to that users github
profile page.

## Things to think about:

What will happen if a user types an invalid user name? What happens if the url
is broken? What happens if a user types the same user name? We wouldn’t want to
have duplicate cards of the same profile.

## User experience

What will make a better user experience? Things come into mind:

1. When a user gets a profile we should empty our input.
2. We should focus on the input on page load and each time you get a new
   profile.
3. We should able to hit enter to search not just clicking on the button.
4. Anything else?

---
