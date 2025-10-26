"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Star, Sparkles, Heart, Waves, Utensils, HouseIcon, MessageCircle, Users, HelpCircle, Phone, Linkedin, Mail, Instagram, Twitter } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Immerse yourself in unparalleled elegance and comfort at Grandeur Hotel, where every moment becomes a cherished memory."
          tag="5-Star Excellence"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.example.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxurious hotel lobby with elegant interior design"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Discover our exceptional facilities designed to enhance your stay with luxury and comfort."
          tag="Premium Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and soul with our world-class spa treatments and wellness facilities.",
              icon: Heart,
              button: { text: "Book Treatment", href: "https://spa.example.com" }
            },
            {
              title: "Infinity Pool",
              description: "Enjoy breathtaking views while relaxing in our stunning rooftop infinity pool.",
              icon: Waves,
              button: { text: "View Gallery", href: "gallery" }
            },
            {
              title: "Fine Dining",
              description: "Savor exquisite cuisine crafted by our award-winning chefs in elegant dining spaces.",
              icon: Utensils,
              button: { text: "View Menu", href: "dining" }
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardThree
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed rooms and suites, each designed for ultimate comfort."
          tag="Book Direct & Save"
          tagIcon={HouseIcon}
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe king room with city view",
              initialQuantity: 1
            },
            {
              id: "premium",
              name: "Premium Suite",
              price: "$459/night",
              imageSrc: "https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious premium suite with luxury amenities",
              initialQuantity: 1
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite with panoramic views",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Hear from our valued guests about their unforgettable experiences at Grandeur Hotel."
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "Absolutely exceptional service and luxury beyond expectations. The attention to detail and personalized care made our anniversary celebration truly magical.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Enthusiast",
              testimonial: "From the moment we arrived, we were treated like royalty. The spa treatments were divine and the dining experience was world-class.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              testimonial: "I've worked with many luxury hotels, but Grandeur Hotel sets the gold standard. Their event coordination and attention to detail are unmatched.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Director",
              testimonial: "The perfect blend of business amenities and leisure luxury. Our corporate retreat was seamless and our team was thoroughly impressed.",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Our dedicated professionals are committed to making your stay extraordinary."
          tag="Hospitality Excellence"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexandra Sterling",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexandra Sterling, General Manager",
              socialLinks: [{ icon: Linkedin, url: "https://linkedin.com/in/alexandra" }]
            },
            {
              id: "2",
              name: "James Morrison",
              role: "Chief Concierge",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Morrison, Chief Concierge",
              socialLinks: [{ icon: Mail, url: "mailto:concierge@grandeurhotel.com" }]
            },
            {
              id: "3",
              name: "Chef Isabella Rossi",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Chef Isabella Rossi, Executive Chef",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/chefisabella" },
                { icon: Twitter, url: "https://twitter.com/chefisabella" }
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grandeur Hotel."
          tag="Guest Information"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transportation service. Please contact our concierge at least 24 hours in advance to arrange pickup."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "We welcome well-behaved pets in designated rooms with advance notice. A pet fee of $75 per night applies, and pets must be leashed in public areas."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "We feature three dining venues: our signature restaurant for fine dining, a casual bistro for light meals, and 24-hour room service for in-room dining."
            },
            {
              id: "5",
              title: "Do you have fitness facilities?",
              content: "Yes, our 24-hour fitness center features state-of-the-art equipment, and our spa offers personal training sessions and wellness programs."
            },
            {
              id: "6",
              title: "Is Wi-Fi available throughout the hotel?",
              content: "Complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms, public areas, and meeting spaces."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Plan Your Perfect Stay"
          description="Ready to experience luxury like never before? Contact our reservations team or book directly online for the best rates and exclusive perks."
          tagIcon={Phone}
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel reception desk"
          inputPlaceholder="Enter your email for special offers"
          buttonText="Contact Us"
          termsText="By subscribing, you agree to receive exclusive offers and updates from Grandeur Hotel. Unsubscribe anytime."
        />
      </div>
    </ThemeProvider>
  );
}