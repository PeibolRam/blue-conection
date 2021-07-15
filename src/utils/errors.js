const errorList = (code) => {
    let msg = '';
    if (code === '-153') {
        msg = 'La tarjeta no existe';
    } else if (code === '-152') {
        msg = 'La tarjeta esta asignada a otro cliente';
    } else if (code === '-150') {
        msg = 'Transacción invalida';
    } else if (code === '-99') {
        msg = 'Error al procesar la información';
    } else if (code === '-98') {
        msg = 'Número de acumulaciones por día excedido';
    } else if (code === '-97') {
        msg = 'Número de redenciones por día excedido';
    } else if (code === '-96') {
        msg = 'Transacción duplicada';
    } else if (code === '-71') {
        msg = 'Error en la base de datos';
    } else if (code === '-70') {
        msg = 'Error en la base de datos';
    } else if (code === '-61') {
        msg = 'La cancelación del canje de puntos indicado se realizó anteriormente';
    } else if (code === '-60') {
        msg = 'El canje de puntos indicado para cancelacion no existe';
    } else if (code === '-38') {
        msg = 'El numero proporcionado no es una tarjeta valida';
    } else if (code === '-37') {
        msg = 'La devolucion no esta relacionada con alguna venta registrada previamente';
    } else if (code === '-36') {
        msg = 'Sin monto a descontar';
    } else if (code === '-35') {
        msg = 'Transaccion futura no permitida';
    } else if (code === '-34') {
        msg = 'Transaccion fuera de fecha';
    } else if (code === '-33') {
        msg = 'Canje reenviado';
    } else if (code === '-31') {
        msg = 'El tipo de transaccion no es valida';
    } else if (code === '-30') {
        msg = 'La tarjeta no puede ser usada en este movimiento';
    } else if (code === '-27') {
        msg = 'La tarjeta no es valida para acumulacion de puntos';
    } else if (code === '-26') {
        msg = 'La tarjeta no es valida para canje el dia de hoy';
    } else if (code === '-25') {
        msg = 'La tarjeta no es valida para canje en esta unidad';
    } else if (code === '-19') {
        msg = 'Tarjeta con status incorrecto para activación';
    } else if (code === '-18') {
        msg = 'Solo se puede migrar la tarjeta a una nueva tarjeta en una sola ocasion';
    } else if (code === '-17') {
        msg = 'La tarjeta está inactiva o cancelada, es imposible realizar el traspaso de puntos';
    } else if (code === '-14') {
        msg = 'Centro de costos incorrecto (storeid)';
    } else if (code === '-13') {
        msg = 'Usuario o contrasena incorrecto';
    } else if (code === '-12') {
        msg = 'El monto no puede ser mayor a los puntos disponibles';
    } else if (code === '-11') {
        msg = 'Tarjeta no registrada para canje';
    } else if (code === '-10') {
        msg = 'Tarjeta no activa para acumulacion';
    } else if (code === '-6') {
        msg = 'Tarjeta reportada como robada';
    } else if (code === '-5') {
        msg = 'Tarjeta vencida';
    } else if (code === '-4') {
        msg = 'Tarjeta reportada como extraviada';
    } else if (code === '-3') {
        msg = 'Tarjeta cancelada';
    } else if (code === '-2') {
        msg = 'Tarjeta activada previamente';
    } else if (code === '-1') {
        msg = 'Numero de tarjeta incorrecto';
    }

    return msg;
}

export default errorList;