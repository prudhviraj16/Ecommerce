import React,{useState,useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { ContactSupportOutlined } from '@material-ui/icons'
const Pay = () => {

    const [stripeToken,setStripetoken] = useState(null)

    const onToken = (token) => {
        setStripetoken(token)
    }

    useEffect(()=>{
        const makeRequest = async () => {
            try{
               const res = await axios.post("http://localhost:4000/api/checkout/payment",{
                tokenId : stripeToken.id,
                amount : 2000
               })
               console.log(res.data)
            }
            catch(err){
                console.log(err)
            }
        }

        stripeToken && makeRequest()
    },[stripeToken])

    return (
        <div style={{
            height : "100vh",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
        }}>

        <StripeCheckout name = "Jwala" image="" billingAddress shippingAddress description = "Your total is $20" amount={2000} token = {onToken} stripeKey = "pk_test_51LmsH2SFBFNUckfxm4EqSKNliRpBwCD694IewyqDNn6TCXAomOVEXAwj9lhhR47SO0jOPAm1w9xIrtR1bBOWR4ff00reOxGAh5">
            <button style={{
                border : "none",
                width : 120,
                borderRadius:5,
                padding : "20px",
                backgroundColor : "black",
                color : "white",
                fontWeight : "600",
                cursor : "pointer"
                }}> Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Pay
