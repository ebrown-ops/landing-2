import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Twitter, Linkedin, Mail, Link } from 'lucide-react';

export default function ShareOptions({ loanDetails }) {
  const [copySuccess, setCopySuccess] = useState('');
  const { toast } = useToast();

  const shareUrl = `https://sbgfunding.com/share?amount=${loanDetails.amount}&term=${loanDetails.term}&rate=${loanDetails.rate}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleShare = (platform) => {
    let shareLink;
    const message = `Check out my loan option from SBG Funding: $${loanDetails.amount} for ${loanDetails.term} months at ${loanDetails.rate}% interest rate.`;

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('My SBG Funding Loan Option')}&summary=${encodeURIComponent(message)}`;
        break;
      case 'email':
        shareLink = `mailto:?subject=${encodeURIComponent('My SBG Funding Loan Option')}&body=${encodeURIComponent(message + ' ' + shareUrl)}`;
        break;
      default:
        break;
    }

    if (shareLink) {
      window.open(shareLink, '_blank');
    }

    toast({
      title: "Shared Successfully",
      description: `Your loan option has been shared on ${platform}.`,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Share Your Loan Option</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input value={shareUrl} readOnly />
            <Button onClick={handleCopyLink}>
              {copySuccess || <Link className="h-4 w-4" />}
            </Button>
          </div>
          <div className="flex justify-center space-x-4">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleShare('facebook')}>
              <Facebook className="h-8 w-8 text-blue-600" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleShare('twitter')}>
              <Twitter className="h-8 w-8 text-blue-400" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleShare('linkedin')}>
              <Linkedin className="h-8 w-8 text-blue-700" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleShare('email')}>
              <Mail className="h-8 w-8 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}