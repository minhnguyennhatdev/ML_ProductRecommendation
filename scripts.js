const apiorder = {
    "success": true,
    "customersOrders": [
        {
            "customer": "0946294394",
            "orders": [
                {
                    "_id": "620ba70c8b1a49a77e13a734",
                    "drinkName": "PHINDI HẠNH NHÂN",
                    "quantity": 5
                },
                {
                    "_id": "620ba6f08b1a49a77e13a731",
                    "drinkName": "PHINDI KEM SỮA",
                    "quantity": 5
                },
                {
                    "_id": "620ba74f8b1a49a77e13a73d",
                    "drinkName": "BẠC XỈU ĐÁ",
                    "quantity": 1
                },
                {
                    "_id": "620ba7d28b1a49a77e13a74c",
                    "drinkName": "ESPRESSO",
                    "quantity": 1
                },
                {
                    "_id": "620ba7328b1a49a77e13a73a",
                    "drinkName": "PHINDI HỒNG TRÀ",
                    "quantity": 1
                },
                {
                    "_id": "620ba7758b1a49a77e13a743",
                    "drinkName": "PHIN SỮA ĐÁ",
                    "quantity": 1
                }
            ]
        },
        {
            "customer": "09812398522",
            "orders": []
        },
        {
            "customer": "07512392312",
            "orders": [
                {
                    "_id": "620ba7328b1a49a77e13a73a",
                    "drinkName": "PHINDI HỒNG TRÀ",
                    "quantity": 1
                },
                {
                    "_id": "620ba87d8b1a49a77e13a75b",
                    "drinkName": "FREEZE TRÀ XANH",
                    "quantity": 1
                },
                {
                    "_id": "620ba8f28b1a49a77e13a76a",
                    "drinkName": "TRÀ THẠCH ĐÀO",
                    "quantity": 1
                }
            ]
        },
        {
            "customer": "0587172225",
            "orders": [
                {
                    "_id": "620ba7238b1a49a77e13a737",
                    "drinkName": "PHINDI CHOCO",
                    "quantity": 1
                },
                {
                    "_id": "620ba70c8b1a49a77e13a734",
                    "drinkName": "PHINDI HẠNH NHÂN",
                    "quantity": 1
                },
                {
                    "_id": "620ba7328b1a49a77e13a73a",
                    "drinkName": "PHINDI HỒNG TRÀ",
                    "quantity": 1
                },
                {
                    "_id": "620ba75f8b1a49a77e13a740",
                    "drinkName": "PHIN ĐEN ĐÁ",
                    "quantity": 1
                }
            ]
        },
        {
            "orders": []
        },
        {
            "customer": "0127552132",
            "orders": [
                {
                    "_id": "620ba7328b1a49a77e13a73a",
                    "drinkName": "PHINDI HỒNG TRÀ",
                    "quantity": 1
                },
                {
                    "_id": "620ba91b8b1a49a77e13a76d",
                    "drinkName": "TRÀ THANH ĐÀO",
                    "quantity": 1
                },
                {
                    "_id": "620ba8f28b1a49a77e13a76a",
                    "drinkName": "TRÀ THẠCH ĐÀO",
                    "quantity": 1
                }
            ]
        },
        {
            "customer": "08512325521",
            "orders": [
                {
                    "_id": "620ba7328b1a49a77e13a73a",
                    "drinkName": "PHINDI HỒNG TRÀ",
                    "quantity": 1
                },
                {
                    "_id": "620ba6f08b1a49a77e13a731",
                    "drinkName": "PHINDI KEM SỮA",
                    "quantity": 1
                }
            ]
        }
    ]
}

