import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';
import { BlogPost } from '../types';
import { getBlogPostById, updateBlogPost, deleteBlogPost } from '../api';

const BlogPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            const post = getBlogPostById(id);
            if (post) {
                setPost(post);
            }
            setLoading(false);
        }
    }, [id]);

    const handleUpdate = (values: Partial<BlogPost>) => {
        if (post) {
            updateBlogPost(post.id, values);
            notification.success({ message: 'Post updated successfully' });
            navigate('/');
        }
    };

    const handleDelete = () => {
        if (post) {
            deleteBlogPost(post.id);
            notification.success({ message: 'Post deleted successfully' });
            navigate('/');
        }
    };

    if (loading || !post) return <div>Loading...</div>;

    return (
        <Form
            initialValues={post}
            onFinish={handleUpdate}
            layout="vertical"
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please input the title!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="Text"
                rules={[{ required: true, message: 'Please input the text!' }]}
            >
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
                <Button danger onClick={handleDelete} style={{ marginLeft: 8 }}>
                    Delete
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BlogPostPage;
