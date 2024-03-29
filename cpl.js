
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

function cpl_elementos(class_name, visible) {
    if (visible) {
        document.querySelector(`#${class_name}`)?.removeAttribute('hidden');
    } else {
        document.querySelector(`#${class_name}`)?.setAttribute('hidden', 'true');
    }
}

function cpl(class_name, visible) {
    if (visible) {
        document.querySelector(`#${class_name}`)?.removeAttribute('hidden');
        document.querySelector(`#${class_name}-fechado`)?.setAttribute('hidden', 'true');
        document.querySelector(`#${class_name}-liberado`)?.removeAttribute('hidden');
        document.querySelector(`#${class_name}-material`)?.removeAttribute('hidden');
        document.querySelector(`#${class_name}-video`)?.removeAttribute('hidden');
    } else {
        document.querySelector(`#${class_name}`)?.setAttribute('hidden', 'true');
        document.querySelector(`#${class_name}-fechado`)?.removeAttribute('hidden');
        document.querySelector(`#${class_name}-liberado`)?.setAttribute('hidden','true');
        document.querySelector(`#${class_name}-material`)?.setAttribute('hidden','true');
        document.querySelector(`#${class_name}-video`)?.setAttribute('hidden','true');
    }
}

function valida_data(dataHora) {
    let data = Data();
    let hojeTime = Date.parse(`${data.ano}-${data.mes}-${data.dia} ${data.hora}:${data.minutos}:${data.segundos}`);
    let eventTime = Date.parse(dataHora);   
    return hojeTime >= eventTime;
}

function manipular_visibilidade() {
    let data = Data()
    let validar_ano = data.ano === 2024;
    let validar_mes = data.mes === 1;
    let valida_cpl_2 = valida_data('2024-01-04 15:50:00');
    let valida_cpl_3 = valida_data('2024-01-05 16:26:00');
    cpl('cpl02', false);
    cpl('cpl03', false);
    cpl_elementos('btn-decididos', false);
    cpl_elementos('btn-vip', true);
    if (!validar_ano && !validar_mes) {
        return null;
    }    
    if (valida_cpl_2) {
        cpl('cpl02', true);
        cpl('cpl01', false);
    }
    if (valida_cpl_3) {
        cpl_elementos('cpl02-video', false);
        cpl_elementos('btn-vip', false);
        cpl_elementos('btn-decididos', true);
        cpl('cpl03', true);
        return null;
    }
    if( !valida_cpl_2 || !valida_cpl_3 ) {
        requestAnimationFrame(manipular_visibilidade);
    }
}

window.onload = () => {    
    manipular_visibilidade();
}