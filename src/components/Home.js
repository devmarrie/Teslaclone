import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description= "Order Online For Touchless  Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
            />
           <Section 
             title="Model y"
             description= "Order Online For Touchless  Delivery"
             backgroundImg="model-y.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing Inventory"
           /> 
            <Section
            title="Model 3"
            description= "Order Online For Touchless  Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
            />
           <Section
           title="Model x"
           description= "Order Online For Touchless  Delivery"
           backgroundImg="model-x.jpg"
           leftBtnText="Custom order"
           rightBtnText="Existing Inventory"
           />   
           <Section
           title="Lowest cost solar panels in America"
           description= " Money-back guarantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order now"
           rightBtnText="Learn more"
           />    
           <Section
           title="Solar for New Roofs"
           description= " Solar Roof Cost Less Than a New Roof "
           backgroundImg="solar-roof.jpg"
           leftBtnText="Order now"
           rightBtnText="Learn more"
           />
           <Section
           title="Accessories"
           description= "  "
           backgroundImg="accessories.jpg"
           leftBtnText="Shop now"
           rightBtnText=""
           />
        </Container>
    )
}

export default Home
const Container = styled.div
`    
   height: 100vh;

`