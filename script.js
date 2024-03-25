const weightSlider = document.getElementById('weight-slider');
const variableText = document.getElementById('variable-text');

weightSlider.addEventListener('input', function() {
    const midpoint = 500;
    console.log("Slider value:", this.value);
    console.log("Midpoint:", midpoint);
    if (parseInt(this.value) <= midpoint) {
        console.log("Using MonaspaceKrypton");
        variableText.style.fontFamily = 'MonaspaceKrypton';
        variableText.style.fontWeight = ((this.value / midpoint) * 700) + 200; 
    } else {
        console.log("Using MonaspaceKrypton");
        variableText.style.fontFamily = 'MonaspaceKrypton';
        variableText.style.fontWeight = (((this.value - midpoint) / midpoint) * 700) + 900; 
    }
});
const slantSlider = document.getElementById('slant-slider');
const variableText2 = document.getElementById('variable-text2');

slantSlider.addEventListener('input', function() {
    const midpoint = 500;
    console.log("Slider value:", this.value);
    console.log("Midpoint:", midpoint);
    if (parseInt(this.value) <= midpoint) {
        console.log("Using MonaspaceKrypton");
        variableText.style.fontFamily = 'MonaspaceKrypton';
        variableText.style.fontSlant = ((this.value / midpoint) * 700) + 200; 
    } else {
        console.log("Using MonaspaceKrypton");
        variableText.style.fontFamily = 'MonaspaceKrypton';
        variableText.style.fontSlant = (((this.value - midpoint) / midpoint) * 700) + 900; 
    }
});

