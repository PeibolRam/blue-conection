import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'

function VerifyWebService() {
  const [verification, setVerification] = useState(false)
  const [verificationValue, setVerificationValue] = useState('')

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const getVerify = () => {
    fetch(`https://testing5.myblueengine.com/WsPuntosRecompensas/BlueEngine.asmx/VerifyWebService?loginId=TestUserCom&password=McndjyuMDN&transactinoDate=${today.toISOString()}&referenceId1=testing&storeId=0001&referenceId3=test1&referenceId4=test4`)
      .then(res => res.text())
      .then(data => {
        var xml = new XMLParser().parseFromString(data);
        setVerification(true)
        if (verification) {
          setVerificationValue(xml.children[1].value)
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <button onClick={() => getVerify()}>Verificar conexión</button>
      {verification ?
        <div>
          <p>{verificationValue}</p>
        </div> :
        <div>
          <p>No hay conexión</p>
        </div>
      }
    </>
  )
}

export default VerifyWebService
