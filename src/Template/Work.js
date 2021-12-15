import React from 'react'
import './Work.css'
import Idea from './Images/idea.png'
import Analyse from './Images/analyse.png'
import Design from './Images/Design.png'
import Code from './Images/Code.png'




function Work() {
    return (
        <>
        <br/>
        <div class="How"> How i Work</div>
        <div class="hexagonWrapper">

            <div class="HexContain">
                <div class="hexagon"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 1</p> <img src={Idea} style={{height:"80px"}}/></span></div>
                <h5 style={{marginTop:"35px", textAlign:"center"}}>Your Idea</h5>
            </div>

            <div class="HexContain">
                <div class="hexagon2"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 2</p> <img src={Analyse} style={{height:"100px", width:"60px", marginTop:"5px", marginBottom:"12px"}}/></span></div>
                <h5 style={{marginTop:"35px", textAlign:"center"}}>I Analyse</h5>
            </div>

            <div class="HexContain">
                <div class="hexagon3"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 3</p> <img src={Design} style={{height:"70px", marginBottom:"10px"}}/></span></div>
                <h5 style={{marginTop:"35px", textAlign:"center"}}>I Design</h5>
            </div>

            <div class="HexContain">
                <div class="hexagon4"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 3</p> <img src={Code} style={{height:"70px", marginBottom:"10px"}}/></span></div>
                <h5 style={{marginTop:"35px", textAlign:"center"}}>I Design</h5>
            </div>

            <div class="HexContain">
                <div class="hexagon3"><span style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}><p style={{color:"white", fontWeight:"bold"}}> 3</p> <img src={Design} style={{height:"70px", marginBottom:"10px"}}/></span></div>
                <h5 style={{marginTop:"35px", textAlign:"center"}}>I Design</h5>
            </div>
        
        </div>
        </>
    )
}

export default Work
