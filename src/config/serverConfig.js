const dotenv =require("dotenv");
dotenv.config();

const { rateLimit } = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    limit: 5,
})


module.exports={
    PORT:process.env.PORT,
    REQUEST_LIMIT:limiter,
}