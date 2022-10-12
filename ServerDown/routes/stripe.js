const router = require('express').Router()
const stripe = require("stripe")("sk_test_51LmsH2SFBFNUckfxv9CllBJuocI2l07ADV75sLEOgdNkUL2U8dlyZgN08VLGaQFxK16mR7ZOtWcjBdl0wJXDKSvM00vb1QGtcQ")

router.post("/payment",(req,res)=>{
    console.log(req.body)
    stripe.paymentIntents.create(
        {
            source : req.body.tokenId,
            amount : req.body.amount,
            currency : "usd"
        },
        (stripeErr,stripeRes) => {
            if(stripeRes){
              res.status(200).json(stripeRes)
                console.log(stripeRes)
            }
            else{
                res.status(500).json(stripeErr)
            }
        }
    )
})

module.exports = router