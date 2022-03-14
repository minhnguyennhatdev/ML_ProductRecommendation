//data from data.js
const data = apiorder.customersOrders
const products = apiproduct.drinks

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

//soft datamatrix by _id and filter with only quantity
let filterDataMatrix = []
dataMatrix.map(items => {
    items.orders = items.orders.sort((a, b) => (a._id < b._id) ? 1 : -1)
    const dataQuantity = []
    items.orders.map(item => {
        dataQuantity.push(item.quantity)
    })
    filterDataMatrix.push(dataQuantity)
})

//calculating 2 array distance using cosin
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

//create similarity matrix using cosin 
cosineSimilarityMatrix = []
filterDataMatrix.map(array1 => {
    temp = []
    filterDataMatrix.map(array2 => {
        temp.push(Math.round((cosineSimilarity(array1, array2) + Number.EPSILON) *100)/100)
    })
    cosineSimilarityMatrix.push(temp)
})

let decor = (v, i) => [v, i];
let undecor = a => a[1];
let argsort = arr => arr.map(decor).sort().map(undecor);

// const argsort = a=>a.map(d).sort().map(u);d=(v,i)=>[v,i];u=i=>i[1]

Array.prototype.sum = function() {
    return (! this.length) ? 0 : this.slice(1).sum() +
        ((typeof this[0] == 'number') ? this[0] : 0);
};

function getArray(table1, table2)
{
    var i, out = [];//literal new array
    for(i=0;i<table1.length;i++)
    {
        out.push([table1[i],table2[i]]);
    }
    return out;
}

const predict = (A, u, i) => {
    const k = 2
    const user_rated_i = []
    A.map(e => {
        if(A[A.indexOf(e)][i] !== 0) {
            user_rated_i.push(A.indexOf(e))
        }
    })
    sim = []
    user_rated_i.map(e => {
        sim.push(cosineSimilarityMatrix[u][e])
    })
    a = argsort(sim).slice(-2)
    nearest_s = [ sim[a[0]], sim[a[1]] ]
    const temp = [ user_rated_i[a[0]], user_rated_i[a[1]] ]
    rating = [ A[temp[0]][i], A[temp[1]][i] ] 
    r_bar = ( rating[0]*nearest_s[0] + rating[1]*nearest_s[1] )/( nearest_s[0]+nearest_s[1] )
    return Math.round(r_bar)
}

const predictMatrix = () => {
    var predict_matrix = filterDataMatrix.map(function(arr) {
        return arr.slice();
    });
    for (let u = 0; u < predict_matrix.length; u++) {
        for (let i = 0; i < predict_matrix[0].length; i++) {
            if (filterDataMatrix[u][i] === 0) {
                id = i
                predict_matrix[u][i] = predict(filterDataMatrix,u,id)
            }
        }
    }
    return predict_matrix
}

//result
console.log(dataMatrix)
console.log(filterDataMatrix)
console.log(predictMatrix())