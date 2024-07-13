import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";

const botResponses = {
  greeting: "Hello! How can I assist you with your business funding needs today?",
  loanTypes: "We offer various types of business loans, including term loans, lines of credit, and equipment financing. Which one are you interested in?",
  application: "To apply for a loan, you'll need to fill out our online application form. It typically takes about 10-15 minutes to complete. Would you like me to guide you through the process?",
  requirements: "Generally, you'll need to provide basic information about your business, including financials and time in operation. Specific requirements may vary based on the loan type and amount.",
  default: "I'm sorry, I don't have specific information about that. Would you like to speak with one of our funding specialists for more detailed assistance?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        let botReply = botResponses.default;
        if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
          botReply = botResponses.greeting;
        } else if (input.toLowerCase().includes('loan type')) {
          botReply = botResponses.loanTypes;
        } else if (input.toLowerCase().includes('apply') || input.toLowerCase().includes('application')) {
          botReply = botResponses.application;
        } else if (input.toLowerCase().includes('require') || input.toLowerCase().includes('need')) {
          botReply = botResponses.requirements;
        }
        setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
      }, 1000);
    }
  };

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
                <CardTitle>Chat Support</CardTitle>
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
                </div>
                <div className="flex">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow mr-2"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button onClick={handleSend}>
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