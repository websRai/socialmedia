import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { platform, topic, tone, additionalInfo } = body;

  // In a real application, you would call an AI service here to generate the content.
  // For this example, we'll just return a mock response.
  const generatedContent = `Here's a ${tone} post for ${platform} about ${topic}:\n\n${additionalInfo}\n\n#AI #ContentGeneration`;

  return NextResponse.json({ content: generatedContent });
}