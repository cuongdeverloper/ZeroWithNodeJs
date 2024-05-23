const connection = require('../config/database')
const getAllUser = async() =>{
    const [results, fields] = await connection.query('select * from Users')
    return results
}
const getUserId = async (userId) =>{
    let [results, fields] = await connection.query(
        'select * from Users where id = ?',[userId]
    )
    // console.log(results)
    let user = results && results.length> 0 ? results[0] : {}
    return user
}
const getUpdateUserById = async (email,name,city,id) => {
 
    
        const [results, fields] = await connection.query(
            `Update Users 
                Set email = ?, name = ?, city = ?
                where id = ?
            `,[email,name,city,id]
            
        );
        return results
}
const getDeleteUserById = async(userId) =>{
    const [results, fields] = await connection.query(
        `Delete from  Users 
            where id = ?
        `,[userId] 
    );
    return results
}
module.exports = {
    getAllUser, getUserId,getUpdateUserById,getDeleteUserById
}