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
        {name:"Chicken Kababs",price:500,image:"chicken kababs.jpg"},
        {name:"Chicken fry",price:470,image:"chicken fry.jpg"},
        {name:"Mutton fry",price:800,image:"mutton fry.jpg"},
        {name:"Fish",price:400,image:"fish.jpg"},
        {name:"Prawns",price:350,image:"prawns.jpg"},
        {name:"Egg Fry",price:200,image:"egg fry.webp"},
        {name:"Mutton Kabab",price:200,image:"mutton kabab.webp"}
        ],
        fruits:[
            {name:"Grapes",price:120,image:"grapes.webp"},
            {name:"Pineapple",price:50,image:"pineapple.webp"},
            {name:"Mango",price:60,image:"mango.avif"},
            {name:"Kiwi",price:80,image:"kiwi.jpg"},
            {name:"Banana",price:80,image:"banana.jpg"},
            {name:"Straberry",price:80,image:"strawberry.webp"},
            {name:"Promogranite",price:80,image:"promogranite.webp"}
            ],
        milk:[
        {name:"Jersey",price:20,image:"jersey.webp"},
        {name:"CountryDelight",price:50,image:"country delight.jpg"},
        {name:"Heritage",price:60,image:"heritage.jpg"},
        {name:"Sangam",price:80,image:"sangam.avif"},
        {name:"Fresh Milk",price:80,image:"freshmilk.jpg"},
        {name:"Butter Milk",price:80,image:"buttermilk.jpg"},
        {name:"Fruit Milk",price:80,image:"fruitmilk.jpg"}
        ],
        fastfood:[
            {name:"Burger",price:120,image:"burger.webp"},
            {name:"Pizza",price:220,image:"pizza.webp"},
            {name:"Fries",price:120,image:"fries.webp"},
            {name:"Mozzarella Sticks",price:320,image:"mozorilla.webp"},
            {name:"Tacos",price:150,image:"tacos.webp"},
            {name:"Fried Chicken",price:150,image:"fried chicken.webp"},
            {name:"Onion Rings",price:150,image:"onion rings.webp"},
            

            
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