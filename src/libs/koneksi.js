const mongoose = require("mongoose");

const checkMongoConnection = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || "mongodb://Kelelawar:Kecowa22@cluster0-shard-00-00.lwmwo.mongodb.net:27017,cluster0-shard-00-01.lwmwo.mongodb.net:27017,cluster0-shard-00-02.lwmwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-l7gnd4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

        console.log("Menghubungkan ke MongoDB...");
        const connection = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Waktu tunggu koneksi
        });

        console.log(`MongoDB Terkoneksi: ${connection.connection.host}`);
        process.exit(0); // Keluar setelah sukses
    } catch (error) {
        console.error("Gagal menghubungkan ke MongoDB:", error.message);
        process.exit(1); // Keluar dengan kode error
    }
};

checkMongoConnection();
