# Meatronome

Adds a tiny pointer circle to the Meatspace video preview so you can time your loops like a pro! Just drag the link below to your bookmarks.

<a href="javascript:(function(){;var%20style=document.createElement(%22style%22);style.appendChild(document.createTextNode(%22%22));document.head.appendChild(style);style.sheet.insertRule(%22#meatronome%20%7B%20height:%2010px;%20position:%20absolute;%20top:%200;%20width:%20100%25;%7D%22,0);style.sheet.insertRule(%22@-webkit-keyframes%20move%20%7B%20from%20%7B%20left:%2010%25;%20%7D%20to%20%7B%20left:%2090%25;%20%7D%20%7D%22,0);style.sheet.insertRule(%22#meatronome%20.dot%20%7B%20%20display:%20block;%20position:%20absolute;%20width:%2010px;%20height:%2010px;%20border-radius:%2010px;%20background-color:%20rgba(%200,%200,%200,%200.6%20);%20-webkit-animation:%201s%20move%20linear%200s%20infinite%20alternate;%20%7D%22,0);var%20meatronome=document.createElement(%22div%22);meatronome.id=%22meatronome%22;var%20dot=document.createElement(%22b%22);dot.className=%22dot%22;meatronome.appendChild(dot);document.querySelector(%22#video-preview%22).appendChild(meatronome);})()">Meatronome</a>

## Contributing

If you feel like working on the bookmarklet, just make changes to `meatronome.js` and run `npm run build` to make the bookmarklet and copy it to the clipboard. This step also re-writes the readme to include the updated link auto-magically.
