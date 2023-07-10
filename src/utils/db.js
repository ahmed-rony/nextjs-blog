const { default: mongoose } = require("mongoose");

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGODB);
    } catch (error) {
        throw new Error("connection failed!")
    }
}

export default connect;