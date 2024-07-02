import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { getBlogPosts } from '../api';

const BlogListPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const pageSize = 10;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const { posts, total } = getBlogPosts(page, pageSize);
            setPosts(posts);
            setTotal(total);
            setLoading(false);
        }, 500);
    }, [page]);

    return (
        <div>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={posts}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    total: total,
                    onChange: (page) => setPage(page),
                }}
                renderItem={(item) => (
                    <List.Item
                        actions={[<Link to={`/post/${item.id}`}>View</Link>]}
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={item.text}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default BlogListPage;
