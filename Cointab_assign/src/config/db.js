const mongoose = require("mongoose");

const Connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log(`Connected to MongoDB on ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
};

module.exports = Connect;