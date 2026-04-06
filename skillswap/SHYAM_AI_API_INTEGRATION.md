# Shyam AI Chatbot - API Integration Guide

## Overview
The Shyam AI chatbot is fully integrated into SkillSwap with a mock response system. This guide explains how to connect it to a real API.

## Current Implementation

### Files
- **Context**: `client/src/contexts/ChatContext.tsx` - Manages chat state and message history
- **Component**: `client/src/components/ShyamAIChat.tsx` - UI for the floating chatbox
- **Mock API**: `generateAIResponse()` function in ChatContext.tsx

### Features
- ✅ Floating widget in bottom-right corner
- ✅ Message history with timestamps
- ✅ Typing indicators
- ✅ Quick reply suggestions
- ✅ Minimize/expand functionality
- ✅ Clear chat history
- ✅ Responsive design (mobile-friendly)
- ✅ Neon cyan/purple theme matching SkillSwap design

## API Integration Steps

### 1. Replace Mock Response Function

**Current Code** (in `ChatContext.tsx`):
```typescript
async function generateAIResponse(userMessage: string): Promise<string> {
  // Mock responses...
}
```

**Replace with Real API Call**:
```typescript
async function generateAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${YOUR_API_KEY}`,
      },
      body: JSON.stringify({
        message: userMessage,
        // Include additional context if needed
        context: 'skillswap_learning_platform',
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.reply || data.message || 'Unable to process your request.';
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
```

### 2. Environment Variables

Add to your `.env` file:
```
VITE_SHYAM_AI_API_URL=https://api.shyam-ai.com/chat
VITE_SHYAM_AI_API_KEY=your_api_key_here
```

### 3. Update ChatContext

Modify the `sendMessage` function to include error handling:
```typescript
const sendMessage = useCallback(async (content: string) => {
  if (!content.trim()) return;

  const userMessage: ChatMessage = {
    id: Date.now().toString(),
    role: 'user',
    content,
    timestamp: new Date(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setIsLoading(true);

  try {
    const response = await generateAIResponse(content);
    // ... rest of the code
  } catch (error) {
    const errorMessage: ChatMessage = {
      id: (Date.now() + 2).toString(),
      role: 'assistant',
      content: 'Sorry, I encountered an error. Please try again later.',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, errorMessage]);
  } finally {
    setIsLoading(false);
  }
}, []);
```

## API Response Format

Expected JSON response from your API:
```json
{
  "reply": "Your AI response here",
  "suggestions": ["Suggestion 1", "Suggestion 2"],
  "metadata": {
    "confidence": 0.95,
    "source": "skill_database"
  }
}
```

## Supported API Providers

### OpenAI GPT
```typescript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are Shyam AI, a learning companion for SkillSwap.' },
      { role: 'user', content: userMessage },
    ],
  }),
});
```

### Custom Backend API
```typescript
const response = await fetch(`${process.env.VITE_BACKEND_URL}/api/chat`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
  },
  body: JSON.stringify({ message: userMessage }),
});
```

### Hugging Face Inference API
```typescript
const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
  headers: { Authorization: `Bearer ${process.env.VITE_HF_API_KEY}` },
  method: 'POST',
  body: JSON.stringify({ inputs: userMessage }),
});
```

## Context Management

To pass additional context to the AI (user profile, learning goals, etc.):

```typescript
interface ChatContextData {
  userId?: string;
  userSkills?: string[];
  learningGoals?: string[];
  conversationHistory?: ChatMessage[];
}

async function generateAIResponse(
  userMessage: string,
  contextData?: ChatContextData
): Promise<string> {
  // Include context in API request
  const body = {
    message: userMessage,
    context: contextData,
  };
  // ... API call
}
```

## Testing the Integration

1. **Test with Mock Data First**
   - Keep the mock function while testing
   - Gradually replace with real API calls

2. **Monitor API Calls**
   - Use browser DevTools Network tab
   - Check for request/response format

3. **Error Handling**
   - Test with invalid API keys
   - Test with network failures
   - Verify error messages display correctly

## Security Considerations

- **Never expose API keys** in client-side code
- Use environment variables for sensitive data
- Implement rate limiting on the backend
- Validate and sanitize user input
- Consider CORS policies for cross-origin requests

## Performance Optimization

- **Message Caching**: Store frequently asked questions
- **Debouncing**: Prevent rapid successive API calls
- **Lazy Loading**: Load chat component only when needed
- **Compression**: Gzip responses for faster transmission

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API returns 401 | Check API key and authorization headers |
| Slow responses | Implement timeout and show loading state |
| CORS errors | Configure backend CORS or use proxy |
| Empty responses | Validate API response format |

## Future Enhancements

- [ ] Voice input/output support
- [ ] Conversation context persistence
- [ ] Multi-language support
- [ ] Skill recommendation engine
- [ ] Real-time mentor matching
- [ ] Analytics and conversation logging
- [ ] Custom AI model training on SkillSwap data

## Support

For API integration help, refer to:
- Your API provider's documentation
- SkillSwap backend team
- Community forums
