const cardTypeId = (id) => {
    let msg = '';
    if (id === '1') {
        msg = 'Recompensas';
    } else if (id === '2') {
        msg = 'Recompensas Oro';
    } else if (id === '3') {
        msg = 'Recompensas V Test';
    } else if (id === '4') {
        msg = 'Recompensas Virtual Gratis';
    } else if (id === '5') {
        msg = 'Recompensas Virtual Oro';
    } else {
        msg = 'Desconocida';
    }
    return msg;
}

export default cardTypeId;