import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderControllers.js"

const orderRouter=express.Router()

orderRouter.post("/placeOrder",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userOrders",authMiddleware,userOrders)
orderRouter.get("/listOrders",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter