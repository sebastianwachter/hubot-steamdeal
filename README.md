hubot-steamdeal
===============

Ask your hubot for the current daily steamdeal.

## Installation

Run the following command:
```
$ npm install hubot-steamdeal
```

Then make sure the dependencies are installed:
```
$ npm install
```

You may also want to consider running the first command with the `--save` option to add it to your package.json so you don't have to install it manually every time.

## Usage

Your hubot will listen to the following commands:<br /><br />

This is the basic functionality. Inform you about the current daily deal.<br />

`hubot steamdeal me`

```
hubot> <link to image here> 
hubot> Instead of 14.99€ you get Windward for 4.94€! That's -67%!
hubot> <link to the game here>
```

---

The full functionality: The above functionality and the description of the game is shown (it may be very long keep that in mind).

`hubot steamdeal full`

```
hubot> <link to image here> 
hubot> Instead of 14.99€ you get Windward for 4.94€! That's -67%!
hubot> <description of the game here>
hubot> <link to the game here>
```

