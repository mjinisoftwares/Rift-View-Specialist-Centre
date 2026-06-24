import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { site } from '@/lib/data'

export default function Contact() {
  return (
    <section className='py-16 px-2 border'>
      <div className='container mx-auto max-w-7xl px-4 md:px-12'>
        <div className='mb-16 text-center'>
          <SectionHeading title="Get in Touch" description="Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible." />
        </div>

        <div className='grid gap-8 lg:grid-cols-3 lg:items-stretch'>

               {/* Contact Information & Additional Info */}
          <div className='flex h-full flex-col gap-6 lg:col-span-1'>
            {/* Contact Information */}
            <Card className='flex-1 gap-3 py-6'>
              <CardHeader className='px-6'>
                <CardTitle className='text-lg text-balance'>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className='flex flex-col gap-4 px-6'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <Mail className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Email</h4>
                    <p className='text-muted-foreground text-xs'>
                      <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">{site.email}</a>
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 flex size-8 items-center justify-center rounded-full'>
                    <Phone className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Phone</h4>
                    <p className='text-muted-foreground text-xs'>
                      <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{site.phone}</a>
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-primary/10 mt-0.5 flex size-8 items-center justify-center rounded-full'>
                    <MapPin className='text-primary size-4' />
                  </div>
                  <div>
                    <h4 className='text-sm font-medium'>Office</h4>
                    <p className='text-muted-foreground text-xs whitespace-pre-line'>
                      {site.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className='gap-3 py-6'>
              <CardHeader className='px-6'>
                <CardTitle className='text-lg text-balance'>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className='px-6'>
                <div className='flex flex-col gap-2 text-sm'>
                  {site.hours.map((h) => (
                    <div key={h.day} className='flex justify-between'>
                      <span>{h.day}</span>
                      <span className='text-muted-foreground'>{h.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alternative Contact */}
            <Card className='gap-3 py-6'>
              <CardHeader className='px-6'>
                <CardTitle className='text-lg text-balance'>Prefer to Call?</CardTitle>
              </CardHeader>
              <CardContent className='px-6'>
                <p className='text-muted-foreground mb-3 text-sm'>
                  Speak directly with our team for immediate assistance.
                </p>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block w-full">
                  <Button variant='outline' className="h-12 px-6 py-4 w-full rounded-full cursor-pointer">
                    <Phone className="mr-2 h-4 w-4" />
                    Call {site.phone}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>


          {/* Contact Form */}
          <Card className='h-full py-6 lg:col-span-2'>
            <CardHeader className='px-6'>
              <CardTitle className='text-balance'>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-8 px-8'>
              <div className="space-y-4">
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div className="space-y-2">
                    <Label htmlFor='first-name-aB3x9'>First name</Label>
                    <Input id='first-name-aB3x9' placeholder='John' className='h-9' />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor='last-name-cD4y8'>Last name</Label>
                    <Input id='last-name-cD4y8' placeholder='Doe' className='h-9' />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor='email-eF5z7'>Email</Label>
                  <Input id='email-eF5z7' type='email' placeholder='john@example.com' className='h-9' />
                </div>
                <div className="space-y-2">
                  <Label htmlFor='subject-gH6w6'>Subject</Label>
                  <Input id='subject-gH6w6' placeholder='How can we help?' className='h-9' />
                </div>
                <div className="space-y-2">
                  <Label htmlFor='message-iJ7v5'>Message</Label>
                  <Textarea
                    id='message-iJ7v5'
                    placeholder='Tell us more about your project...'
                    className='min-h-30'
                  />
                </div>
              </div>
              <Button className="h-12 px-6 py-4 w-1/3 cursor-pointer rounded-full">Send Message</Button>
            </CardContent>
          </Card>

       
        </div>
      </div>
    </section>
  )
}
