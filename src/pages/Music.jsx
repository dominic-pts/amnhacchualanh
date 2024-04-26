import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

export default function Music() {
  return (
    <Container>
        <Header/>
       
        <Footer/>
    </Container>
  )
}

const Container = styled.div`
  .header__navbar--current {
    color: #494949 !important;
  }
  padding: 150px 0;
`;