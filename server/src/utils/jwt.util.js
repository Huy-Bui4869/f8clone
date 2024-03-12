// const jwt = require("jsonwebtoken");
// const { JWT_SECRET, JWT_ACCESS_TOKEN_EXPIRE, JWT_REFRESH_TOKEN_EXPIRE } =
//   process.env;

// module.exports = {
//   //sử dụng try {} catch {} để khi bị lỗi tránh chết server.
//   createAccessToken: (data = {}) => {
//     try {
//       return jwt.sign(data, JWT_SECRET, {
//         expiresIn: JWT_ACCESS_TOKEN_EXPIRE,
//       });
//     } catch {
//       return false;
//     }
//   },

//   createRefreshToken: () => {
//     try {
//       return jwt.sign(
//         //có thể k cần userID
//         {
//           value: Math.random() + new Date().getTime(),
//         },
//         JWT_SECRET,
//         {
//           expiresIn: JWT_REFRESH_TOKEN_EXPIRE,
//         }
//       );
//     } catch {
//       return false;
//     }
//   },

//   verifyToken: (token) => {
//     try {
//       return jwt.decode(token, JWT_SECRET);
//     } catch {
//       return false;
//     }
//   },
// };
