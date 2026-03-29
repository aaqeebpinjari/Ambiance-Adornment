const getAllProducts = async ( req, res) =>{
    res.status(200).json({
        msg: "I am get Allproducts" });
};

const getAllProductsTesting = async ( req, res) =>{
    res.status(200).json({
        msg: "I am get AllproductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting};
