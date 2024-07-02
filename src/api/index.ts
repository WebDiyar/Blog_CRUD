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
    { id: '22', title: 'Twenty-Second Post', text: 'This is the twenty-second post', deleted: false },
    { id: '23', title: 'Twenty-Third Post', text: 'This is the twenty-third post', deleted: false },
    { id: '24', title: 'Twenty-Fourth Post', text: 'This is the twenty-fourth post', deleted: false },
    { id: '25', title: 'Twenty-Fifth Post', text: 'This is the twenty-fifth post', deleted: false },
    { id: '26', title: 'Twenty-Sixth Post', text: 'This is the twenty-sixth post', deleted: false },
    { id: '27', title: 'Twenty-Seventh Post', text: 'This is the twenty-seventh post', deleted: false },
    { id: '28', title: 'Twenty-Eighth Post', text: 'This is the twenty-eighth post', deleted: false },
    { id: '29', title: 'Twenty-Ninth Post', text: 'This is the twenty-ninth post', deleted: false },
    { id: '30', title: 'Thirtieth Post', text: 'This is the thirtieth post', deleted: false },
    { id: '31', title: 'Thirty-First Post', text: 'This is the thirty-first post', deleted: false },
    { id: '32', title: 'Thirty-Second Post', text: 'This is the thirty-second post', deleted: false },
    { id: '33', title: 'Thirty-Third Post', text: 'This is the thirty-third post', deleted: false },
    { id: '34', title: 'Thirty-Fourth Post', text: 'This is the thirty-fourth post', deleted: false },
    { id: '35', title: 'Thirty-Fifth Post', text: 'This is the thirty-fifth post', deleted: false },
    { id: '36', title: 'Thirty-Sixth Post', text: 'This is the thirty-sixth post', deleted: false },
    { id: '37', title: 'Thirty-Seventh Post', text: 'This is the thirty-seventh post', deleted: false },
    { id: '38', title: 'Thirty-Eighth Post', text: 'This is the thirty-eighth post', deleted: false },
    { id: '39', title: 'Thirty-Ninth Post', text: 'This is the thirty-ninth post', deleted: false },
    { id: '40', title: 'Fortieth Post', text: 'This is the fortieth post', deleted: false }
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
