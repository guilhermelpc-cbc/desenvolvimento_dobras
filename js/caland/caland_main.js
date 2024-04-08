const outWarn = document.getElementById('output_warn');
const desenvOut = document.getElementById('desenv_teorico');
const pesoOut = document.getElementById('peso');
const drawingDiv = document.getElementById("drawing");
var renderedGlobal = false;

function reset_output() {
    const svgDiv = document.getElementById("drawing");
    outWarn.innerHTML = '';
    desenvOut.innerHTML = '';
    pesoOut.innerHTML = '';
    svgDiv.innerHTML = "";
    renderedGlobal = false;
    return;
}

function desenvolvimento(esp, dext, angulo) {
    outWarn.innerHTML = '';
    const avisoSobreMetal = '<br><span id=aviso-sobremetal>Verifique se é necessário<br>adicionar sobremetal</span>'

    diamIntIn.value = ((dext - 2 * esp)).toFixed(2);
    let desenv = (dext - esp) * Math.PI * angulo / 360;
    desenvOut.innerHTML = 'Desenvolvimento: <span id=aviso-sobremetal><u>' + desenv.toFixed(1) + '</u> mm<br></span>';
    desenvOut.innerHTML += avisoSobreMetal
    if (!checkInput(comprimentoIn.value)) {return;}
    let compr = parseFloat(convertCommaInput(comprimentoIn.value));
    let peso = esp * 7.9 * desenv * compr / 1e6;
    desenvOut.innerHTML = 'Desenvolvimento: <br>' + esp.toFixed(1) + " x " + compr.toFixed(1) + ' x <span id=aviso-sobremetal><u>' + desenv.toFixed(1) + '</u></span>'+ ' mm<br>';
    desenvOut.innerHTML += avisoSobreMetal
    pesoOut.innerHTML = 'Peso ' + peso.toFixed(2) + ' kg';
    return;
}
