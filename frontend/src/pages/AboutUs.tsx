import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, Facebook } from 'lucide-react';
import Navbar from '@/components/nav';
import Footer from '@/components/footer';

interface TeamMember {
    id: string;
    name: string;
    institution: string;
    branch: string;
    role: string;
    email: string;
    facebook: string;
    instagram: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        id: '65070158',
        name: 'Pisol Uattankanjana',
        institution: "King Mongkut's Institute of Technology Ladkrabang",
        branch: 'Software Development',
        role: 'Frontend Developer',
        email: '65070158@kmitl.ac.th',
        facebook: 'https://www.facebook.com/ppisol/',
        instagram: 'https://www.instagram.com/anotherjeenz',
        image: 'https://media.discordapp.net/attachments/1248288087969103973/1335964448829079594/D9F5620D-0789-44A9-BEA2-109C6663746E.jpg?ex=67ad4a19&is=67abf899&hm=aa9af4b41887e80710e6479ec89358a60b6ad694364e95af7482a7a02a589f93&=&format=webp&width=197&height=350',
    },
    {
        id: '65070170',
        name: 'Puttraporn Jitpranee ',
        institution: "King Mongkut's Institute of Technology Ladkrabang",
        branch: 'Software Development',
        role: 'Backend Developer',
        email: '65070170@kmitl.ac.th',
        facebook: 'https://www.facebook.com/puttraporn.jitpranee',
        instagram: 'https://www.instagram.com/f5song/',
        image: 'https://media.discordapp.net/attachments/1248288087969103973/1339244796065349636/image.png?ex=67ae0469&is=67acb2e9&hm=2d675d52b237828be0368af672773257be442ddd59db4ee7b8fcd7cfc597cb3f&=&format=webp&quality=lossless',
    },
];

const AboutUs: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="m-5 bg-gray-50 h-[600px]">
                <div>
                    <h1 className='p-10 flex justify-center text-4xl font-extrabold text-gray-800'>About us</h1>
                </div>
                <div className='flex justify-center gap-5'>
                    {teamMembers.map((member) => (
                        <Card key={member.id} className="shadow-xl rounded-2xl w-[800px] ">
                            <CardContent className="flex flex-row items-center p-4 gap-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-64 h-64 object-cover bg-black m-5"
                                />
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold">{member.id} - {member.name}</h2>
                                    <p className="font-medium ">{member.role}</p>
                                    <p className="text-gray-600 mt-2">{member.institution}</p>
                                    <p className="text-gray-600">{member.branch}</p>

                                    <div className="flex gap-4 mt-4">
                                        <a href={`mailto:${member.email}`} aria-label="Email">
                                            <Mail className="w-6 h-6 text-red-500 hover:text-red-700" />
                                        </a>
                                        <a href={member.instagram} target="_blank" aria-label="Email">
                                            <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
                                        </a>
                                        <a href={member.facebook} target="_blank" aria-label="Email">
                                            <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-700  " />
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;