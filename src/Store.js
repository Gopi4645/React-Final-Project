import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:"Drumsticks",price:100,image:"drumsticks.webp"},
            {name:"carrot",price:70,image:"carrot.webp"},
            {name:"Tomato",price:200,image:"tomato.webp"},
            {name:"Pumpkin",price:180,image:"pumpkin.webp"},
            {name:"Cabbage",price:200,image:"cabbage.jpg"},
            {name:"Potato",price:180,image:"potato.jpg"},
            {name:"beetroot",price:180,image:"beetroot.webp"},
        ],
        nonveg:[
        {name:"Chicken Kababs",price:500,image:"chicken kababs.webp"},
        {name:"Chicken fry",price:470,image:"chicken fry.webp"},
        {name:"Mutton Mandi",price:700,image:"mutton mandi.webp"},
        {name:"Chicken Mandi",price:500,image:"chicken mandi.webp"},
        {name:"Mutton fry",price:800,image:"mutton fry.webp"},
        {name:"Fish",price:400,image:"fish.webp"},
        {name:"Prawns",price:350,image:"prawns.webp"},
        {name:"Egg Fry",price:200,image:"egg fry.webp"},
        {name:"Mutton Kabab",price:200,image:"mutton kabab.webp"}
        ],
        fruits:[
            {name:"Grapes",price:120,image:"grapes.webp"},
            {name:"Pineapple",price:50,image:"pineapple.webp"},
            {name:"Mango",price:60,image:"mango.webp"},
            {name:"Kiwi",price:80,image:"kiwi.webp"},
            {name:"Banana",price:80,image:"banana.jpg"},
            {name:"Straberry",price:80,image:"strawberry.webp"},
            {name:"Promogranite",price:80,image:"promogranite.webp"}
            ],
        milk:[
         
        {name:"Jersey",price:60,image:"jersey.webp"},
        {name:"CountryDelight",price:70,image:"country delight.webp"},
        {name:"Heritage",price:90,image:"heritage.webp"},
        {name:"Sangam",price:100,image:"sangam.webp"},
        {name:"Fresh Milk",price:80,image:"freshmilk.jpg"},
        {name:"Butter Milk",price:150,image:"butter milk.webp"},
        {name:"Fruits Milk",price:130,image:"fruits milk.webp"},
        {name:"Fruit Milk",price:80,image:"fruitmilk.jpg"},
        {name:"Milk",price:30,image:"milk.webp"}
       
        ],
        fastfood:[
            {name:"Burger",price:120,image:"burger.webp"},
            {name:"Pizza",price:220,image:"pizza.webp"},
            {name:"Fries",price:120,image:"fries.webp"},
            {name:"Mozzarella Sticks",price:250,image:"mozorilla.webp"},
            {name:"Tacos",price:250,image:"tacos.webp"},
            {name:"Fried Chicken",price:150,image:"fried chicken.webp"},
            {name:"Onion Rings",price:120,image:"onion rings.webp"},
            {name:"Chicken Rice",price:110,image:"chicken rice.webp"},
            

            
            ],
            beverages:[
                {name:"Thumsup",price:20,image:"thumsup.webp"},
                {name:"Sprite",price:50,image:"sprite.webp"},
                {name:"Coke",price:60,image:"coke.webp"},
                {name:"Mojito",price:80,image:"mojito.webp"},
                {name:"Maaza",price:45,image:"maaza.webp"},
                {name:"Fanta",price:40,image:"fanta.webp"},
                {name:"Mountain Dew",price:100,image:"mountain dew.webp"}
                ]
    },
    reducers:{}
});

const cartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter(item =>item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
            return state.filter(item =>item.name!==action.payload.name);
        },
        clearCart:()=>[]
    }
});
let purchaseDetailsSlice=createSlice({
    name:'purchase',
    initialState:[],
    reducers:{
        purchaseItems:(state,action)=>{
            state.push(action.payload);
        },
    }
});
const authSlice = createSlice({
    name:'auth',
    initialState:{ 
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username") || "",
    },
    reducers:{ 
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);
        },
        Logout:(state)=>{
            state.isAuthenticated=false;
            state.user=" ";
            localStorage.removeItem("username");
        }
    }
});
const store =configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        purchase: purchaseDetailsSlice.reducer,
        auth:authSlice.reducer
    },  
});
export default store;
export const{addToCart,increment,decrement,remove}=cartSlice.actions;
export const{purchaseItems}=purchaseDetailsSlice.actions;
export const{clearCart}=cartSlice.actions;
export const{login,Logout}=authSlice.actions;