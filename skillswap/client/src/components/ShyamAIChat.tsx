import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '@/contexts/ChatContext';
import { Button } from '@/components/ui/button';
import { X, Send, MessageCircle, Minimize2, Maximize2, Trash2 } from 'lucide-react';

/**
 * ShyamAI Chatbox Component
 * Design: Futuristic Depth & Motion
 * - Floating widget with neon cyan/purple accents
 * - Smooth animations and 3D effects
 * - Responsive and mobile-friendly
 */

export const ShyamAIChat: React.FC = () => {
  const { messages, isOpen, isLoading, sendMessage, toggleChat, clearChat } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      await sendMessage(inputValue);
      setInputValue('');
      inputRef.current?.focus();
    }
  };

  const quickReplies = [
    'Find me a mentor',
    'Suggest a skill',
    'How does it work?',
    'Show me tools',
  ];

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title="Chat with Shyam AI"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
          1
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-32px)] flex flex-col rounded-2xl bg-card/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl animate-slide-in">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-foreground">Shyam AI</h3>
            <p className="text-xs text-muted-foreground">Your learning companion</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-background/50 rounded-lg transition-colors"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Minimize2 className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          <button
            onClick={toggleChat}
            className="p-2 hover:bg-background/50 rounded-lg transition-colors"
            title="Close"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Messages Area - Hidden when minimized */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-br-none'
                      : 'bg-background border border-border text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background border border-border text-foreground px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && !isLoading && (
            <div className="px-4 py-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick replies:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(reply)}
                    className="text-xs px-3 py-2 rounded-lg bg-background border border-border hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200 text-foreground hover:text-cyan-400"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-background/50">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Shyam AI..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                title="Send"
              >
                <Send className="w-4 h-4" />
              </button>
              {messages.length > 1 && (
                <button
                  type="button"
                  onClick={clearChat}
                  className="p-2 rounded-lg hover:bg-background border border-border text-muted-foreground hover:text-foreground transition-all"
                  title="Clear chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ShyamAIChat;
