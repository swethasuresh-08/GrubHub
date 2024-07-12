import userModel from '../models/userModel.js'
import cartRouter from '../routes/cartRoute.js'

//add items to cart
export const addToCart=async (req,res)=>{
try{
    let userData=await userModel.findOne({_id:req.body.userId})
    console.log(userData)
    let cartData=await userData.cartData
    if(!cartData[req.body.itemId])
    {
        cartData[req.body.itemId]=1
    }
    else
    {
        cartData[req.body.itemId]=cartData[req.body.itemId]+1

    }
    console.log(cartData)
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"Item added to cart"})

}catch(error)
{
    console.log(error)
    res.json({success:false,message:"Error adding item to cart"})
}
}

//remove items from user cart
export const removeFromCart=async(req,res)=>{
try{
    let userData=await userModel.findById(req.body.userId)
    let cartData=await userData.cartData
    console.log({cartData})
   if(cartData[req.body.itemId]>0)
   {
    cartData[req.body.itemId]=cartData[req.body.itemId]-1
   }
   await userModel.findByIdAndUpdate(req.body.userId,{cartData})
   res.json({
    success:true,
    message:"Item Removed from Cart Successfully"
   })
}
catch(error)
{
    console.log(error)
    res.json({
        success:false,
        message:"Error in removing Item"
    })
}
}

//List cart items
export const getCart=async(req,res)=>{
    try{    
        const userData=await userModel.findById(req.body.userId)
        const cartData=await userData.cartData
        res.json({
            success:true,
            message:"Cart Items fetched successfully",
            cartData
        })
    }
    catch(error)
    {
        console.log(error)
        res.json({
            success:false,
            message:"Error fetching cart items"
        })
    }
}