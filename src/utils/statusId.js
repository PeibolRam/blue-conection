const statusId = (id) => {
    let msg = '';
    if (id === '0') {
        msg = 'INACTIVA';
    } else if (id === '1') {
        msg = 'ACTIVA PARA ACUMULACION';
    } else if (id === '2') {
        msg = 'ACTIVA PARA ACUMULACION Y CANJE';
    } else if (id === '3') {
        msg = 'CANCELADA';
    } else if (id === '4') {
        msg = 'CANCELADA POR EXTRAVIO';
    } else if (id === '5') {
        msg = 'VENCIDA';
    } else if (id === '6') {
        msg = 'CANCELADA POR ROBO';
    } else if (id === '7') {
        msg = 'SUSPENDIDA TEMPORALMENTE';
    } else if (id === '8') {
        msg = 'CANCELADO POR DAÑO';
    } else if (id === '9') {
        msg = 'CANCELADA POR CAMBIO DE TARJETA';
    } else {
        msg = 'DESCONOCIDO';
    }
    return msg;
}

export default statusId;