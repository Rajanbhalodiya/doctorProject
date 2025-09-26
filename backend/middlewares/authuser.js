import jwt from  'jsonwebtoken'

// user authentication middleware
const authUser = async (req,res,next) => {
    try {

        const {token} = req.headers.token
        if (!token) {
            return res.json({success:false,message:"NOt Authorized Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default authUser

// import jwt from 'jsonwebtoken'

// // user authentication middleware
// const authUser = async (req, res, next) => {
//   try {
//     const token = req.headers.token  // or req.headers["authorization"]
//     if (!token) {
//       return res.status(401).json({ success: false, message: "Not Authorized, Login Again" })
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.userId = decoded.id   // ✅ safe way
//     next()                    // pass to next middleware/controller

//   } catch (error) {
//     console.log(error)
//     res.status(401).json({ success: false, message: error.message })
//   }
// }

// export default authUser
