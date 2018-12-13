



react VR 
course Nick Graf
https://egghead.io/courses/build-virtual-reality-experiences-using-react-vr?utm_source=drip&utm_medium=email&utm_content=react-vr


Lesson 1 references example 1
// install globally
npm install -g react-vr-cli
// create first project
react-vr init App
cd App
npm start
// in browser go to 
http://localhost:8081/vr/
or 
http://localhost:8081/vr/?hotreload=true

Lesson 2 references example 1
• on line 14 the asset method (that we import on line 4) gives us absolute pathing
• you can take 360 degree photos and bring them in. this is the same as jpgs uploaded to facebook for their 360 degree pano browser experience
• onLoad={()=>{ consolee.log(); }}    // pano property
• style={{transform:[{rotateY: -20}]}} // when this is placed on the pano it moves the position of the jpg

Jumped to last lesson
• similar to TweenMax we had flat jpegs and 3D cubes sliding in and rotating

