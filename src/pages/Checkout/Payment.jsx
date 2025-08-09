import React, { useState } from 'react'
import AppHeader from '../../components/common/AppHeader'

function Payment() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')

  function handlePay(e) {
    e.preventDefault()
    window.location.href = '/payment/success'
  }

  return (
    <div className="payment-container">
      <AppHeader />
      <div className="payment-content">
        <h2 className="screen-title">Payment</h2>

        <section className="auth-card">
          <form onSubmit={handlePay}>
            <div className="field">
              <label>Cardholder name</label>
              <input placeholder="Jane Doe" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
              <label>Card number</label>
              <input placeholder="4111 1111 1111 1111" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="field-row">
              <div className="field">
                <label>Expiry</label>
                <input placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
              </div>
              <div className="field">
                <label>CVV</label>
                <input placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            </div>

            <div className="price-bar">
              <div className="price-info">
                <div className="label">Total</div>
                <div className="amount">$589</div>
              </div>
              <div className="bar-actions">
                <button className="bar-btn" type="submit">Pay now</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Payment


