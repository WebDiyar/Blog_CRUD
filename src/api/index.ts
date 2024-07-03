import { BlogPost } from '../types';

let blogPosts: BlogPost[] = [
    { id: '1', title: 'First Post', text: 'This is the first post', deleted: false },
    { id: '2', title: 'Second Post', text: 'This is the second post', deleted: false },
    { id: '3', title: 'Third Post', text: 'This is the third post', deleted: false },
    { id: '4', title: 'Fourth Post', text: 'This is the fourth post', deleted: false },
    { id: '5', title: 'Fifth Post', text: 'This is the fifth post', deleted: false },
    { id: '6', title: 'Sixth Post', text: 'This is the sixth post', deleted: false },
    { id: '7', title: 'Seventh Post', text: 'This is the seventh post', deleted: false },
    { id: '8', title: 'Eighth Post', text: 'This is the eighth post', deleted: false },
    { id: '9', title: 'Ninth Post', text: 'This is the ninth post', deleted: false },
    { id: '10', title: 'Tenth Post', text: 'This is the tenth post', deleted: false },
    { id: '11', title: 'Eleventh Post', text: 'This is the eleventh post', deleted: false },
    { id: '12', title: 'Twelfth Post', text: 'This is the twelfth post', deleted: false },
    { id: '13', title: 'Thirteenth Post', text: 'This is the thirteenth post', deleted: false },
    { id: '14', title: 'Fourteenth Post', text: 'This is the fourteenth post', deleted: false },
    { id: '15', title: 'Fifteenth Post', text: 'This is the fifteenth post', deleted: false },
    { id: '16', title: 'Sixteenth Post', text: 'This is the sixteenth post', deleted: false },
    { id: '17', title: 'Seventeenth Post', text: 'This is the seventeenth post', deleted: false },
    { id: '18', title: 'Eighteenth Post', text: 'This is the eighteenth post', deleted: false },
    { id: '19', title: 'Nineteenth Post', text: 'This is the nineteenth post', deleted: false },
    { id: '20', title: 'Twentieth Post', text: 'This is the twentieth post', deleted: false },
    { id: '21', title: 'Twenty-First Post', text: 'This is the twenty-first post', deleted: false },
];

export const getBlogPosts = (page: number, pageSize: number): { posts: BlogPost[], total: number } => {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    return {
        posts: blogPosts.slice(start, end),
        total: blogPosts.length
    };
};

export const getBlogPostById = (id: string): BlogPost | null => {
    return blogPosts.find(post => post.id === id) || null;
};

export const updateBlogPost = (id: string, updatedPost: Partial<BlogPost>): void => {
    blogPosts = blogPosts.map(post => post.id === id ? { ...post, ...updatedPost } : post);
};

export const deleteBlogPost = (id: string): void => {
    blogPosts = blogPosts.filter(post => post.id !== id);
};

export const addBlogPost = (newPost: Omit<BlogPost, 'id'>): void => {
    const newId = (blogPosts.length + 1).toString();
    blogPosts.push({ ...newPost, id: newId });
};

