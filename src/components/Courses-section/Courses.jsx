// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container } from 'reactstrap'
import './courses.css'
import CourseCard from './CourseCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'slick-carousel'



const coursesData = [
    {
        id: '01',
        title : 'Python',
        lesson: 'Python is a popular programming language used for artificail intelligence, data science, web development and many more.',
        duration:'12 weeks',
        tim:'Monday-Friday,9am-5pm',
        image: 'src/assets/images/python-removebg-preview.png'
    },
    {
        id: '02',
        title : 'Tally ',
        duration:'12 weeks',
        tim:'Monday-Friday,9am-5pm',
        image:'src/assets/images/Tally.png',
        lesson: 'Tally is an accounting program that assists in managing accounts, sales, debts, and business operations, primarily used in India.',
    },
    {
        id: '03',
        title : 'AWS',
        duration:'12 weeks',
        tim:'Monday-Friday,9am-5pm',
        image:'src/assets/images/th-removebg-preview.png',
        lesson: 'Amazon Web Services is a comprehensive cloud platform offering IaaS and PaaS solutions for compute, storage, databases, and more.',
    },
    {
        id: '04',
        title : 'Speed Typing ',
        duration:'12 weeks',
        tim:'Monday-Friday,9am-5pm',
        image:'src/assets/images/sp.png',
        lesson: '"Speed Typing " refers to the number of words or characters an individual can type in a minute, often measured in words per minute (WPM).',
    },
    
]

const Courses = () => {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 0,
            slidesToScroll: 0
          }
        }
      ]
    };

  return (
    <Container>
<br />
    <div className='course_content mx-auto flex flex-col justify-col max-w-sm'>
      <h1 style={{paddingTop:'7px'}} className='text-left text-2xl font-bold my-12'>  Popular Courses </h1>

    </div>

    <Slider {...settings}>
      

    { coursesData.map(item => (
      <CourseCard key={item.id} item={item} />
    )) }
    


    </Slider>
    

    </Container>
  )
}

export default Courses