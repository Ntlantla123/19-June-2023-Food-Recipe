import React from 'react'
import viewburger from './images/viewburger.png';
import viewpicture from './images/viewpicture.png';
import { TopNav } from './TopNav';


export const ViewIngredientsburger = () => {
    return (
        <React.Fragment>
             <style>
            {
            `
            body{
                height:150vw;
            }
            }`
            }
            </style>
            <TopNav />
            <h1 style={{ position: "relative", top: "50px", left: "15%", color: "green", }}>Ingredients</h1>
            <ul style={{ fontWeight: "600", fontSize: "1.4rem", }}>

                <li> 2 medium russet potatoes</li>
                <li> 8 cups peanut oil for frying</li>
                <li>  14 ounces ground chuck</li>
                <li>  4 thick slices American cheese</li>
                <li>  1 teaspoon hot sauce</li>
                <li>  1 tablespoon mayonnaise</li>
                <li>  2 medium sesame seed burger buns</li>
                <li>  ½ cup shredded iceberg lettuce</li>
                <li>  2 thick slices tomato</li>
                <li>  2 tablespoons diced onion</li>
                <li>  1 tablespoon pickle slices</li>
                <li>  2 teaspoons mustard</li>
                <li>  2 teaspoons ketchup</li>
                <li> 1 teaspoon kosher salt</li>
                <li>2 tablespoon with white sugar</li>
                <li>2 teaspons baking powder</li>
                <li>1 teaspons salt, or to taste</li>
                <li>1 cup milk</li>
                <li>2 tablespoons vegaetable oil</li>
                <li>1 egg, beaten</li>
            </ul>

            <img src={viewpicture} style={{ position: "relative", height: "25rem", borderRadius: "50%", width: "35%", left: "70%", top: "-690px", }} alt='viewpicture' />
            <img src={viewburger} style={{ position: "relative", height: "2", borderRadius: "50%", width: "35%", left: "-25%", top: "290px", }} alt='viewpanburger.png' />

            <h3 style={{ position: "relative", left: "35%", top: "-360px", }}>Follow these Steps to make your yummy pancake</h3>

            <h4 style={{ position: "relative", left: "60%", top: "-240px", color: "green", fontSize: "1.9rem", }}>Step 1</h4>
            <p style={{ position: "relative", left: "60%", top: "-230px", fontSize: "1.3rem", }}>Cut potatoes in 1/2-inch wide strips. Place in a large bowl filled <br/>with warm water and soak for 20 minutes.</p>
            <h4 style={{ position: "relative", left: "60%", top: "-200px", color: "green", fontSize: "1.9rem", }}>Step 2</h4>
            <p style={{ position: "relative", left: "60%", top: "-180px", fontSize: "1.3rem", }}>Pour oil in a Dutch oven and heat<br/> over medium-high heat until it reaches 350 degrees F (175 degrees C).<br/> Line a rimmed baking sheet with paper towels and set a wire rack on top.</p>
            <h4 style={{ position: "relative", left: "60%", top: "-150px", color: "green", fontSize: "1.9rem", }}>Step 3</h4>
            <p style={{ position: "relative", left: "60%", top: "-130px", fontSize: "1.3rem", }}> Drain potatoes well and dry thoroughly with paper towels.<br/> Add 1/2 of the dried potatoes to the hot oil and cook,<br/> stirring often, until they soften slightly, about 3 minutes.<br/> Remove potatoes to the wire rack to drain.<br/> Repeat with remaining potatoes.<br/> Maintain oil temperature at 350 degrees F (175 degrees C)<br/> for finishing fries just before serving</p>


            <button type='button' style={{position:"relative", left:"90%",backgroundColor:"green",color:"white",borderRadius:"20px",width:"10%",top:"-70px",}}>Watch Video</button>
        </React.Fragment>
    )
}
