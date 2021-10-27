import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className="col-md-4">
            <div style={{padding: '40px 30px', cursor: 'pointer'}} className="blog-card shadow">
                <div className="d-flex mb-5">
                    <img className="me-4" style={{width: '25%'}} src={blog.img} alt="" />
                    <div className="mt-3">
                        <h6>{blog.name}</h6>
                        <p className="text-secondary">25 August 2021</p>
                    </div>
                </div>
                <h5 className="mb-4">{blog.title}</h5>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta fuga dolores eligendi numquam nemo.</p>
            </div>
        </div>
    );
};

export default BlogCard;