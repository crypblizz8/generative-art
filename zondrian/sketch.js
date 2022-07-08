// import React from "react";
// import BaseSketch from "react-p5";
// import p5Types from "p5"; //Import this for typechecking and intellisense

const windowWidth = 500;
const windowHeight = 500;
  
const Sketch = () => {

    let circles = [];

    const MondColorsHex = [
        "#ff0000",
        "#000000",
        "#0000FF",
        "#FFFF00",
        "#FFFFFF"
    ]; // red, black, blue, yellow, white

	//See annotations in JS for more information
	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);
        p5.background(255);
        p5.stroke(0);
        p5.strokeWeight(5);
        p5.rect(0, 0, windowWidth, windowHeight);
	};

    const draw = (p5) => {
        let protection = 0;

        const drawRectangles = () => {
            for (var i = 0; i < circles.length; i++) {
                // chooseColor(p5);
                // p5.fill(41)
                let j = p5.round(p5.random(4));
                p5.fill(MondColorsHex[j]);
                p5.stroke(45);
                p5.strokeWeight(2);
                p5.rect(circles[i].x + 2, circles[i].y + 2, circles[i].w + 2 , circles[i].h + 2);
            }
        }

		while (circles.length < 10) {
            var circle = {
                x: p5.random(0,500),
                y: p5.random(0,500),
                w: p5.random(0, 500),
                h: p5.random(0, 500),
            }

            // Does it overlap any previous circles?
            var overlapping = false;
            for (var j = 0; j < circles.length; j++) {
                var other = circles[j];
                // var d = dist(circle.x, circle.y, other.x, other.y);
                var xCheck = circle.x < other.x + other.w && other.x < circle.x + circle.w;
                var yCheck = circle.y < other.y + other.h && other.y < circle.y + circle.h;
                if (xCheck && yCheck) {
                    overlapping = true;
                }
            }
            // x1 < x2+w2 AND x2 < x1+w1
            
            // If not keep it!
            if (!overlapping) {
                circles.push(circle);
                drawRectangles()
            }
            
            // Are we stuck?
            protection++;
            if (protection > 10000) {
                break;
            }
        }
        
        console.log('run')
    };

     
    // const saveImage = (p5) => {
    //     p5.save()
    // }

    return (
        <div className="flex flex-col items-center">
            <BaseSketch setup={setup} draw={draw} />
            {/* <button
				// onClick={saveImage()}
				onClick={() => console.log('xxx')}
				className="bg-black hover:bg-gray text-white font-bold py-2 px-8 rounded my-10 mx-10">
				Save Image
			</button> */}
        </div>
    ) 
    ;
};

export default Sketch