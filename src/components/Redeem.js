import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'

export default function Redeem() {
    const [card, setCard] = useState('');
    const [amount, setAmount] = useState('');

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const redeemCard = () => {
        fetch(`https://testing5.myblueengine.com/WsPuntosRecompensas/BlueEngine.asmx/Redeem?loginId=TestUserCom&password=McndjyuMDN&cardId=${card}&transactionDate=${today.toISOString()}&amount=${amount}&totalamount=${amount}&ticketid=string&storeid=string&referenceId3=string&approvalSupervisorID=string&cashierCode=string&cashierName=string&supervisorCode=string&supervisorName=string&sellerCode=string&sellerName=string&Products=string`)
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data);
                console.log(xml)
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Redeem</h1>
            <label>Numero de tarjeta:</label>
            <input type="text" id="cardIdRedeem" onChange={e => setCard(e.target.value)} />
            <label>Monto:</label>
            <input type="text" onChange={e => setAmount(e.target.value)} />
            <button onClick={() => redeemCard()}>Retirar fondos</button>

        </div>
    )
}
