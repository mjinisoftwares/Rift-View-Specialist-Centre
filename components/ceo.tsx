import Image from 'next/image'
import { SectionHeading } from './section-heading'

export default function CEOSetion() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:px-12 md:space-y-16">
              <SectionHeading
                         eyebrow="What defines RiftView Specialist Center"
                         title="A Message from Our CEO"
                         align='center'
                         description=""
                       />
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0 ">
                       <div className="relative mx-auto h-100 w-100 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-2 shadow-2xl">
  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-secondary bg-white">
    <Image
      src="/images/dr-daniel-somba-chairman.webp"
      alt="Doctor at RiftView Specialist Center"
      fill
      className="object-cover"
    />
  </div>
</div>
                    </div>

                    <div className="relative space-y-4">
                  
                        <div className="pt-8">
                            <blockquote className="border-l-4 md:pl-16 border-accent">
                                <p className='font-md text-primary/80 text-base'>"Dear Community Members and Patients,
Welcome to Rift View Specialist Centre! Our mission is clear:
compassionate, high-quality care that puts you first. </p>
<p className='font-md text-primary/80 mt-2 text-base'>
We build a healing environment of trust, expertise, and empathy.
Our dedicated team physicians, nurses, and staff are your partners in health, always advancing with the latest medical technologies to deliver unparalleled care.
 </p><p className='font-md text-primary/80 mt-2 text-base'>Thank you for entrusting us with your well-being. Together, we
look forward to many years of serving our community."</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-semibold text-xl">Dr. Daniel Somba</cite>
                                    <p className='text-lg font-medium text-secondary'>Chairman</p>
                                     <p className='italic font-medium text-primary'>Riftview Specialist Centre, Naivasha</p>
                                
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
