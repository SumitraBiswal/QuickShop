import apple from "../../assets/grocery/apple.png.jpeg"
import mango from "../../assets/grocery/mango.jpeg"
import Grappes from "../../assets/grocery/Grappes.jpeg"
import Amultaza from "../../assets/grocery/amul taza.jpeg"
import Avacado from "../../assets/grocery/Avacado.jpeg"
import Bagel from "../../assets/grocery/Bagel.jpeg"
import Bread from "../../assets/grocery/Bread.jpeg"
import Brinjal from "../../assets/grocery/Brinjal.jpeg"
import Broccoli from "../../assets/grocery/Broccoli.jpeg"
import Brownbread from "../../assets/grocery/Brown Bread.jpeg"
import Burggerbun from "../../assets/grocery/burgger bun.jpeg"
import Butter from "../../assets/grocery/Butter.jpeg"
import Cabbage from "../../assets/grocery/Cabbage.jpeg"
import Carrot from "../../assets/grocery/carrot.jpeg"
import Cauliflower from "../../assets/grocery/cauliflower.jpeg"
import Cheesesslice from "../../assets/grocery/Cheeses slice.jpeg"
import Chilli from "../../assets/grocery/chilli.jpeg"
import cocacola from "../../assets/grocery/Cocacola.jpeg"
import Coffee2 from "../../assets/grocery/Coffee (2).jpeg"
import Coffee from "../../assets/grocery/coffee.jpeg"
import Lemontea from "../../assets/grocery/LemonTea.jpeg"
import Croissant from "../../assets/grocery/Croissant.jpeg"
import Cucumber from "../../assets/grocery/Cucumber.jpeg"
import Donut from "../../assets/grocery/Donut.jpeg"
import Dragonfruit from "../../assets/grocery/Dragon fruit.jpeg"
import Focaccia from "../../assets/grocery/Focaccia.jpeg"
import Guava from "../../assets/grocery/Guava.jpeg"
import Icecream from "../../assets/grocery/Icecream.jpeg"
import Kiwi from "../../assets/grocery/kiwi.jpeg"
import Lemonade from "../../assets/grocery/Lemonade.jpeg"
import Lettuce from "../../assets/grocery/lettuce.jpeg"
import Milk from "../../assets/grocery/Milk.jpeg"
import Muffin from "../../assets/grocery/Muffin.jpeg"
import Watermillon from "../../assets/grocery/Watermillon.jpeg"
import Onion from "../../assets/grocery/onion.jpeg"
import Orange from "../../assets/grocery/oranges.jpeg"
import Papaya from "../../assets/grocery/papaya.jpeg"
import Pear from "../../assets/grocery/pear.jpeg"
import Pineapple from "../../assets/grocery/pineapple.jpeg"
import Pizzabase from "../../assets/grocery/Pizza base.jpeg"
import Potato from "../../assets/grocery/Potato.jpeg"
import Pumkin from "../../assets/grocery/pumkin.jpeg"
import Realjuice from "../../assets/grocery/Real juice.jpeg"
import Shimlamirch from "../../assets/grocery/shimla Mirch.jpeg"
import Sourcream from "../../assets/grocery/Sour cream.jpeg"
import Spinach from "../../assets/grocery/Spinach.jpeg"
import Sprite from "../../assets/grocery/sprite.jpeg"
import Straberry from "../../assets/grocery/Straberry.jpeg"
import Tea from "../../assets/grocery/Tea.jpeg"
import Tomato from "../../assets/grocery/Tomato.jpeg"




