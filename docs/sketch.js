let stars = [];
let factor = 75;
let speedSlider;
//let pg;

function setup() {
    //let canva = 
    //let radius = 0.1;
    createCanvas(windowWidth, windowHeight);
    speedSlider = createSlider(0, 20, 2, 0.1);
    for (let i = 0; i < 200; i++) {
        stars[i] = createVector(
            random(-width * factor, width * factor),
            random(-height * factor, height * factor),
            random(windowWidth)
        );
        stars[i].pz = stars[i].z;
    }
    //pg=createGraphics(windowWidth, windowHeight, canva);


}

function draw() {

    translate(width/2 , height/2);

    background(0);

    /*for (let bg = 0; bg < 255; bg ++){
        background(bg);
    }*/


    for (let star of stars) {

        //radius += 0.1;

        let x = star.x / star.z;
        let y = star.y / star.z;
        let px = star.x / star.pz;
        let py = star.y / star.pz;
        let d = map(star.z, 0, 400, 10, 1);

        fill(2555);

        noStroke(20);
        circle(x, y, d);

        stroke(255);
        line(x, y, px, py);


        star.pz = star.z;
        star.z -= speedSlider.value();

        if (star.z < 1) {
            star.x = random(-width * factor, width * factor),
                star.y = random(-height * factor, height * factor),
                star.z = 400;
            star.pz = 400;
        }
    }
    /*pg.background(100);
    pg.noStroke();
    pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
    image(pg, 50, 50);
    //image(pg, 0, 0, 50, 50);*/
}