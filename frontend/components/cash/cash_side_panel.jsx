import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// export default function CashSidePanel({dispatch, currentUser}) {
export default function CashSidePanel({dispatch, currentUser, to, setTo, transfer, setTransfer, handleTransfer, changeOption}) {
  
  // const [to, setTo] = useState('Robinhodl');

  // const [transfer, setTransfer] = useState({
  //   transfer_type: 'Deposit',
  //   amount: null,
  //   user_id: currentUser
  // });

  // const handleTransfer = (e) => {
  //   e.preventDefault();
  //   dispatch(makeTransfer(transfer));
  // }

  // const changeOption = (val) => {
  //   if (val === 'Deposit') {
  //     setTo('Robinhodl')
  //     setTransfer({ ...transfer, transfer_type: 'Withdraw' })
  //     // setTransfer.transfer_type('Withdraw')
  //   } else {
  //     setTo('Universal Bank')
  //   }
  // }

  return (
    <div id="side-panel-container">
      <h3>Transfer</h3>
      <form onSubmit={handleTransfer}>
        <div id="from" className="options">
          <p>From</p>
          <div id="select-container">
            <select name="from" id="from-select" onChange={(e) => changeOption(e.target.value)}>
              <option value="Deposit">Universal Bank</option>
              <option value="Withdraw">Robinhodl</option>
            </select>
          </div>
        </div>

        <div id="to" className="options">
          <p>To</p>
          <div id="to-container">
            <p>{to}</p>
          </div>
        </div>

        <div id="amount" className="options">
          <p>Amount</p>
          <input type="text" placeholder="$0.00" required onChange={(e) => setTransfer({ ...transfer, amount: e.target.value })} />
        </div>
        <button id={transfer.amount ? 'green': 'gray'}>Transfer</button>
      </form>
    </div>
  )
}
