# Care-Go 👻💖

A cute pixel-style web application that displays random messages and images when the user clicks a button. Built with vanilla HTML, CSS, and JavaScript, the project features a retro browser-window design with a pink aesthetic and responsive layout.

## Preview

Peek-a-Go presents users with a playful interface where clicking the message button reveals a random message and image. Users can reset the page back to its original state using the power button.

## Features

* 🎀 Retro pixel-art inspired design
* 💌 Random message generator
* 🖼️ Dynamic image switching
* 🔄 Reset functionality
* 📱 Mobile-responsive layout
* 💖 Custom pink-themed UI
* ⚡ Built with vanilla JavaScript

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Google Fonts

  * Press Start 2P
  * VT323
* Font Awesome Icons

## Project Structure

```text
project-folder/
│
├── index.html
├── style.css
├── index.js
├── data.js
│
└── images/
    ├── main-image.png
    ├── image1.png
    ├── image2.png
    └── ...
```

## How It Works

1. The page loads with a default greeting and image.
2. When the user clicks **"Open Ko Ko's MESSAGE 👻"**:

   * A random entry is selected from the `data.js` array.
   * The heading, text, and image are updated dynamically.
   * The power button becomes visible.
3. Clicking the power button:

   * Restores the default heading.
   * Restores the original text.
   * Restores the default image.
   * Hides the power button.



## Data Format

The application expects a `data.js` file exporting an array similar to:

```javascript
export const data = [
  {
    heading: "Hello!",
    text: "This is a random message.",
    image: "./images/example.png"
  }
]
```

## Responsive Design

The layout automatically adjusts for smaller screens:

* Typography scales down
* Content becomes vertically stacked
* Images resize appropriately
* Navigation elements adapt to mobile screens

## Customization

### Change Theme Colors

Edit the CSS variables inside `:root`:

```css
:root {
  --pink-main: #ff80ab;
  --pink-dark: #d81b60;
}
```

### Add More Messages

Simply add additional objects to the `data` array:

```javascript
{
  heading: "New Message",
  text: "Your custom text here.",
  image: "./images/new-image.png"
}
```

### Change Default Content

Update the default values inside `index.html` and the `restart()` function in `index.js`.

## Future Improvements

* Message transition animations
* Sound effects
* Local storage for message history
* Favorite messages feature
* Dark mode support
* Multiple themes

## Author

Peter Paing 

Created with ❤️ using HTML, CSS, and JavaScript.
