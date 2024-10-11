"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [formData, setFormData] = useState({
    platform: '',
    topic: '',
    tone: '',
    additionalInfo: ''
  });
  const [generatedContent, setGeneratedContent] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Social Media Content Generator</h1>
      <Card>
        <CardHeader>
          <CardTitle>Generate Content</CardTitle>
          <CardDescription>Fill in the details to generate social media content.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Input 
                id="platform" 
                placeholder="e.g., Twitter, Instagram, LinkedIn" 
                value={formData.platform}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Input 
                id="topic" 
                placeholder="Enter the main topic or theme" 
                value={formData.topic}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tone">Tone</Label>
              <Input 
                id="tone" 
                placeholder="e.g., Professional, Casual, Humorous" 
                value={formData.tone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea 
                id="additionalInfo" 
                placeholder="Any extra details or context" 
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit">Generate Content</Button>
          </form>
        </CardContent>
      </Card>
      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{generatedContent}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}