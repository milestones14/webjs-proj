// app.js

// Create a vertical container that centers its children
const app = WebJS.container.vertical()
    .width("100%")
    .height("100vh")
    .justifyContent("center")
    .alignItems("center");

// Create a heading
const heading = WebJS.element.h1("Hello World")
    .color(WebJS.color.blue)
    .fontSize(48)
    .font(WebJS.font.sansSerif)
    .textAlign("center")
    .margin({ bottom: 20 });

// Create a button
const button = WebJS.element.button("Click Me")
    .padding({ top: 12, bottom: 12, left: 24, right: 24 })
    .onClick(() => alert("Button clicked!"));

// Append header and button to the container
app.append(heading);
app.append(button);

// Mount the app to the body
WebJS.mount(app);