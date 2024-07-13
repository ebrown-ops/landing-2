import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";

const initialMessage = {
  text: "Hello! How can I assist you today?",
  sender: 'agent'
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      setIsTyping(true);
      
      // Simulate agent response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thank you for your message. An agent will be with you shortly.", 
          sender: 'agent' 
        }]);
        setIsTyping(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Simulate an agent joining the chat after a delay
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Hi there! I'm Sarah, how can I help you today?", 
          sender: 'agent' 
        }]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4"
        onClick={toggleChat}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Live Chat</CardTitle>
                <Button variant="ghost" size="sm" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto mb-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                        {message.text}
                      </span>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="text-left">
                      <span className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800">
                        Typing...
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow mr-2"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <Button onClick={sendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}