import React, { createContext, useContext, useState, useCallback } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatContextType {
  messages: ChatMessage[];
  isOpen: boolean;
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  toggleChat: () => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m Shyam AI, your learning companion. How can I help you today? I can suggest skills to learn, find mentors, or answer questions about our platform.',
      timestamp: new Date(),
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate API call with mock responses
      // In production, replace this with actual API integration
      const response = await generateAIResponse(content);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Hello! I\'m Shyam AI, your learning companion. How can I help you today?',
        timestamp: new Date(),
      },
    ]);
  }, []);

  return (
    <ChatContext.Provider value={{ messages, isOpen, isLoading, sendMessage, toggleChat, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
};

// Mock AI response generator - Replace with actual API integration
async function generateAIResponse(userMessage: string): Promise<string> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const lowerMessage = userMessage.toLowerCase();

  // Skill recommendation responses
  if (lowerMessage.includes('learn') || lowerMessage.includes('skill')) {
    const skills = [
      'I recommend starting with Python if you\'re interested in programming. It\'s beginner-friendly and widely used. I can connect you with an experienced mentor!',
      'React is a great choice for web development! Many mentors on SkillSwap specialize in React. Would you like me to find someone?',
      'UI/UX design is a fantastic skill to learn. I can match you with a designer who has 5+ years of experience.',
      'Data analysis is in high demand. SQL and Python are essential. Shall I recommend some mentors?',
    ];
    return skills[Math.floor(Math.random() * skills.length)];
  }

  // Mentor matching responses
  if (lowerMessage.includes('mentor') || lowerMessage.includes('connect')) {
    const responses = [
      'Great! I found 3 mentors matching your interests. They have excellent ratings and are available this week. Ready to connect?',
      'I\'ve identified the perfect mentor for you based on your goals. They specialize in your area of interest and have mentored 50+ students.',
      'Connecting you with mentors now... I found someone with exactly the skills you want to learn!',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // How it works responses
  if (lowerMessage.includes('how') || lowerMessage.includes('work')) {
    return 'SkillSwap works in 4 simple steps:\n1. Create your profile and set your learning goals\n2. I analyze your interests and find the perfect mentor\n3. Connect via our tools (video, code editor, design studio)\n4. Exchange skills and earn badges!\n\nWhat would you like to learn?';
  }

  // General greeting
  if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) {
    return 'Hey there! 👋 Welcome to SkillSwap! I\'m here to help you find the perfect mentor or suggest skills to learn. What interests you?';
  }

  // Default response
  return 'That\'s interesting! I can help you find mentors, suggest skills to learn, or answer questions about SkillSwap. What would you like to explore?';
}
