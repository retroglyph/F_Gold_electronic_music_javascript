var audio_context = window.AudioContext || window.webkitAudioContext,
    con = new audio_context(),

    osc = con.createOscillator(),
    lfo = con.createOscillator(),

    lfo_amp = con.createGain(), /* simple amplifier */
    mouse_control = document.querySelector('.mouse_control'),
    mousecon = document.getElementById('mousecon'),

    toggle1;
Nexus.colors = {
    accent: "#a6e",
    fill: "#eee",
    light: "#fff",
    dark: "#333",
    mediumLight: "#ccc",
    mediumDark: "#666"
};
Nexus.colors.accent = "mediumslateblue";
Nexus.colors.fill = "#f39";
toggle1 = new Nexus.Toggle('#toggle', {
    state: true
  });
lfo_amp.gain.value = 40;
osc.frequency.value = 400;
lfo.frequency.value = 35; //0.25;

lfo.connect(lfo_amp);
lfo_amp.connect(osc.frequency);
osc.connect(con.destination);
//osc.start();
lfo.start();

//mouse_control.mousemove = function(event) {trackMouse(event)};
//mousecon.addEventListener("mousemove", trackMouse, false);
mousecon.onmousemove = trackMouse;
function trackMouse(e) {
    lfo.frequency.value = e.clientX;
    console.log(e.clientX);
};

nx.onload = function(){
    //    slider1.on('*', slider1Changed);
       toggle1.on('*', toggle1Changed);
    //    sliderVol.on('*', change_vol);
    //    sliderVol.val.value = 0.3;
    //    dial1.on('*', change_lfo);
    //    dial1.val.value = 0.5;

       /*nx.colorize("#665099"); // change the accent color
       nx.colorize("border", "#99DDAA"); // change the border
       nx.colorize("fill", "#BBA0CC"); // change the fill*/


       nx.colorize("accent", "sienna"); //"indianred");//"peru");//"darkkhaki");//"#347");  // change the accent color
       nx.colorize("border", "#cc0000"); //"maroon"); "indianred"); //"sienna"); // "chocolate");//"darksalmon");//"#a9a");  // change the border
       nx.colorize("fill", "tan"); //"burlywood");// "navajowhite");// "lightsalmon");// "wheat");//"#bcb");    // change the fill*/
   };

    function slider1Changed(data){
        osc.frequency.value = data.value;
        //console.log(data.value);
    }
    function toggle1Changed(data) {
        if (data.value === 1) {
            //console.log(true + "; " + data.value);
            vol.gain.value=1;
            toggle1.label = "Turn On";
        } else {
            //console.log(false + "; " + data.value);
            vol.gain.value=0;
            toggle1.label = "Turn Off";
        }// some code using data.press, data.x, and data.y
    }

    // volume slider handler
    function change_vol(data) {
        //console.log(data);
        vol.gain.value = cur_vol = data.value;
    }

    // type selector handler
    function change_type(data) {
        //console.log(data);
	    osc.type = data.text;
    }

    function change_lfo(data) {
        lfo.frequency.value = data.value*4;
    }
