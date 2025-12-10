import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import ContactPreview from '../components/ContactPreview';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-home-dark">
                <h2 className="text-3xl font-bold text-white mb-4">Post Not Found</h2>
                <Link to="/blogs" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                    <ArrowLeft className="mr-2" /> Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-home-dark">
            {/* Custom Header for Blog Post */}
            <div className="bg-[#1A73E8] pt-32 pb-20 md:pt-40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <div className="w-64 h-64 rounded-full bg-white blur-3xl"></div>
                </div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <Link to="/blogs" className="inline-flex items-center bg-white/10 text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all mb-8 backdrop-blur-md hover:bg-white/20 border border-white/20">
                        <ArrowLeft size={20} className="mr-2" /> Back to Blogs
                    </Link>
                    <div className="block">
                        <div className="inline-block bg-blue-500/30 text-blue-50 px-4 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-400/30">
                            {post.category}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center text-blue-100 space-x-6 text-sm md:text-base">
                        <div className="flex items-center">
                            <Calendar size={18} className="mr-2" />
                            {post.date}
                        </div>
                        <div className="flex items-center">
                            <User size={18} className="mr-2" />
                            {post.author}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-4xl mx-auto px-6 py-16">
                <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                </div>

                <div
                    className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                    {/* Content injected here */}
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="text-gray-400 italic">
                        Shared by {post.author}
                    </div>
                    <button className="flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
                        <Share2 size={20} className="mr-2" /> Share Post
                    </button>
                </div>
            </article>

            <ContactPreview />
        </div>
    );
};

export default BlogPost;
