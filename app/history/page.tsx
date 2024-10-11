import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function History() {
  // This is a placeholder. In a real application, we'd fetch the history from an API or database.
  const historyItems = [
    { id: 1, platform: 'Twitter', topic: 'AI in Healthcare', createdAt: '2023-05-01' },
    { id: 2, platform: 'LinkedIn', topic: 'Remote Work Trends', createdAt: '2023-05-02' },
    { id: 3, platform: 'Instagram', topic: 'Sustainable Fashion', createdAt: '2023-05-03' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Content Generation History</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {historyItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.topic}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Platform:</strong> {item.platform}</p>
              <p><strong>Created:</strong> {item.createdAt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}