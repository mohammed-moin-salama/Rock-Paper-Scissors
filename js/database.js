var list2 = [
    { id: 2, name: 'Teddy Bear', price: '30:00', img: 'image/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png' },
    { id: 1, name: 'Happy Flower', price: ' 38.00', img: 'image/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png' },
    { id: 2, name: 'Mega Plush Toy', price: '38.00', img: 'image/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png' },
    { id: 1, name: 'Lift Machine', price: ' 24.00 ', img: 'image/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png' },
    { id: 2, name: 'Cute Dog', price: '24.00', img: 'image/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png' },
    { id: 1, name: 'Wooden Camera', price: '32.00', img: 'image/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min (1).png' },
    { id: 1, name: 'Little Rabbit', price: '16.00', img: 'image/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png' },
    { id: 2, name: 'Little Friend', price: '27.00', img: 'image/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png' },
    { id: 2, name: 'Christmas Deer', price: '19.00', img: 'image/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min-p-500.png' },
    { id: 1, name: 'Rainbow Truck', price: '28.00', img: 'image/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min.png' },
    { id: 2, name: 'Pluto Yellow Dog', price: '28.00', img: 'image/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png' },
    { id: 1, name: 'Happy Dog', price: '30:00', img: 'image/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min-p-500.png' },
    { id: 1, name: 'Caterpillar', price: '18.00', img: 'image/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min-p-500.png' },
    { id: 2, name: 'Grey Elephant', price: '45.00', img: 'image/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png' },
    { id: 1, name: 'Wooden Tractor', price: '22.00', img: 'image/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min-p-800.png' },
    { id: 2, name: 'Funny Clown', price: '36.00', img: 'image/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min-p-500.png' }




];
var arrayimg = [
    'image/5badecf79395558fbeb88a49_instagram-01.jpg',
    'image/5badecf735e113f8679a57e6_instagram-02.jpg',
    'image/5badecf735e11327b99a57e7_instagram-03.jpg',
    'image/5badecf7939555df08b88a48_instagram-04.jpg',
    'image/5badecf7939555514eb88a4a_instagram-05.jpg',
    'image/5badecf71f2da2228d17155f_instagram-06.jpg'



];
var col = document.getElementById('col');
var row = document.getElementById('row');
var copy = document.getElementById('copy');



var array = list2.filter(function (elm) {

    return elm.id == 1;
});