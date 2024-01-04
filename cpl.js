
function Data() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    return {
        dia,
        mes,
        ano,
        hora,
        minutos,
        segundos
    }
}

function cpl(class_name, visible) {
    if (visible) {
        document.querySelector(`.${class_name}`)?.removeAttribute('hidden');
        document.querySelector(`.${class_name}-fechado`)?.setAttribute('hidden', 'true');
        document.querySelector(`.${class_name}-liberado`)?.removeAttribute('hidden');
    } else {
        document.querySelector(`.${class_name}`)?.setAttribute('hidden', 'true');
        document.querySelector(`.${class_name}-fechado`)?.removeAttribute('hidden');
        document.querySelector(`.${class_name}-liberado`)?.setAttribute('hidden','true');
    }
}

function valida_data(dia, hora, minuto, segundo) {
    let data = Data();
    return data.dia === dia && data.hora >= hora && data.minutos >= minuto && data.segundos >= segundo;
}

function manipular_visibilidade() {
    let data = Data()
    let validar_ano = data.ano === 2024;
    let validar_mes = data.mes === 1;
    let valida_cpl_2 = valida_data(4, 10, 0, 0);
    let valida_cpl_3 = valida_data(4, 11, 0, 0);
    cpl('cpl02', false);
    cpl('cpl03', false);
    if (!validar_ano && !validar_mes) {
        return null;
    }
    if (valida_cpl_2) {
        cpl('cpl02', true);
    }
    if (valida_cpl_3) {
        cpl('cpl03', true);
    }
    requestAnimationFrame(manipular_visibilidade)
}

window.onload = () => {    
    manipular_visibilidade();
}