const apiproduct = {
    "success": true,
    "drinks": [
        {
            "_id": "620ba6f08b1a49a77e13a731",
            "createAt": "2022-02-15T13:13:20.517Z",
            "drinkName": "PHINDI KEM SỮA",
            "drinkImage": "/drinks/COFFEE/PHINDI KEM SỮA.png",
            "defaultPrice": [
                39000,
                45000,
                49000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba70c8b1a49a77e13a734",
            "createAt": "2022-02-15T13:13:48.510Z",
            "drinkName": "PHINDI HẠNH NHÂN",
            "drinkImage": "/drinks/COFFEE/PHINDI HẠNH NHÂN.png",
            "defaultPrice": [
                39000,
                45000,
                49000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7238b1a49a77e13a737",
            "createAt": "2022-02-15T13:14:11.585Z",
            "drinkName": "PHINDI CHOCO",
            "drinkImage": "/drinks/COFFEE/PHINDI CHOCO.png",
            "defaultPrice": [
                39000,
                45000,
                49000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7328b1a49a77e13a73a",
            "createAt": "2022-02-15T13:14:26.443Z",
            "drinkName": "PHINDI HỒNG TRÀ",
            "drinkImage": "/drinks/COFFEE/PHINDI HỒNG TRÀ.png",
            "defaultPrice": [
                39000,
                45000,
                49000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, lần đầu tiên kết hợp cùng Hồng Trà mang đến hương vị quyện êm, phiên bản giới hạn chỉ trong mùa lễ hội 2020!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba74f8b1a49a77e13a73d",
            "createAt": "2022-02-15T13:14:55.226Z",
            "drinkName": "BẠC XỈU ĐÁ",
            "drinkImage": "/drinks/COFFEE/BẠC XỈU ĐÁ.png",
            "defaultPrice": [
                29000,
                35000,
                39000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ “đô\" cà phê nhưng vẫn thơm ngon, chất lừ không kém!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba75f8b1a49a77e13a740",
            "createAt": "2022-02-15T13:15:11.687Z",
            "drinkName": "PHIN ĐEN ĐÁ",
            "drinkImage": "/drinks/COFFEE/PHIN ĐEN ĐÁ.png",
            "defaultPrice": [
                29000,
                35000,
                39000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin. ",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7758b1a49a77e13a743",
            "createAt": "2022-02-15T13:15:33.108Z",
            "drinkName": "PHIN SỮA ĐÁ",
            "drinkImage": "/drinks/COFFEE/PHIN SỮA ĐÁ.png",
            "defaultPrice": [
                29000,
                35000,
                39000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7868b1a49a77e13a746",
            "createAt": "2022-02-15T13:15:50.587Z",
            "drinkName": "PHIN ĐEN NÓNG",
            "drinkImage": "/drinks/COFFEE/PHIN ĐEN NÓNG.png",
            "defaultPrice": [
                29000,
                35000,
                39000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha từ Phin, cho thêm 1 thìa đường, mang đến vị cà phê đậm đà chất Phin. ",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7ae8b1a49a77e13a749",
            "createAt": "2022-02-15T13:16:30.736Z",
            "drinkName": "CARAMEL MACCHIATO",
            "drinkImage": "/drinks/COFFEE/CARAMEL MACCHIATO.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Thỏa mãn cơn thèm ngọt! Ly cà phê Caramel Macchiato bắt đầu từ dòng sữa tươi và lớp bọt sữa béo ngậy, sau đó hòa quyện cùng cà phê espresso đậm đà và sốt caramel ngọt ngào. Thông qua bàn tay điêu luyện của các chuyên gia pha chế, mọi thứ hoàn toàn được nâng tầm thành nghệ thuật! Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7d28b1a49a77e13a74c",
            "createAt": "2022-02-15T13:17:06.630Z",
            "drinkName": "ESPRESSO",
            "drinkImage": "/drinks/COFFEE/ESPRESSO.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Đích thực là ly cà phê espresso ngon đậm đà! Được chiết xuất một cách hoàn hảo từ loại cà phê rang được phối trộn độc đáo từ những hạt cà phê Robusta và Arabica chất lượng hảo hạng.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba7e38b1a49a77e13a74f",
            "createAt": "2022-02-15T13:17:23.829Z",
            "drinkName": "LATTE",
            "drinkImage": "/drinks/COFFEE/LATTE.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Ly cà phê sữa ngọt ngào đến khó quên! Với một chút nhẹ nhàng hơn so với Cappuccino, Latte của chúng tôi bắt đầu với cà phê espresso, sau đó thêm sữa tươi và bọt sữa một cách đầy nghệ thuật. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8008b1a49a77e13a752",
            "createAt": "2022-02-15T13:17:52.066Z",
            "drinkName": "CAPPUCCINO",
            "drinkImage": "/drinks/COFFEE/CAPPUCCINO.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "COFFEE",
            "sale": 0,
            "description": "Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte, Cappuccino của chúng tôi bắt đầu với cà phê espresso, sau đó thêm một lượng tương đương giữa sữa tươi và bọt sữa cho thật hấp dẫn. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8318b1a49a77e13a755",
            "createAt": "2022-02-15T13:18:41.392Z",
            "drinkName": "CARAMEL PHIN FREEZE",
            "drinkImage": "/drinks/FREEZE/CARAMEL PHIN FREEZE.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "FREEZE",
            "sale": 0,
            "description": "Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ có tại Highlands Coffee, cùng với caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần nhau.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8618b1a49a77e13a758",
            "createAt": "2022-02-15T13:19:29.775Z",
            "drinkName": "CLASSIC PHIN FREEZE",
            "drinkImage": "/drinks/FREEZE/CLASSIC PHIN FREEZE.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "FREEZE",
            "sale": 0,
            "description": "Thơm ngon đậm đà! Được kết hợp từ cà phê pha Phin truyền thống chỉ có tại Highlands Coffee, cùng với thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và bột ca cao đậm đà. Món nước hoàn hảo để khởi đầu câu chuyện cùng bạn bè.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba87d8b1a49a77e13a75b",
            "createAt": "2022-02-15T13:19:57.003Z",
            "drinkName": "FREEZE TRÀ XANH",
            "drinkImage": "/drinks/FREEZE/FREEZE TRÀ XANH.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "FREEZE",
            "sale": 0,
            "description": "Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8958b1a49a77e13a75e",
            "createAt": "2022-02-15T13:20:21.591Z",
            "drinkName": "COOKIES & CREAM",
            "drinkImage": "/drinks/FREEZE/COOKIES & CREAM.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "FREEZE",
            "sale": 0,
            "description": "Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8a68b1a49a77e13a761",
            "createAt": "2022-02-15T13:20:38.906Z",
            "drinkName": "FREEZE SÔ-CÔ-LA",
            "drinkImage": "/drinks/FREEZE/FREEZE SÔ-CÔ-LA.png",
            "defaultPrice": [
                49000,
                59000,
                69000
            ],
            "category": "FREEZE",
            "sale": 0,
            "description": "Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8d58b1a49a77e13a764",
            "createAt": "2022-02-15T13:21:25.203Z",
            "drinkName": "TRÀ SEN VÀNG",
            "drinkImage": "/drinks/TEA/TRÀ SEN VÀNG.png",
            "defaultPrice": [
                39000,
                49000,
                55000
            ],
            "category": "TEA",
            "sale": 0,
            "description": "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8e18b1a49a77e13a767",
            "createAt": "2022-02-15T13:21:37.263Z",
            "drinkName": "TRÀ THẠCH VẢI",
            "drinkImage": "/drinks/TEA/TRÀ THẠCH VẢI.png",
            "defaultPrice": [
                39000,
                49000,
                55000
            ],
            "category": "TEA",
            "sale": 0,
            "description": "Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba8f28b1a49a77e13a76a",
            "createAt": "2022-02-15T13:21:54.216Z",
            "drinkName": "TRÀ THẠCH ĐÀO",
            "drinkImage": "/drinks/TEA/TRÀ THẠCH ĐÀO.png",
            "defaultPrice": [
                39000,
                49000,
                55000
            ],
            "category": "TEA",
            "sale": 0,
            "description": "Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo.",
            "ingredients": [],
            "__v": 0
        },
        {
            "_id": "620ba91b8b1a49a77e13a76d",
            "createAt": "2022-02-15T13:22:35.205Z",
            "drinkName": "TRÀ THANH ĐÀO",
            "drinkImage": "/drinks/TEA/TRÀ THANH ĐÀO.png",
            "defaultPrice": [
                39000,
                49000,
                55000
            ],
            "category": "TEA",
            "sale": 0,
            "description": "Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.",
            "ingredients": [],
            "__v": 0
        }
    ]
}

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

filterDataMatrix.map(array1 => {
    temp = []
    filterDataMatrix.map(array2 => {
        temp.push(Math.round((cosineSimilarity(array1, array2) + Number.EPSILON) *100)/100)
    })
    cosineSimilarityMatrix.push(temp)
})

console.log(cosineSimilarityMatrix)
