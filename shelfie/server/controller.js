module.exports = {
        getAll: ( req, res, next ) => {
            const dbInstance = req.app.get('db');
            dbInstance.get_inventory()
                .then(products => res.status(200).send(products)  )
                .catch((err) => {
                    console.log(err)
                    res.status(500).send()});
    },




     addProduct: (req,res) =>{
        const db = req.app.get('db');
        const {nameInput, priceInput, imgInput}=req.body;
        db.add_product([nameInput,priceInput,imgInput])
            .then(products => res.status(200).send(products))
            .catch((err) => {
                console.log(err)
                res.status(500).send()})
    },
}