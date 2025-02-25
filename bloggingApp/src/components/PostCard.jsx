import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                        {title}
                    </h2>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Read More</span>
                            <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;