import { aboutData } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-background">
      <div className="container mx-auto grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-4 animate-scroll">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
             {aboutData.title}
           </h2>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center animate-scroll" style={{ animationDelay: '200ms' }}>
           <Image
              src="/images/salman.jpeg"
              alt="About Me Image "
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover aspect-square animate-float" 
              data-ai-hint="professional portrait developer headshot" 
              priority 
            />
        </div>
      </div>
    </AnimatedSection>
  );
}
