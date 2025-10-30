// import jwt from  'jsonwebtoken'

// // doctor authentication middleware
// const authDoctor = async (req,res,next) => {
//     try {

//         const {dtoken} = req.headers
//         if (!dtoken) {
//             return res.json({success:false,message:"NOt Authorized Login Again"})
//         }
//         const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
//         req.body.docId = token_decode.id

//         next()
        
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// export default authDoctor


import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    // ✅ Read token from Authorization header or custom "dtoken" header
    const dtoken =
      req.headers["authorization"]?.split(" ")[1] || req.headers["dtoken"];

    if (!dtoken) {
      return res.json({
        success: false,
        message: "Not Authorized. Please login again",
      });
    }

    // ✅ Verify token
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

    // ✅ Safely create req.body if undefined
    req.body = req.body || {};

    // ✅ Attach doctor info safely
    req.doctor = { id: token_decode.id };
    req.body.docId = token_decode.id;

    // ✅ Continue to next middleware or controller
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;


