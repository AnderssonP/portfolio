import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta flex justify-center items-center '>
      <Link to="/contact" className='btn'>Contact me!</Link>
    </section>
  )
}

export default CTA