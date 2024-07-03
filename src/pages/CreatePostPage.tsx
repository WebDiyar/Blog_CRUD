import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { addBlogPost } from '../api';
import { BlogPost } from '../types';

const CreatePostPage: React.FC = () => {
    const navigate = useNavigate();

    const handleCreate = (values: Omit<BlogPost, 'id'>) => {
        addBlogPost(values);
        notification.success({ message: 'Post created successfully' });
        navigate('/');
    };

    return (
        <Form onFinish={handleCreate} layout="vertical">
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
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreatePostPage;
