let canvas_side_bar_perm = new fabric.Canvas('canvas_side_bar_perm',{preserveObjectStacking: true,  });
let canvas_side_tools_right = new fabric.Canvas('canvas_side_tools_right',{preserveObjectStacking: true });

canvas_side_bar_perm.selection = false;
canvas_side_tools_right.selection = false;

let win_width = window.innerWidth;
let win_height = window.innerHeight *0.08;
let containerSize = {
    width: document.getElementById('canvas-overAll').offsetWidth,
    height: document.getElementById('canvas-overAll').offsetHeight
};

let canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
};
let screenFactor = Math.min(containerSize.width / canvasSize.width, containerSize.height / canvasSize.height);
let buttonfactor = 0.4;
//let buttonwidth = buttonfactor * win_width;
//let buttonheight = win_height * 0.5;
let buttondist = 25;
let textSize = win_width * 0.01 * screenFactor;
let dist_to_top = 25;

function changeGeodesicWidth(targetWidth){
    chosenGeodesicGlobalID = -1;
    for (let ii = 0; ii < geodesics.length; ii++) {

        for (let jj = 0; jj < geodesics[ii].length; jj++) {
            geodesics[ii][jj].strokeWidth = 2;
        }
    }
}

/*
let scroll;
fabric.Image.fromURL('scroll.png', function(img) {
    scroll = img.set({
        left: 80,
        top: window.innerHeight/2,
        opacity: 1,
        originX: "left",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: true,
        lockMovementX: true,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    scroll.on('mousedown', function(opt) {

        if (dist_to_top + 11 * (136 * buttonfactor * screenFactor + buttondist) < window.innerHeight || geodesicButtonsvisible !== true) {
            this.lockMovementY = true;
            console.log('true');
            return
        }

    });

    scroll.on('moving', function(opt) {

        if(this.top > window.innerHeight){
            this.set('top' , window.innerHeight).setCoords();
        }

        if(this.top < 0){
            this.set('top' , 0).setCoords();
        }

        let lastValueSlider = 0.00;
        let startValueSlider;
        startValueSlider = this.top - window.innerHeight / 2 ;


        //Die Rapidität wird wie üblich mit theta abgekürzt

        let theta = (startValueSlider - lastValueSlider) / window.innerHeight; // '-' damit der Sektor nach oben verscheert wird
        console.log(theta)

        canvas_side_bar_perm.viewportTransform[5] = (dist_to_top + 11 * (136 * buttonfactor * screenFactor + buttondist) - window.innerHeight)/window.innerHeight * theta

    });


    canvas_side_bar_perm.add(scroll);
});

*/

canvas_side_bar_perm.on('mouse:wheel', function(opt) {

    if (dist_to_top + 12 * (136 * buttonfactor * screenFactor + buttondist) < window.innerHeight || geodesicButtonsvisible !== true) {
        return
    }


    var delta = -opt.e.deltaY;

    console.log(canvas_side_bar_perm.viewportTransform[5] += delta * 10)
    if (this.viewportTransform[5] <  window.innerHeight - (dist_to_top + 12 * (136 * buttonfactor * screenFactor + buttondist))){

        this.viewportTransform[5] = window.innerHeight - (dist_to_top + 12 * (136 * buttonfactor * screenFactor + buttondist));
        this.requestRenderAll();

    }else{
        if ((canvas_side_bar_perm.viewportTransform[5] += delta * 10) >= 0){

        this.viewportTransform[5] = 0;
        this.requestRenderAll();

    }else {

        canvas_side_bar_perm.viewportTransform[5] += delta * 10;
        console.log('ergebnis:', canvas_side_bar_perm.viewportTransform[5])
        this.requestRenderAll();
        }
    }
});

canvas_side_bar_perm.on('mouse:down', function(opt) {

    if (dist_to_top + 12 * (136 * buttonfactor * screenFactor + buttondist) < window.innerHeight || geodesicButtonsvisible !== true) {
        return
    }

    let onSector = true;
    if(opt.target == null){ onSector=false}

    var evt = opt.e;
    let e =opt.e;
    let XCoord;
    let YCoord;
    let touch = e.touches;
    if ( onSector === false) {

        if (typeof touch !== 'undefined' ) {
            XCoord = touch[0].clientX;
            YCoord = touch[0].clientY;
        }else {
            XCoord = e.clientX;
            YCoord = e.clientY;
        }

        this.isDragging = true;
        //this.selection = false;
        this.lastPosX = XCoord;
        this.lastPosY = YCoord;
    }
});

