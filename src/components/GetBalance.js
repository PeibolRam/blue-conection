import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import statusId from '../utils/statusId';

export default function GetBalance() {
    const [card, setCard] = useState('');
    const [statusIdCard, setStatusIdCard] = useState('');
    const [cardAmount, setCardAmount] = useState('');
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const getVerify = () => {
        fetch(`https://testing5.myblueengine.com/WsPuntosRecompensas/BlueEngine.asmx/GetBalance?loginId=TestUserCom&password=McndjyuMDN&cardId=${card}&transactionDate=${today.toISOString()}&ticketid=13423434&storeid=0034&referenceId3=string&referenceId4=string&cashierCode=string&cashierName=string&supervisorCode=string&supervisorName=string&sellerCode=string&sellerName=string`)
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data);
                console.log('response', xml)
                if (xml.children[6].name === "StatusDescription") {
                    setCardAmount(xml.children[4].value)
                    setStatusIdCard(statusId(xml.children[5].value))
                } else {
                    setStatusIdCard(statusId(xml.children[4].value))
                    console.log('no')
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Obtener balance</h1>
            <label>Numero de tarjeta:</label>
            <input type="text" id="cardBalance" name="cardId" onChange={e => setCard(e.target.value)} />
            <button onClick={() => getVerify()}>Obtener balance </button>

            <div>
                <p>{statusIdCard}</p>
                <p>Cuenta con {cardAmount ? cardAmount : 0} pesos</p>
            </div>

        </div>
    )
}
