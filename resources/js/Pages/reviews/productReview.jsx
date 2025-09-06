import React, { useState } from 'react';
import { Star, MessageCircle, ThumbsUp, MoreHorizontal, Send, Reply } from 'lucide-react';
import { useForm } from "@inertiajs/react";

function ProductReview({commentts , product_id}) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [activeReply, setActiveReply] = useState(null);
  const [replyText, setReplyText] = useState('');

  const {data , setData , errors , post} = useForm({
      rate : 0 ,
      comment : ''
  });
  // Static demo data
  const comments = [
    {
      id: '1',
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      content: 'Absolutely love this product! The quality exceeded my expectations and the customer service was fantastic. Highly recommend to anyone looking for a reliable solution.',
      date: '2 days ago',
      rating: 5,
      likes: 24,
      replies: [
        {
          id: 'r1',
          author: 'Mike Chen',
          avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
          content: 'I had the same experience! Really impressed with the build quality.',
          date: '1 day ago',
          likes: 8
        },
        {
          id: 'r2',
          author: 'Emily Davis',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
          content: 'Thanks for the review Sarah! This helped me make my decision.',
          date: '1 day ago',
          likes: 5
        }
      ]
    },
  
  ];


  
  const handleStarClick = (starRating) => {
    setRating(starRating);
    setData({
      ...data,
      rate:starRating
    })
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    (async () =>{
          const res = await post(`/products/${product_id}/review` , data)
          // if(res.ok){
          //     console.log('message has been sent ')
          // }else{
          //     console.war('message has not  been sent ')
            
          // }
        })()


    // if (rating > 0 && comment.trim()) {
    //   console.log('Review submitted:', { rating, comment });
    //   setRating(0);
    //   setComment('');
    // }
  };

  const handleReplySubmit = (commentId, e) => {
    e.preventDefault();x
    if (replyText.trim()) {
      console.log('Reply submitted:', { commentId, replyText });
      setReplyText('');
      setActiveReply(null);
    }
  };

  const StarRating = ({ rating: displayRating, interactive = false, size = 'w-6 h-6' }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} cursor-pointer transition-all duration-200 ${
              star <= (interactive ? (hoverRating || rating) : displayRating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 hover:text-yellow-400'
            }`}
            onClick={() => interactive && handleStarClick(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
          />
        ))}
      </div>
    );
  };


  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-600">Share your experience and help others make informed decisions</p>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Write a Review</h2>
          
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Your Rating</label>
              <StarRating rating={data.rate} interactive={true} size="w-8 h-8" />
              {data.rate > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {rating === 1 && "Poor - Not what I expected"}
                  {rating === 2 && "Fair - Some issues but usable"}
                  {rating === 3 && "Good - Meets expectations"}
                  {rating === 4 && "Very Good - Exceeds expectations"}
                  {rating === 5 && "Excellent - Outstanding quality"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-3">
                Your Review
              </label>
              <textarea
                id="comment"
                value={data.comment}
                onChange={(e) => setData({
                    ...data,
                    comment : e.target.value
                })}

                placeholder="Share your experience with this product..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              disabled={data.rate === 0 && !data.comment.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
               Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MessageCircle className="w-4 h-4" />
              {comments.length} reviews
            </div>
          </div>

          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              {/* Comment Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{comment.author}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={comment.rating} size="w-4 h-4" />
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Comment Content */}
              <p className="text-gray-700 leading-relaxed mb-4">{comment.content}</p>

              {/* Comment Actions */}
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{comment.likes}</span>
                </button>
                <button
                  onClick={() => setActiveReply(activeReply === comment.id ? null : comment.id)}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Reply className="w-4 h-4" />
                  <span className="text-sm">Reply</span>
                </button>
              </div>

              {/* Reply Form */}
              {activeReply === comment.id && (
                <div className="mt-4 pl-4 border-l-2 border-gray-200">
                  <form onSubmit={(e) => handleReplySubmit(comment.id, e)} className="flex gap-3">
                    <img
                      src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
                      alt="Your avatar"
                      className="w-8 h-8 rounded-full object-cover mt-1"
                    />
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                      <button
                        type="submit"
                        disabled={!replyText.trim()}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Reply
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="mt-6 space-y-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="pl-4 border-l-2 border-gray-200">
                      <div className="flex items-start gap-3">
                        <img
                          src={reply.avatar}
                          alt={reply.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-gray-900 text-sm">{reply.author}</h4>
                              <span className="text-xs text-gray-500">{reply.date}</span>
                            </div>
                            <p className="text-gray-700 text-sm">{reply.content}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                              <ThumbsUp className="w-3 h-3" />
                              <span className="text-xs">{reply.likes}</span>
                            </button>
                            <button className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;