import Layout from '../components/layout'
import CheckoutForm from '../components/checkout-form'

// import CheckoutForm from '../components/CheckoutForm'

export default function DonateWithCheckout() {
  return (
    <Layout title="Donate with Checkout | Next.js + TypeScript Example">
      <div className="page-container mw7 center ph3 pv4" style={{minHeight: '400px'}}>
        <div className="mw7 center ph3">
        <div className="db mb3">
          <div className="mw7 relative bg-fix-primary mb3">
            <h1 className="pv1 px1 f2 f1-l b di lh-title mb3 white mw6 bg-primary">
            Thank you for your donation!
            </h1>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}
