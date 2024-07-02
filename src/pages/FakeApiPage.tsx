import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'antd';

interface ApiData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FakeApiPage: React.FC = () => {
    const [data, setData] = useState<ApiData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        axios.get<ApiData[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    }, [page]);

    return (
        <div>
            <List
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                pagination={{
                    pageSize: 10,
                    onChange: (page) => setPage(page),
                }}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description={item.body}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default FakeApiPage;