const subCategories=[
    {id: 1 , categoryId: 1 , title: " apple" , image: apple , price: " 200" , discount:  " 50"},
    {id: 2, categoryId:  1, title: "mango " , image:mango  , price: "180" , discount:  "40 "},
    {id: 3 , categoryId: 1 , title: "Grappes " , image:  Grappes, price: "220" , discount:  "60 "},
    {id: 4 , categoryId: 1 , title: "Avacado " , image: Avacado , price: "240" , discount:  "35 "},
    {id:  5, categoryId: 1 , title: "Kiwi " , image: Kiwi , price: "220" , discount:  "50 "},
    {id: 6 , categoryId:  1, title: " Papaya" , image: Papaya , price: "120" , discount:  "40 "},
    {id: 7 , categoryId:  1, title: " Orange " , image: Orange , price: "160" , discount:  " 40"},
    {id: 8 , categoryId: 1 , title: "Pear " , image: Pear , price: "180" , discount:  " 40"},
    {id: 9 , categoryId: 1 , title: " Guava" , image: Guava , price: "220" , discount:  " 50"},
    {id: 10 , categoryId: 1 , title: "Straberry " , image: Straberry , price: "280" , discount:  "60 "},
    {id: 11 , categoryId: 1 , title: "Pineapple " , image: Pineapple , price: "320" , discount:  "30 "},
    {id: 12 , categoryId:  1, title: "Watermillon " , image: Watermillon , price: "40" , discount:  "10 "},
    {id:13  , categoryId:  2, title: " Onion" , image:Onion  , price: "60" , discount:  "20 "},
    {id: 14 , categoryId: 2 , title: "Potato " , image: Potato , price: "40" , discount:  "10 "},

    {id: 15 , categoryId: 2 , title: "Carrot " , image: Carrot , price: "80" , discount:  "20 "},
    {id: 16 , categoryId: 2 , title: "Chilli " , image:Chilli  , price: "100" , discount:  "20 "},
    {id: 17 , categoryId: 2 , title: "tomato " , image: Tomato , price: "110" , discount:  " 20"},
    {id: 18 , categoryId: 2 , title: " Cucumber" , image: Cucumber , price: "80" , discount:  "10 "},
    {id: 19 , categoryId: 2 , title: " Broccoli" , image: Broccoli , price: "160" , discount:  "40 "},
    {id: 20 , categoryId: 2 , title: " Lettuce" , image: Lettuce , price: "180" , discount:  " 40"},
    {id: 21 , categoryId: 2 , title: "Culiflower " , image: Cauliflower , price: "220" , discount:  " 100"},
    {id:22  , categoryId: 2 , title: " Spinach" , image: Spinach , price: "60" , discount:  "30 "},
    {id: 23 , categoryId: 2 , title: "Shimlamirch " , image: Shimlamirch , price: "80" , discount:  "10 "},
    {id: 24 , categoryId:  2, title: "pumkin " , image: Pumkin , price: "100" , discount:  "20 "},
    {id: 25 , categoryId: 2 , title: "Cabbage " , image: Cabbage , price: "100" , discount:  "20 "},
    {id: 26 , categoryId: 2 , title: "Brinjal " , image: Brinjal , price: "80" , discount:  "20 "},
    {id:27  , categoryId: 1 , title: " Dragonfruit " , image: Dragonfruit , price: "220" , discount:  " 15"},
    {id: 28 , categoryId: 3 , title: "Cheesesslice " , image: Cheesesslice , price: "120" , discount:  "25 "},
    {id: 29 , categoryId: 3 , title: "Milk " , image: Milk , price: "80" , discount:  " 30"},
    {id: 30 , categoryId: 3 , title: "Icecream " , image: Icecream , price: "187" , discount:  "25"},
    {id: 31 , categoryId: 3 , title: " Sourcream " , image: Sourcream , price: "235" , discount:  "57 "},
    {id: 32 , categoryId:  3, title: " Amultaza" , image: Amultaza , price: "25" , discount:  "12 "},
    {id: 33 , categoryId: 4 , title: " Brownbread" , image: Brownbread , price: "30" , discount:  "8 "},
    {id: 34 , categoryId: 4 , title: "Bread " , image: Bread , price: "35" , discount:  "7 "},
    {id:35  , categoryId: 4 , title: " Croissant " , image: Croissant , price: "58" , discount:  "8 "},
    {id: 36 , categoryId: 4 , title: " Muffin " , image: Muffin , price: "57" , discount:  " 12"},
    {id: 37 , categoryId: 4 , title: " Donut " , image: Donut , price: "45" , discount:  " 14"},
    {id: 38 , categoryId: 4 , title: " Focaccia " , image: Focaccia , price: "75" , discount:  "20 "},
    {id: 39 , categoryId: 5 , title: "Pizzabase " , image:Pizzabase  , price: "100" , discount:  "50 "},
    {id:40  , categoryId: 5 , title: "Burggerbun " , image: Burggerbun , price: "110" , discount:  "50 "},
    {id: 41 , categoryId: 5 , title: " Cocacola " , image:cocacola  , price: "45" , discount:  "10 "},
    {id: 42 , categoryId: 5 , title: " Sprite" , image: Sprite , price: "45" , discount:  " 10"},
    {id: 43 , categoryId:5, title: "Realjuice " , image: Realjuice , price: "66" , discount:  "10 "},
    {id: 44 , categoryId: 5 , title: "Lemontea " , image: Lemontea , price: "45" , discount:  "5 "},
    {id: 45 , categoryId: 5 , title: " Tea" , image: Tea , price: "110" , discount:  " 35"},
    {id: 46 , categoryId:  5, title: "Coffee " , image: Coffee , price: "30" , discount:  " 23"},
    {id: 47 , categoryId: 5 , title: " Coffee2" , image: Coffee2 , price: "118" , discount:  " 20"},
    {id: 48 , categoryId: 5 , title: "Lemondae " , image: Lemonade , price: "45" , discount:  " 34"},
    {id: 49 , categoryId: 4 , title: "Bagel " , image: Bagel , price: "26" , discount:  "18 "},
    {id: 50 , categoryId: 3 , title: "Butter " , image: Butter , price: "69" , discount:  "12 "},
    
    
    
];
export default subCategories