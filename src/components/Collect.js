import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import errorList from '../utils/errors'

export default function Collect() {
    const [card, setCard] = useState('');
    const [amount, setAmount] = useState('');

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const getVerify = () => {
        fetch(`https://testing5.myblueengine.com/WsPuntosRecompensas/BlueEngine.asmx/Collect?loginId=TestUserCom&password=McndjyuMDN&cardId=${card}&transactionDate=${today.toISOString()}&amount=${amount}&totalAmount=${amount}&ticketid=string&storeid=string&paymentTypeID=string&approvalSupervisoID=string&cashierCode=string&cashierName=string&supervisorCode=string&supervisorName=string&sellerCode=string&sellerName=string&products=string`)


            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data);
                console.log(xml)

            })
            .catch(err => console.log(err));


    }

    console.log(errorList('-96'))
    return (
        <div>
            <h1>Collect</h1>

            <label>Numero de tarjeta:</label>
            <input type="text" onChange={e => setCard(e.target.value)} />
            <label>Monto:</label>
            <input type="text" onChange={e => setAmount(e.target.value)} />
            <button onClick={() => getVerify()}>Agregar fondos</button>
            
        </div>
    )
}
