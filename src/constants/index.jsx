import { BookOpen, Globe, GraduationCap, FileSearch, Users, Briefcase, User } from "lucide-react";
import { Star, CreditCard, Book } from 'lucide-react'
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user4 from '../assets/images/user4.jpg';
import user5 from '../assets/images/user5.jpg';
import user6 from '../assets/images/user6.jpg';


export const navItems = [
  { label: "Services", href: "#" },
  { label: "Study Abroad", href: "#" },
  { label: "Scholarships", href: "#" },
  { label: "Testimonials", href: "#" },
];


export const services = [
  {
    icon: <BookOpen/>,
    text: "Study Abroad Guidance",
    description: "Personalized counseling to help you choose the best country, university, and course for your academic journey."
  },
  {
    icon: <Globe/>,
    text: "Visa Assistance",
    description: "Step-by-step support in preparing and applying for your student visa with confidence."
  },
  {
    icon: <GraduationCap/>,
    text: "Scholarship Support",
    description: "Get access to the latest scholarships and learn how to craft winning applications."
  },
  {
    icon: <FileSearch/>,
    text: "Application Review",
    description: "Expert guidance on preparing and reviewing your university applications to maximize acceptance chances."
  },
  {
    icon: <Users/>,
    text: "Career Counseling",
    description: "Plan your career path with advice tailored to your academic background and future goals."
  },
  {
    icon: <Briefcase/>,
    text: "Internship & Job Guidance",
    description: "Support in finding internships and part-time jobs while studying abroad to build your career profile."
  }
];

export const checklistItems = [
  {
    title: "Choose Your Destination",
    description: "Get expert advice to select the best country and university for your goals."
  },
  {
    title: "Prepare Your Documents",
    description: "We guide you through all necessary paperwork for applications and visas."
  },
  {
    title: "Apply With Confidence",
    description: "Our team reviews and optimizes your applications to maximize acceptance chances."
  },
  {
    title: "Plan Your Journey",
    description: "Receive step-by-step support for visas, travel, and settling abroad smoothly."
  }
];


export const scholarships = [
  {
    title: "Merit-Based Scholarships",
    description: "Exclusive scholarships for top-performing students based on grades and achievements.",
    icon: Star
  },
  {
    title: "Need-Based Scholarships",
    description: "Financial support for students who need assistance to pursue your dream courses abroad.",
    icon: CreditCard
  },
  {
    title: "University-Specific Scholarships",
    description: "Scholarships offered directly by partner universities for specific programs or countries.",
    icon: Book
  },
]

export const testimonials = [
  {
    user: "Aarav Sharma",
    location: "Nepal",
    image: user6,
    text: "Thanks to their guidance, I secured a scholarship in Canada with zero stress!"
  },
  {
    user: "Priya Kharel",
    location: "India",
    image: user1,
    text: "The visa process felt so easy. They walked me through every single step."
  },
  {
    user: "Rohan Thapa",
    location: "Nepal",
    image: user2,
    text: "Their application review made sure my dream university accepted me. Truly professional!"
  },
  {
    user: "Sanya Rai",
    location: "Bangladesh",
    image: user3,
    text: "I got a full scholarship thanks to their scholarship support. Super helpful team!"
  },
  {
    user: "Kabir Joshi",
    location: "India",
    image: user4,
    text: "Career counseling was top-notch. I finally have a clear plan for my future."
  },
  {
    user: "Meera Singh",
    location: "Nepal",
    image: user5,
    text: "Internship guidance was perfect. Found the right opportunity without any stress."
  }
];


export const quickLinks = [
  { text: "Services", href: "#" },
  { text: "Study Abroad", href: "#" },
  { text: "Scholarships", href: "#" },
  { text: "About Us", href: "#" },
];

export const supportLinks = [
  { text: "FAQs", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Terms & Conditions", href: "#" },
  { text: "Privacy Policy", href: "#" },
];

export const connectLinks = [
  { text: "Facebook", href: "#" },
  { text: "Instagram", href: "#" },
  { text: "LinkedIn", href: "#" },
  { text: "Twitter", href: "#" },
];
