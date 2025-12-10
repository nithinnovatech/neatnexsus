import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ContactPreview from '../components/ContactPreview';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    return (
        <div className="min-h-screen bg-home-dark">
            {/* Hero Section */}
            <PageHeader
                title="Our Blog"
                description="Insights, tips, and updates from the world of professional services."
                icon={BookOpen}
            />

            <section className="py-20">
                <div className="w-full px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-2" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User size={14} className="mr-2" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <Link to={`/blog/${post.id}`}>
                                        <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors cursor-pointer">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-300 mb-6 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="text-blue-400 font-bold hover:text-blue-300 transition-colors inline-flex items-center mt-auto"
                                    >
                                        Read Post
                                        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ContactPreview />
        </div>
    );
};

export default Blog;
