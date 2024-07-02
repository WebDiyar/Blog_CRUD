import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import FakeApiPage from './pages/FakeApiPage';

const { Header, Content } = Layout;

const App: React.FC = () => (
  <Router>
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={[
          { key: '1', label: <Link to="/">Блог</Link> },
          { key: '2', label: <Link to="/fake-api">FakeApi</Link> },
        ]} />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 16 }}>
        <Routes>
          <Route path="/" element={<BlogListPage />} />
          <Route path="/post/:id" element={<BlogPostPage />} />
          <Route path="/fake-api" element={<FakeApiPage />} />
        </Routes>
      </Content>
    </Layout>
  </Router>
);

export default App;
