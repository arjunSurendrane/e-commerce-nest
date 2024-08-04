# Api Docs
## base_url: https://api-dev-ecommerce.onrender.com

### Get Products
This endpoint retrieves a list of products with pagination support.

Request
```
curl --location --request GET 'https://api-dev-ecommerce.onrender.com/products?limit=10&skip=0&search=""' \
--header 'Content-Type: application/json'
```

Query Parameters
***
* limit (optional): Specifies the number of products to return. Default is 10.
* skip (optional): Specifies the number of products to skip. Useful for pagination. Default is 0.
* search (optional): Search filter by product name
***

Response
```
{
    "status": "success",
    "statusCode": 200,
    "data": [
        {
            "_id": "635f74938cbf9bb0c73171c0",
            "productName": "Nothing phone 1",
            "varient": "6GB/128GB",
            "color": "Black",
            "price": 37999,
            "discountPrice": 30019,
            "category": "631c07e595325670d392fc9c",
            "quantity": "95",
            "offer_name": "shopCircuit Special Offer",
            "discount": 21,
            "image": [
                "product-Nothing phone 1-1667200147800.jpg",
                "product-Nothing phone 1-1667200147826.jpg",
                "product-Nothing phone 1-1667200147838.jpg",
                "product-Nothing phone 1-1667200147848.jpg"
            ],
            "createdAt": "2022-10-31T07:09:07.959Z",
            "updatedAt": "2022-11-10T16:22:17.774Z",
            "__v": 0
        },
        {
            "_id": "635f769a8cbf9bb0c7317225",
            "productName": "Google Pixel 7",
            "varient": "8GB/128GB",
            "color": "Obsidian",
            "price": 59999,
            "discountPrice": 55199,
            "category": "631c07e595325670d392fc9c",
            "quantity": "73",
            "offer_name": "Google diwali offer",
            "discount": 5,
            "image": [
                "product-Google Pixel 7-1667200666607.jpg",
                "product-Google Pixel 7-1667200666623.jpg",
                "product-Google Pixel 7-1667200666627.jpg",
                "product-Google Pixel 7-1667200666634.jpg"
            ],
            "createdAt": "2022-10-31T07:17:46.692Z",
            "updatedAt": "2023-03-13T05:38:04.741Z",
            "__v": 0
        },
        {
            "_id": "635f77e68cbf9bb0c73172bd",
            "productName": "Iphone 14",
            "varient": "128GB",
            "color": "blue",
            "price": 80999,
            "discountPrice": 74519,
            "category": "631c07e595325670d392fc9c",
            "quantity": "113",
            "offer_name": "mega sale",
            "discount": 5,
            "image": [
                "product-Iphone 14-1667200998825.jpg",
                "product-Iphone 14-1667200998830.jpg",
                "product-Iphone 14-1667200998841.jpg",
                "product-Iphone 14-1667200998850.jpg"
            ],
            "createdAt": "2022-10-31T07:23:18.926Z",
            "updatedAt": "2024-07-10T12:11:45.645Z",
            "__v": 0
        },
        {
            "_id": "635f7c838cbf9bb0c73174be",
            "productName": "xiaomi 11T pro",
            "varient": "8GB/128GB",
            "color": "Dark Nova",
            "price": 41999,
            "discountPrice": 38219,
            "category": "631c07e595325670d392fc9c",
            "quantity": "119",
            "offer_name": "moibileZona",
            "discount": 9,
            "image": [
                "product-xiaomi 11T pro-1667202179389.jpg",
                "product-xiaomi 11T pro-1667202179395.jpg",
                "product-xiaomi 11T pro-1667202179399.jpg",
                "product-xiaomi 11T pro-1667202179405.jpg"
            ],
            "createdAt": "2022-10-31T07:42:59.435Z",
            "updatedAt": "2022-11-10T10:35:56.321Z",
            "__v": 0
        },
        {
            "_id": "635f7e368cbf9bb0c7317664",
            "productName": "APPLE Watch Series7",
            "varient": "GPS, 45mm",
            "color": "Blue",
            "price": 44900,
            "discountPrice": 41308,
            "category": "63204e301e78b0bbcfbd40c9",
            "quantity": "108",
            "offer_name": "November Offer",
            "discount": 3,
            "image": [
                "product-APPLE Watch Series7-1667202614775.jpg",
                "product-APPLE Watch Series7-1667202614782.jpg",
                "product-APPLE Watch Series7-1667202614786.jpg",
                "product-APPLE Watch Series7-1667202614790.jpg"
            ],
            "createdAt": "2022-10-31T07:50:14.814Z",
            "updatedAt": "2022-11-08T10:06:26.211Z",
            "__v": 0
        },
        {
            "_id": "635f7fa58cbf9bb0c731774d",
            "productName": "Realme Watch 3 pro",
            "varient": "1.78\" AMOLED 368 x 448p Hi-res Smart AOD ",
            "color": "Blue",
            "price": 6999,
            "discountPrice": 5039,
            "category": "63204e301e78b0bbcfbd40c9",
            "quantity": "120",
            "offer_name": "Mega sale",
            "discount": 28,
            "image": [
                "product-Realme Watch 3 pro-1667202981608.jpg",
                "product-Realme Watch 3 pro-1667202981615.jpg",
                "product-Realme Watch 3 pro-1667202981624.jpg",
                "product-Realme Watch 3 pro-1667202981630.jpg"
            ],
            "createdAt": "2022-10-31T07:56:21.655Z",
            "updatedAt": "2022-11-08T10:06:26.211Z",
            "__v": 0
        },
        {
            "_id": "635f81c28cbf9bb0c7317ca6",
            "productName": "Realme Book Slim",
            "varient": "i5 11th gen | 512GB SSD",
            "color": "Blue",
            "price": 69999,
            "discountPrice": 60199,
            "category": "6333ef8977f64567e0545682",
            "quantity": "295",
            "offer_name": "Big billion Offer",
            "discount": 14,
            "image": [
                "product-Realme Book Slim-1667203522315.jpg",
                "product-Realme Book Slim-1667203522331.jpg",
                "product-Realme Book Slim-1667203522337.jpg",
                "product-Realme Book Slim-1667203522340.jpg"
            ],
            "createdAt": "2022-10-31T08:05:22.357Z",
            "updatedAt": "2022-11-09T09:50:12.991Z",
            "__v": 0
        },
        {
            "_id": "635f835d8cbf9bb0c7317fb9",
            "productName": "HP Pavilion",
            "varient": "Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 3050/144 Hz)",
            "color": "Black",
            "price": 81869,
            "discountPrice": 65495,
            "category": "6333ef8977f64567e0545682",
            "quantity": "982",
            "offer_name": "Mega billion sale",
            "discount": 20,
            "image": [
                "product-HP Pavilion-1667203933672.jpg",
                "product-HP Pavilion-1667203933685.jpg",
                "product-HP Pavilion-1667203933693.jpg",
                "product-HP Pavilion-1667203933701.jpg"
            ],
            "createdAt": "2022-10-31T08:12:13.726Z",
            "updatedAt": "2023-03-13T05:36:57.767Z",
            "__v": 0
        },

```
