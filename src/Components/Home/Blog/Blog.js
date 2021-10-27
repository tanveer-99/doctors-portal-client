import React from 'react';
import caudi from '../../../images/Ellipse 3.png';
import john from '../../../images/Ellipse 1.png';
import alex from '../../../images/Ellipse 2.png';
import BlogCard from '../BlogCard/BlogCard';
const Blog = () => {
    const blogData = [
        {
            name: 'Dr. Caudi',
            img: caudi,
            title:  '2 times of brush in a day can keep you healthy',
        },
        {
            name: 'Dr. John Mitchel',
            img: john,
            title:  'the tooth cancer is taking a challenge',
        },
        {
            name: 'Dr. Alex Gray',
            img: alex,
            title:  '2 times of brush in a day can keep you healthy',
        }
    ]
    return (
        <section id="blogs" className="container blog-section text-center mt-5 pt-5 mb-5">
            <div className="mb-5 pb-3">
                <h5 className="mb-3" style={{color: '#1CC7C1'}}>Our Blog</h5>
                <h1 style={{color: '#3A4256'}}>From our blog news</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        blogData.map(blog => <BlogCard blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;