canvas_side_bar_perm.on('mouse:move', function(opt) {
    if (shiftPressed === true) return;
    if (this.isDragging) {

        var e = opt.e;

        let YCoord;
        let touch = e.touches;


        if (typeof touch !== 'undefined') {

            YCoord = touch[0].clientY;
        } else {

            YCoord = e.clientY;
        }


        console.log(canvas_side_bar_perm.viewportTransform[5] += YCoord - this.lastPosY)
        if ((canvas_side_bar_perm.viewportTransform[5] += YCoord - this.lastPosY) < window.innerHeight - (dist_to_top + 12 * (136 * buttonfactor * screenFactor + buttondist))) {

            this.viewportTransform[5] = window.innerHeight - (dist_to_top + 12 * (136 * buttonfactor * screenFactor + buttondist))

        } else {
            if ((canvas_side_bar_perm.viewportTransform[5] += YCoord - this.lastPosY) >= 0) {

                this.viewportTransform[5] = 0

            } else {

                this.viewportTransform[5] += YCoord - this.lastPosY;

                this.requestRenderAll();

                this.lastPosY = YCoord;

            }
        }
    }
});

canvas_side_bar_perm.on('mouse:up', function(opt) {

    if (shiftPressed === true) return;
    this.isDragging = false;
    //this.selection = false;
    this.forEachObject(function(o) {
        o.setCoords();
    });
    this.renderAll();
});

let shadowOn = {
    color: '#888888',
    blur: 60,
    offsetX: 0,
    offsetY: 0,
    opacity: 0.8
}

let shadowOff = {
    color: '#888888',
    blur: 0,
    offsetX: 0,
    offsetY: 0,
    opacity: 0.8
}

let back_language;
if(language == "german"){
    back_language = 'german.html'
}
if(language == "english"){
    back_language = 'english.html'
}

