//data from data.js
const data = apiorder.customersOrders
const products = apiproduct.drinks

// const filter = (drinkid) => {
//     const find = data.filter(orders => {
//         return orders.orders.find(order => order._id === drinkid)
//     })
//     let filterdata = []
//     find.map(orders => {
//         orders.orders.map(order => {
//             const check = filterdata.find(obj => obj.drinkName === order.drinkName)
//             if(check){
//                 check.quantity += order.quantity
//             }
//             else {
//                 const object = {
//                     _id: order._id,
//                     drinkName: order.drinkName,
//                     quantity: order.quantity
//                 }
//                 filterdata.push(object)
//             }
//         })
//     })
//     return filterdata
// }
// filterdata = filterdata.filter(e => e._id !== '620ba70c8b1a49a77e13a734')
// filterdata.sort((a, b) => (a.quantity < b.quantity) ? 1 : -1)
// filterdata.map(obj => quantity+= obj.quantity)


//create matrix from users's orders data
const createDataMatrix = () => {
    const dataMatrix = data
    dataMatrix.map(user => {
        if(user.orders.length > 0){
            products.map(product => {
                const check = user.orders.find(order => order._id === product._id)
                if(!check){
                    const obj = {
                        _id: product._id,
                        drinkName: product.drinkName,
                        quantity: 0
                    }
                    user.orders.push(obj)
                }
            })
        }
    })
    return dataMatrix
}

const dataMatrix = createDataMatrix()

//filter matrix with only quantity
let filterDataMatrix = []
dataMatrix.map(items => {
    items.orders = items.orders.sort((a, b) => (a._id < b._id) ? 1 : -1)
    const dataQuantity = []
    items.orders.map(item => {
        dataQuantity.push(item.quantity)
    })
    filterDataMatrix.push(dataQuantity)
})


function dotp(x, y) {
    function dotp_sum(a, b) {
      return a + b;
    }
    function dotp_times(a, i) {
      return x[i] * y[i];
    }
    return x.map(dotp_times).reduce(dotp_sum, 0);
}

function cosineSimilarity(A,B){
    var similarity = dotp(A, B) / (Math.sqrt(dotp(A,A)) * Math.sqrt(dotp(B,B)));
    return similarity;
}


filterDataMatrix = filterDataMatrix.filter(e => e.length > 0)

cosineSimilarityMatrix = []

//create similarity matrix using cosin formula
filterDataMatrix.map(array1 => {
    temp = []
    filterDataMatrix.map(array2 => {
        temp.push(Math.round((cosineSimilarity(array1, array2) + Number.EPSILON) *100)/100)
    })
    cosineSimilarityMatrix.push(temp)
})

console.log(cosineSimilarityMatrix)
