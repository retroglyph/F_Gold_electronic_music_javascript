var audio_context = window.AudioContext || window.webkitAudioContext,
    con = new audio_context(),

    osc = con.createOscillator(),
    lfo = con.createOscillator(),

    lfo_amp = con.createGain(), /* simple amplifier */
    mouse_control = document.querySelector('.mouse_control'),
    mousecon = document.getElementById('mousecon');

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