fabric.Image.fromURL('back.png', function(img) {
    let back = img.set({
        left: 51.5,
        top: dist_to_top + 0 * 136 * buttonfactor * screenFactor ,
        opacity: 1,
        originX: "center",
        originY: "top",
        //perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});


    back.on('mousedown', function (o) {
        back.setShadow(shadowOn);
        canvas_side_bar_perm.renderAll()
    });

    back.on('mouseout', function (o) {
        back.setShadow(shadowOff);
        canvas_side_bar_perm.renderAll()
    });

    back.on('mouseup', function (o) {
        back.setShadow(shadowOff);
        window.location = back_language;
    });
    canvas_side_bar_perm.add(back);
});

//Unter Vorsicht!!!!
//Mögliche Screenshot-Funktion
window.addEventListener('keydown',function(event){
    let canvasToDownload = document.getElementById("canvas");
    if(event.key === 'q') {

        canvasToDownload.toBlob(function(blob) {
            saveAs(blob, "ergebnis.png");
        });
    }

});


fabric.Image.fromURL('restart.png', function(img) {
    let restart = img.set({
        left: 51.5 ,
        top: dist_to_top + 1 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 1,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    restart.on('mousedown', function (o) {
        restart.setShadow(shadowOn);
        canvas_side_bar_perm.renderAll()
    });

    restart.on('mouseout', function (o) {
        restart.setShadow(shadowOff);
        canvas_side_bar_perm.renderAll()
    });

    restart.on('mouseup', function (o) {
        restart.setShadow(shadowOff);
        showGeodesicButtons(false);
        removeLines();
        addGeodreieck(false);
        canvas_side_bar_perm.renderAll();

    });
    canvas_side_bar_perm.add(restart);
});

fabric.Image.fromURL('reset.png', function(img) {
    let reset = img.set({
        left: 51.5,
        top: dist_to_top + 2 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 1,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    reset.on('mousedown', function (o) {
        reset.setShadow(shadowOn);
        canvas_side_bar_perm.renderAll()
    });

    reset.on('mouseout', function (o) {
        reset.setShadow(shadowOff);
        canvas_side_bar_perm.renderAll()
    });

    reset.on('mouseup', function (o) {
        reset.setShadow(shadowOff);
        changeGeodesicWidth(2);
        showGeodesicButtons(false);
        resetSectors();
        addGeodreieck(false);
        canvas_side_bar_perm.renderAll()

    });
    canvas_side_bar_perm.add(reset);
});

/*
fabric.Image.fromURL('grab.png', function(img) {
    let grab = img.set({
        left: 51.5,
        top: 3 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 1,
        originX: "center",
        originY: "top",
        //perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    grab.on('mousedown', function (o) {
        showGeodesicButtons(false);
        toolChange('grab');

        let side_bar_for_change = document.getElementById("container_side_bar_temp");
        side_bar_for_change.style.zIndex = 0;

    });

    canvas_side_bar_perm.add(grab);
});
*/

let undo;
fabric.Image.fromURL('undo.png', function(img) {
    undo = img.set({
        left: 51.5,
        top: dist_to_top + 3 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 1,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    undo.on('mousedown', function (o) {
        undo.setShadow(shadowOn);
        canvas_side_bar_perm.renderAll()
    });

    undo.on('mouseout', function (o) {
        undo.setShadow(shadowOff);
        canvas_side_bar_perm.renderAll()
    });

    undo.on('mouseup', function (o) {
        undo.setShadow(shadowOff);
        undoLastLine();
        changeGeodesicWidth(2);
        showGeodesicButtons(false);
        toolChange('grab');
        canvas_side_bar_perm.renderAll()

    });

    canvas_side_bar_perm.add(undo);
});

let add;
fabric.Image.fromURL('add.png', function(img) {
     add = img.set({
        left: 51.5,
        top:  dist_to_top + 4 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 1,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    add.on('mousedown', function (o) {
        add.setShadow(shadowOn);
        canvas_side_bar_perm.renderAll()
    });

    add.on('mouseout', function (o) {
        add.setShadow(shadowOff);
        canvas_side_bar_perm.renderAll()
    });

    add.on('mouseup', function (o) {
        changeGeodesicWidth(2);
        showGeodesicButtons(false);
        toolChange('paint');
        geodreieck.selectable = false;
        //add.opacity = 0;
        //add_dark.opacity = 1;
        canvas_side_bar_perm.renderAll()
    });
    canvas_side_bar_perm.add(add);
});



let add_dark;
fabric.Image.fromURL('add_dark.png', function(img) {
    add_dark = img.set({
        left: 51.5,
        top:  dist_to_top + 4 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 0,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    add_dark.on('mousedown', function (o) {
        add_dark.setShadow(shadowOn);
        canvas_side_bar_perm.renderAll()
    });

    add_dark.on('mouseout', function (o) {
        add_dark.setShadow(shadowOff);
        canvas_side_bar_perm.renderAll()
    });

    add_dark.on('mouseup', function (o) {
        add_dark.setShadow(shadowOff);
        changeGeodesicWidth(2);
        showGeodesicButtons(false);
        toolChange('grab');
        geodreieck.selectable = true;
        //add.opacity = 1;
        //add_dark.opacity = 0;
        canvas_side_bar_perm.renderAll()
    });
    canvas_side_bar_perm.add(add_dark);
});



let button_dreieck;


function addGeodreieck(geodreieckToAdd){
    if (geodreieckToAdd == true){
        canvas.add(geodreieck);

        let zoom = canvas.getZoom();

        let viewpoint_x = fabric.util.invertTransform(canvas.viewportTransform)[4]+(canvas.width/zoom)/2;
        let viewpoint_y = fabric.util.invertTransform(canvas.viewportTransform)[5]+(canvas.height/zoom)/2;

        geodreieck.set('left', viewpoint_x);
        geodreieck.set('top', viewpoint_y);

        geodreieck.setCoords();
        button_dreieck.opacity = 0;
        button_dreieck_empty.opacity = 1;

    } else{
        canvas.remove(geodreieck);
        button_dreieck.opacity = 1;
        button_dreieck_empty.opacity = 0;

    }

}

fabric.Image.fromURL('button_dreieck.png', function(img) {
    button_dreieck = img.set({
        left: 51.5,
        top:  dist_to_top + 5 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 1,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    button_dreieck.on('mousedown', function (o) {
        button_dreieck.setShadow(shadowOn);
    });

    button_dreieck.on('mouseout', function (o) {
        button_dreieck.setShadow(shadowOff);
    });

    button_dreieck.on('mouseup', function (o) {
        button_dreieck.setShadow(shadowOff);
        changeGeodesicWidth(2);
        showGeodesicButtons(false);
        toolChange('grab');
        addGeodreieck(true);
        canvas_side_bar_perm.renderAll()

    });
    canvas_side_bar_perm.add(button_dreieck);
});

let button_dreieck_empty;
fabric.Image.fromURL('button_dreieck_empty.png', function(img) {
    button_dreieck_empty = img.set({
        left: 51.5,
        top:  dist_to_top + 5 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 0,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    button_dreieck_empty.on('mousedown', function (o) {
        button_dreieck_empty.setShadow(shadowOn);
    });

    button_dreieck_empty.on('mouseout', function (o) {
        button_dreieck_empty.setShadow(shadowOff);
    });

    button_dreieck_empty.on('mouseup', function (o) {
        button_dreieck_empty.setShadow(shadowOff);
        //changeGeodesicWidth(2);
        //showGeodesicButtons(false);
        //toolChange('grab');
        addGeodreieck(false);
        canvas_side_bar_perm.renderAll()
    });

    button_dreieck_empty.on('mouseover', function (o) {

        if (geodreieckIsClicked == true) {
            //changeGeodesicWidth(2);
            //showGeodesicButtons(false);
            //toolChange('grab');
            addGeodreieck(false);
        }
    });

    canvas_side_bar_perm.add(button_dreieck_empty);
});


/*
canvas_side_bar_perm.on('mouse:over', function(e) {
    if (e.target == null){
        return
    }
    e.target.set('fill', '#FFFC1C');
    canvas_side_bar_perm.renderAll();
});

canvas_side_bar_perm.on('mouse:out', function(e) {
    if (e.target == null){
        return
    }
    if (e.target.isPressed == false) e.target.set('fill', '#e5e5e0');
    canvas_side_bar_perm.renderAll();
});
*/


let geodesicButtonsvisible;

function showGeodesicButtons(geodesicButtonsVisibleToSet) {
    if (geodesicButtonsVisibleToSet == true) {

        geodesicButtonsvisible = true;

        autocomplete.set('opacity', 1);
        direction.set('opacity', 1);
        set_sectors.set('opacity', 1);
        delete_whole.set('opacity', 1);


    }else {

        geodesicButtonsvisible = false;

        autocomplete.set('opacity', 0);
        direction.set('opacity', 0);
        set_sectors.set('opacity', 0);
        delete_whole.set('opacity', 0);
        canvas_side_bar_perm.viewportTransform[5] = 0;
        canvas_side_bar_perm.forEachObject(function(o) {
            o.setCoords();
        });

    }
    moveDirectionButtons(false);
    canvas_side_bar_perm.renderAll()

}



let autocomplete;
fabric.Image.fromURL('autocomplete.png', function(img) {
    autocomplete = img.set({
        left: 51.5,
        top: dist_to_top + 6 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 0,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    autocomplete.on('mousedown', function (o) {
        autocomplete.setShadow(shadowOn);
    });
    autocomplete.on('mouseout', function (o) {
        autocomplete.setShadow(shadowOff);
    });

    autocomplete.on('mouseup', function (o) {
        autocomplete.setShadow(shadowOff);
        continueGeodesic(chosenGeodesicGlobalID);
        toolChange('grab');

        moveDirectionButtons(false);
    });
    canvas_side_bar_perm.add(autocomplete);
});


let direction;
let visible = false;

function moveDirectionButtons(visibleToSet){

    if (visibleToSet == true) {
        visible = true;
        set_sectors.set('top', dist_to_top + 9.5 * (136 * buttonfactor * screenFactor + buttondist));
        set_sectors.setCoords();

        delete_whole.set('top', dist_to_top + 10.5 * (136 * buttonfactor * screenFactor + buttondist));
        delete_whole.setCoords();

        change_direction_counterclock_high.set('opacity', 1);
        change_direction_clockwise_high.set('opacity', 1);
        change_direction_counterclock_low.set('opacity', 1);
        change_direction_clockwise_low.set('opacity', 1)

    } else {
        visible = false;
        set_sectors.set('top', dist_to_top + 8 * (136 * buttonfactor * screenFactor + buttondist));
        set_sectors.setCoords();
        delete_whole.set('top', dist_to_top + 9 * (136 * buttonfactor * screenFactor + buttondist));
        delete_whole.setCoords();

        change_direction_counterclock_high.set('opacity', 0);
        change_direction_clockwise_high.set('opacity', 0);
        change_direction_counterclock_low.set('opacity', 0);
        change_direction_clockwise_low.set('opacity', 0)
    }
}

fabric.Image.fromURL('direction.png', function(img) {
    direction = img.set({
        left: 51.5,
        top: dist_to_top + 7 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 0,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    direction.on('mousedown', function (o) {
        direction.setShadow(shadowOn);
    });
    direction.on('mouseout', function (o) {
        direction.setShadow(shadowOff);
    });

    direction.on('mouseup', function (o) {
        direction.setShadow(shadowOff);
        if (visible == true) {
            moveDirectionButtons(false)
        }else moveDirectionButtons(true)
        canvas_side_bar_perm.renderAll()
    });
    canvas_side_bar_perm.add(direction);
});

let timeout;
let scalefactorclockbutton = 0.3;
let buttondist_local = 10 * screenFactor;

let change_direction_counterclock_high;
fabric.Image.fromURL('button_change_direction_counterclock_high.png', function(img) {
    change_direction_counterclock_high = img.set({
        left: 50 - 5 *screenFactor,
        top: dist_to_top + 8 * (136 * buttonfactor * screenFactor + buttondist),
        originX: "right",
        originY: "top",
        perPixelTargetFind: true,
        opacity: 0,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: scalefactorclockbutton * screenFactor,
        scaleY: scalefactorclockbutton * screenFactor,
        hoverCursor: "pointer"});

    change_direction_counterclock_high.on('mousedown', function (event) {

        change_direction_counterclock_high.setShadow(shadowOn);

        changeDirectionAndContinue('counterclockwise', Math.PI/180, chosenGeodesicGlobalID);
        timeout = setInterval(function (event){changeDirectionAndContinue('counterclockwise', Math.PI/180, chosenGeodesicGlobalID);}, 151.5);
        toolChange('grab');
        arrowheadline = -1;
        return false;
    });

    change_direction_counterclock_high.on('mouseout', function () {
        change_direction_counterclock_high.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab');
    });

    change_direction_counterclock_high.on('mouseup', function () {
        change_direction_counterclock_high.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab');
    });

    canvas_side_bar_perm.add(change_direction_counterclock_high);
});

let change_direction_clockwise_high;
fabric.Image.fromURL('button_change_direction_clockwise_high.png', function(img) {
    change_direction_clockwise_high = img.set({
        left: 50 + 5 *screenFactor,
        top: dist_to_top + 8 * (136 * buttonfactor * screenFactor + buttondist),
        originX: "left",
        originY: "top",
        perPixelTargetFind: true,
        opacity: 0,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: scalefactorclockbutton * screenFactor,
        scaleY: scalefactorclockbutton * screenFactor,
        hoverCursor: "pointer"});

    change_direction_clockwise_high.on('mousedown', function (event) {
        change_direction_clockwise_high.setShadow(shadowOn);
        changeDirectionAndContinue('clockwise', Math.PI/180, chosenGeodesicGlobalID);
        timeout = setInterval(function (event){changeDirectionAndContinue('clockwise', Math.PI/180, chosenGeodesicGlobalID);}, 151.5);
        toolChange('grab');
        arrowheadline = -1;
        return false;
    });

    change_direction_clockwise_high.on('mouseout', function () {
        change_direction_clockwise_high.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab')
    });

    change_direction_clockwise_high.on('mouseup', function () {
        change_direction_clockwise_high.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab');
    });

    canvas_side_bar_perm.add(change_direction_clockwise_high);
});
let change_direction_counterclock_low;
fabric.Image.fromURL('button_change_direction_counterclock_low.png', function(img) {
    change_direction_counterclock_low = img.set({
        left: 50 - 5 *screenFactor,
        top: dist_to_top + 8 * (136 * buttonfactor * screenFactor + buttondist) + 136 *scalefactorclockbutton * screenFactor + 10 *screenFactor,
        originX: "right",
        originY: "top",
        perPixelTargetFind: true,
        opacity: 0,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: scalefactorclockbutton * screenFactor,
        scaleY: scalefactorclockbutton * screenFactor,
        hoverCursor: "pointer"});

    change_direction_counterclock_low.on('mousedown', function (event) {
        change_direction_counterclock_low.setShadow(shadowOn);
        changeDirectionAndContinue('counterclockwise', Math.PI/180 * 0.1 , chosenGeodesicGlobalID);
        timeout = setInterval(function (event){changeDirectionAndContinue('counterclockwise', Math.PI/180 * 0.1, chosenGeodesicGlobalID);}, 151.5);
        toolChange('grab');
        arrowheadline = -1;
        return false;
    });

    change_direction_counterclock_low.on('mouseout', function () {
        change_direction_counterclock_low.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab')
    });

    change_direction_counterclock_low.on('mouseup', function () {
        change_direction_counterclock_low.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab');
    });

    canvas_side_bar_perm.add(change_direction_counterclock_low);
});

let change_direction_clockwise_low;
fabric.Image.fromURL('button_change_direction_clockwise_low.png', function(img) {
    change_direction_clockwise_low = img.set({
        left: 50 + 5 *screenFactor,
        top: dist_to_top + 8 * (136 * buttonfactor * screenFactor + buttondist) + 136 *scalefactorclockbutton * screenFactor + 10 *screenFactor,
        originX: "left",
        originY: "top",
        perPixelTargetFind: true,
        opacity: 0,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: scalefactorclockbutton * screenFactor,
        scaleY: scalefactorclockbutton * screenFactor,
        hoverCursor: "pointer"});

    change_direction_clockwise_low.on('mousedown', function (event) {
        change_direction_clockwise_low.setShadow(shadowOn);
        changeDirectionAndContinue('clockwise', Math.PI/180 * 0.1, chosenGeodesicGlobalID);
        timeout = setInterval(function (event){changeDirectionAndContinue('clockwise', Math.PI/180 * 0.1, chosenGeodesicGlobalID);}, 151.5);
        toolChange('grab');
        arrowheadline = -1;
        return false;
    });

    change_direction_clockwise_low.on('mouseout', function () {
        change_direction_clockwise_low.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab')
    });

    change_direction_clockwise_low.on('mouseup', function () {
        change_direction_clockwise_low.setShadow(shadowOff);
        clearInterval(timeout);
        drawDragPoint(chosenGeodesicGlobalID);
        toolChange('grab');
    });

    canvas_side_bar_perm.add(change_direction_clockwise_low);
});

let set_sectors;
fabric.Image.fromURL('set_sectors.png', function(img) {
    set_sectors = img.set({
        left: 51.5,
        top: dist_to_top + 8 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 0,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    set_sectors.on('mousedown', function (o) {
        set_sectors.setShadow(shadowOn);
    });
    set_sectors.on('mouseout', function (o) {
        set_sectors.setShadow(shadowOff);
    });

    set_sectors.on('mouseup', function (o) {
        set_sectors.setShadow(shadowOff);
        setSectors(chosenGeodesicGlobalID);
        toolChange('grab');
        arrowheadline = -1;
        moveDirectionButtons(false);
    });
    canvas_side_bar_perm.add(set_sectors);
});

let delete_whole;
fabric.Image.fromURL('delete.png', function(img) {
    delete_whole = img.set({
        left: 51.5,
        top: dist_to_top + 9 * (136 * buttonfactor * screenFactor + buttondist),
        opacity: 0,
        originX: "center",
        originY: "top",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    delete_whole.on('mousedown', function (o) {
        delete_whole.setShadow(shadowOn);
    });
    delete_whole.on('mouseout', function (o) {
        delete_whole.setShadow(shadowOff);
    });

    delete_whole.on('mouseup', function (o) {
        delete_whole.setShadow(shadowOff);
        deleteWholeGeodesic(chosenGeodesicGlobalID);
        toolChange('grab');
        arrowheadline = -1;
        moveDirectionButtons(false);
    });
    canvas_side_bar_perm.add(delete_whole);
});

function download_image(){
    let canvasToDownload = document.getElementById("canvas");
    image = canvas.toDataURL("image/png")//.replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = name_picture_result.valueOf() + ".png";
    link.href = image;
    link.click();
}



let camera;
fabric.Image.fromURL('camera.png', function(img) {
    camera = img.set({

        left: 300 * screenFactor - buttondist - 1.2 * 136 * buttonfactor * screenFactor,
        top: 80 * screenFactor- buttondist/2,

        opacity: 1,
        originX: "right",
        originY: "bottom",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    camera.on('mousedown', function (o) {
        camera.setShadow(shadowOn);
        canvas_side_tools_right.renderAll()
    });
    camera.on('mouseout', function (o) {
        camera.setShadow(shadowOff);
        canvas_side_tools_right.renderAll()
    });

    camera.on('mouseup', function (o) {
        camera.setShadow(shadowOff);
        download_image()
        canvas_side_tools_right.renderAll()

    });

    canvas_side_tools_right.add(camera);
});

/*
let userAgent = window.navigator.userAgent.toLowerCase();
let safari = /safari/.test( userAgent );
*/

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let fullscreen;
fabric.Image.fromURL('fullscreen.png', function(img) {
    fullscreen = img.set({
        left: 300 * screenFactor - buttondist,
        top: 80 * screenFactor- buttondist/2,
        opacity: 1,
        originX: "right",
        originY: "bottom",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    fullscreen.on('mousedown', function (o) {
        fullscreen.setShadow(shadowOn);
        canvas_side_tools_right.renderAll()
    });
    fullscreen.on('mouseout', function (o) {
        fullscreen.setShadow(shadowOff);
        canvas_side_tools_right.renderAll()
    });

    fullscreen.on('mouseup', function (o) {
        fullscreen.setShadow(shadowOff);
        canvas_side_tools_right.renderAll()
        /*
        if( safari ) {
            alert('Diese Funktion ist für iOS nicht integriert.\nThis function is not integrated for iOS.')
        }
        */


        if( isMobile.iOS() ) alert('Diese Funktion steht iOS-Nutzern nicht zur Verfügung.\nThis feature is not available to iOS users.');


        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            }
        } else {
            const _element = document.documentElement;
            if (_element.requestFullscreen) {
                _element.requestFullscreen();
            } else {
                if (_element.mozRequestFullScreen) {
                    _element.mozRequestFullScreen();
                } else {
                    if (_element.webkitRequestFullscreen) {
                        _element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                }
            }
        }

        /*
        let elem = document.getElementById("canvas-overAll");




        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fullscreen.opacity = 0;
            exitFullscreen.opacity = 1;

        } else {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                exitFullscreen.opacity = 0;
                fullscreen.opacity = 1;

            }
        }
        */
    });

    canvas_side_tools_right.add(fullscreen);
});

let exitFullscreen;
fabric.Image.fromURL('exit_fullscreen.png', function(img) {
    exitFullscreen = img.set({
        left: 300 * screenFactor - buttondist,
        top: 80 * screenFactor- buttondist/2,
        opacity: 0,
        originX: "right",
        originY: "bottom",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"});

    exitFullscreen.on('mousedown', function (o) {
        exitFullscreen.setShadow(shadowOn);
        canvas_side_tools_right.renderAll()
    });
    exitFullscreen.on('mouseout', function (o) {
        exitFullscreen.setShadow(shadowOff);
        canvas_side_tools_right.renderAll()
    });

    exitFullscreen.on('mouseup', function (o) {
        exitFullscreen.setShadow(shadowOff);
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            }
        } else {
            const _element = document.documentElement;
            if (_element.requestFullscreen) {
                _element.requestFullscreen();
            } else {
                if (_element.mozRequestFullScreen) {
                    _element.mozRequestFullScreen();
                } else {
                    if (_element.webkitRequestFullscreen) {
                        _element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                }
            }
        }

        /*
        let elem = document.getElementById("canvas-overAll");




        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fullscreen.opacity = 0;
            exitFullscreen.opacity = 1;

        } else {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                exitFullscreen.opacity = 0;
                fullscreen.opacity = 1;

            }
        }
        */

    });

    canvas_side_tools_right.add(exitFullscreen);
});

let zoomReset;
fabric.Image.fromURL('zoomReset.png', function(img) {
    zoomReset = img.set({
        left: 300 * screenFactor - buttondist - 2.4 * 136 * buttonfactor * screenFactor,
        top: 80 * screenFactor - buttondist / 2,
        opacity: 1,
        originX: "right",
        originY: "bottom",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"
    });

    zoomReset.on('mousedown', function (o) {
        zoomReset.setShadow(shadowOn);
        canvas_side_tools_right.renderAll()
    });
    zoomReset.on('mouseout', function (o) {
        zoomReset.setShadow(shadowOff);
        canvas_side_tools_right.renderAll()
    });

    zoomReset.on('mouseup', function (o) {
        zoomReset.setShadow(shadowOff);
        resetZoomPan();
        canvas_side_tools_right.renderAll()
    });

    canvas_side_tools_right.add(zoomReset);

});

let help;
fabric.Image.fromURL('help.png', function(img) {
    help = img.set({
        left: 300 * screenFactor - buttondist - 3.6 * 136 * buttonfactor * screenFactor,
        top: 80 * screenFactor - buttondist / 2,
        opacity: 1,
        originX: "right",
        originY: "bottom",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"
    });

    help.on('mousedown', function (o) {
        help.setShadow(shadowOn);
    });
    help.on('mouseout', function (o) {
        help.setShadow(shadowOff);
    });

    help.on('mouseup', function (o) {
        help.setShadow(shadowOff);
        addInstructionalOverlay(true);
        exitHelp.opacity = 1.0;
        canvas_side_tools_right.renderAll();
    });

    canvas_side_tools_right.add(help);

});

let exitHelp;
fabric.Image.fromURL('exit_help.png', function(img) {
    exitHelp = img.set({
        left: 300 * screenFactor - buttondist - 3.6 * 136 * buttonfactor * screenFactor,
        top: 80 * screenFactor - buttondist / 2,
        opacity: 0,
        originX: "right",
        originY: "bottom",
        perPixelTargetFind: true,
        objectCaching: false,
        hasBorders: false,
        hasControls: false,
        evented: true,
        selectable: false,
        scaleX: buttonfactor * screenFactor,
        scaleY: buttonfactor * screenFactor,
        hoverCursor: "pointer"
    });

    exitHelp.on('mousedown', function (o) {
        exitHelp.setShadow(shadowOn);
    });
    exitHelp.on('mouseout', function (o) {
        exitHelp.setShadow(shadowOff);
    });

    exitHelp.on('mouseup', function (o) {
        exitHelp.setShadow(shadowOff);
        addInstructionalOverlay(false);
        exitHelp.opacity = 0.0;
        canvas_side_tools_right.renderAll();
    });

    canvas_side_tools_right.add(exitHelp);

});

function addInstructionalOverlay(InstructionalOverlayToAdd){
    if (InstructionalOverlayToAdd == true){
        canvas.add(instructional_overlay);

        let zoom = canvas.getZoom();

        let viewpoint_x = fabric.util.invertTransform(canvas.viewportTransform)[4]+(canvas.width/zoom)/2;
        let viewpoint_y = fabric.util.invertTransform(canvas.viewportTransform)[5]+(canvas.height/zoom)/2;

        instructional_overlay.set('left', viewpoint_x);
        instructional_overlay.set('top', viewpoint_y);
        /*
                instructional_overlay.setCoords();
                instructional_overlay.opacity = 0;
                button_dreieck_empty.opacity = 1;
        */
    } else{
        canvas.remove(instructional_overlay);
        /*
         button_dreieck.opacity = 1;
         button_dreieck_empty.opacity = 0;
 */
    }

}