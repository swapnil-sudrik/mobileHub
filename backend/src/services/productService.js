
const connection = require('../../db');

const getAllIphones = async ()=>{
    try{
        const query="SELECT * FROM products WHERE category='iphone'";
        const [rows] = await connection.query(query);
        return rows;
    }catch(error){
        console.error("Error fetching iPhone data:", error);
        throw error;
    }
};

module.exports = {
    getAllIphones,
}