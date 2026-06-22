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
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl ">
                            <Image
                                src="/images/doctor-male-2.png"
                                className="rounded-[15px]"
                                alt="doctor-male-2"
                                width={600}
                                height={450}
                            />
                           
                        </div>
                    </div>

                    <div className="relative space-y-4">
                  
                        <div className="pt-8">
                            <blockquote className="border-l-4 md:pl-16 border-accent">
                                <p className='font-md text-primary/80 text-lg'>"Dear Community Members and Patients,
Welcome to Rift View Specialist Centre! Our mission is clear:
compassionate, high-quality care that puts you first. </p>
<p className='font-md text-primary/80 mt-8'>
We build a healing environment of trust, expertise, and empathy.
Our dedicated team physicians, nurses, and staff are your partners in health, always advancing with the latest medical technologies to deliver unparalleled care.
 </p><p className='font-md text-primary/80 mt-8'>Thank you for entrusting us with your well-being. Together, we
look forward to many years of serving our community."</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-semibold text-  xl">Dr.Jonah Manjari</cite>
                                    <p>Chief Executive Officer, Rift View Specialist Centre</p>
                                
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
