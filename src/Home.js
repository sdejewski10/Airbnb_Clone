import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className ='home'>
            <Banner />
            <div className="home__section">
                <Card
                src='https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                title='Online Experiences'
                description='Try something new!'
                price='' />
                <Card
                src ='https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'
                title='Unique Stays'
                description ='Rent a room!' />
                <Card
                src ='https://images.unsplash.com/photo-1494526585095-c41746248156?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                title='Entire Homes'
                description ='Rent the entire place!' />
            </div>
            <div className="home__section">
                <Card 
                src='https://images.unsplash.com/photo-1561495935-cafaf7d196e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80/'
                title='Entire loft in the heart of SLC'
                description='Two story modern loft with space for 8'
                price ='$275/night'/>
    
                <Card 
                src='https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                title='PENTHOUSE LIVING'
                description = 'Experience the luxurious life'
                price = '$500/night'/>
                <Card
                src='https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'
                title='Modern CA Home'
                description ="Bring your friends, there's plentty of space"
                price ='$350/night' />
            </div>
        </div>
    )
}

export default Home
