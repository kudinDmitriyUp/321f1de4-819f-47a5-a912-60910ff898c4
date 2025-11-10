"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BarChart3, Facebook, HelpCircle, Instagram, Mail, MessageSquare, Newspaper, Target, TrendingUp, Trophy, Twitter, Users } from 'lucide-react';

const assetMap = [];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Achievements", id: "achievements" },
            { name: "Team", id: "team" },
            { name: "Stats", id: "stats" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Niger Basketball Team"
          button={{
            text: "Join Team",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Niger School Basketball"
          description="Celebrating our incredible journey of victories, championships, and the relentless spirit that defines our basketball team"
          tag="School Champions"
          tagIcon={Trophy}
          buttons={[
            {
              text: "View Achievements",
              href: "achievements"
            },
            {
              text: "Join Our Team",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/gf590edb4454c986f0078822f5dd4ff4b3f3703cfe60930c087afd3c2c8388edbeecc4c07de3741bcf1b48f15be0aea8a10870ca0495cc9f7229c291317c3b86b_1280.jpg"
          imageAlt="Niger School Basketball Team celebrating championship victory"
        />
      </div>

      <div id="achievements" data-section="achievements">
        <FeatureCardSeven
          title="Our Greatest Achievements"
          description="A timeline of our most significant victories and milestones that showcase the dedication and talent of our basketball team"
          tag="Hall of Fame"
          tagIcon={Award}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Regional Championship 2024",
              description: "Conquered the regional tournament with an outstanding 15-2 season record, showcasing exceptional teamwork and determination",
              imageSrc: "https://pixabay.com/get/g22b318fe25588dfd199325eebf901bbbf8dbb0c3436187eb1238b4edefebeb8fc2f989f27ec609b81b3ee6eb9030b41a4a720bcabf0a870786c69a9db9883613_1280.jpg",
              imageAlt: "Regional Championship trophy and team celebration"
            },
            {
              id: 2,
              title: "State Tournament Finals",
              description: "Advanced to state tournament finals, marking the first time in school history with remarkable defensive strategy",
              imageSrc: "https://pixabay.com/get/g924532e7bdffd1e838c7290ec289abc0e27faa798a12e99660b394419f1c1751bf73a2c5d9dea9208c130987d2fb66012072596c6aace412146295d26bf2b396_1280.jpg",
              imageAlt: "Team celebrating state tournament advancement"
            },
            {
              id: 3,
              title: "Most Valuable Player Awards",
              description: "Three of our players received MVP honors in different categories, highlighting individual excellence within team success",
              imageSrc: "https://pixabay.com/get/g499fc80f2220dc386ea5785818e03368616a60cfd0edca2c5e8a4d0e27a29d398a4d247cd0564528f112648bd86bd94a62e76089263abce1d526a542eb6f0a5d_1280.jpg",
              imageAlt: "MVP award ceremony with team members"
            },
            {
              id: 4,
              title: "Community Champions Cup",
              description: "Won the prestigious Community Champions Cup, demonstrating sportsmanship and community engagement both on and off court",
              imageSrc: "https://pixabay.com/get/g85f70ae0be180c28cd10308376509e41de4828bf55e8ae4e54527a02b66419dece63dc61b24ce883aa03f33af9d06236318a444dd71eef8190c90f4fff18ebe1_1280.jpg",
              imageAlt: "Team holding Community Champions Cup trophy"
            },
            {
              id: 5,
              title: "Academic Excellence Award",
              description: "Received recognition for maintaining highest team GPA while competing at elite level, proving dedication to education",
              imageSrc: "https://pixabay.com/get/gc76bbd465dd6c9a2089508396f8a9170831d8c87a0ca8b9f24f9ff419c670bc20feaa494718ee535a8d3183265e811052d3beb4e2d73c1016ad61333eb83eb0a_1280.jpg",
              imageAlt: "Academic excellence certificate presentation"
            },
            {
              id: 6,
              title: "Perfect Season Record",
              description: "Achieved undefeated season in league play with strategic coaching and unwavering team chemistry on the court",
              imageSrc: "https://pixabay.com/get/g7bb2084b0b0861a1a124677d1a54376ccd0c85e8bc9ae4167c45eeafc137674a0d9e23ad951cf82e4d8c1564559516cb913fa87f191bc6b805835a691377344f_1280.jpg",
              imageAlt: "Team training session showing dedication"
            },
            {
              id: 7,
              title: "League Championship Banner",
              description: "Our championship banner now hangs proudly in the school gymnasium, inspiring future generations of student athletes",
              imageSrc: "https://pixabay.com/get/gb059d0ec39b7adc7064ecb94b72d7152bbffb7a777e107015cce231cad10bcb12f91d7f7fb1e63a48cd039b2d12d2207c373fa0f1a9ae6d9591db2a19b4d1e9a_1280.jpg",
              imageAlt: "Championship banner hanging in school gymnasium"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Stars"
          description="The talented athletes who make our basketball team exceptional through skill, dedication, and leadership"
          tag="Our Players"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Abdou M.",
              role: "Team Captain",
              imageSrc: "https://pixabay.com/get/g08c7fe9d18cce13110ba4849a6d5b8496483669b1e1d7976dad4756e4b4fe5ece930db43fded01c9aed8fb852e5dc4b5a27cfa32dff15b91b09472da7e527724_1280.jpg",
              imageAlt: "Portrait of Abdou M., team captain"
            },
            {
              id: "2",
              name: "Ibrahim S.",
              role: "Point Guard",
              imageSrc: "https://pixabay.com/get/g3693272ffeab11194cd8ae6231a40ae91b21127984fe8fb07cb5c3e7fadecf1ccddc33ab519ef9a991ed5295c29abb9cf7f9962631ccbb22515d8e15aae5b17a_1280.jpg",
              imageAlt: "Portrait of Ibrahim S., point guard"
            },
            {
              id: "3",
              name: "Moussa A.",
              role: "Center",
              imageSrc: "https://pixabay.com/get/gecee3d60cb8473260c9b7ff466565ccd2cbffd0af42b041e99e0aef09d7e31fa96a7648243ddaed035e4934468221f7326fe65d2ec83ed0c9409494343b46211_1280.jpg",
              imageAlt: "Portrait of Moussa A., center position player"
            }
          ]}
        />
      </div>

      <div id="stats" data-section="stats">
        <MetricCardOne
          title="Championship Statistics"
          description="Numbers that tell the story of our incredible basketball season and achievements"
          tag="Season Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "24",
              title: "wins",
              description: "Total games won this season",
              icon: Trophy
            },
            {
              id: "2",
              value: "3",
              title: "losses",
              description: "Games lost during the season",
              icon: Target
            },
            {
              id: "3",
              title: "championships",
              value: "5",
              description: "Tournament championships won",
              icon: Award
            },
            {
              id: "4",
              value: "89",
              title: "average",
              description: "Points per game average",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Team Says"
          description="Hear from our players, coaches, and supporters about the incredible basketball journey"
          tag="Team Spirit"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Abdou Mamadou",
              role: "Team Captain",
              company: "Niger School Basketball",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gc2a5774ed479490c975d55f5b5ae44e46f4c9ede1e5e2c0dcc70c21dcce882d5d1d243c2cf46c3d17321db58044c4eda75c8b8d922e0bf1b264be66ea69df497_1280.jpg",
              imageAlt: "Portrait of Abdou Mamadou, team captain"
            },
            {
              id: "2",
              name: "Coach Hassan",
              role: "Head Coach",
              company: "Niger School Athletics",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5da0e563a23470b8abb8d0ac319c4749cbd399551328a8c44251f9852ca03ae75117bbf3650042abc9200a54eb726e454fc572bdc50baadccc444f7ba24340e8_1280.jpg",
              imageAlt: "Portrait of Coach Hassan, head coach"
            },
            {
              id: "3",
              name: "Ibrahim Sani",
              role: "Point Guard",
              company: "Niger School Basketball",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge66f7c40e529a6026bb2cdddad90922f1e93369ad78ed8517b7d02ee24f7f88bbfeaa767f3a2028af458f4b5e8f63f17d81804fd7ca160cc895d1f0114d19481_1280.jpg",
              imageAlt: "Portrait of Ibrahim Sani, point guard"
            },
            {
              id: "4",
              name: "Moussa Ali",
              role: "Team Member",
              company: "Niger School Basketball",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g88ecfc5bfb687e0c7d82adc9556167267bd3c59aa8cd390be494bf17014934b0729b646ca15bbd607f9992a3701acbaa04401e82446e8d1f56715a079d390aa2_1280.jpg",
              imageAlt: "Portrait of Moussa Ali, team member"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Common questions about joining our basketball team and our achievements"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://pixabay.com/get/gc898e4022cb87e8ce2555ca8f5d0c35c80c0b83bd44faa157b5a5aea8de016abe94a6731e21e8e646a612837e06e103c49710f3436901d86728e6ffba85e9d81_1280.jpg"
          imageAlt="Niger School basketball court and gymnasium"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How can I join the Niger School Basketball team?",
              content: "Students can join through tryouts held at the beginning of each school year. We welcome players of all skill levels who demonstrate commitment, teamwork, and academic excellence."
            },
            {
              id: "2",
              title: "What are the training schedules?",
              content: "We practice Monday through Friday from 4:00 PM to 6:00 PM, with additional weekend sessions during tournament season. All practices are held in our school gymnasium."
            },
            {
              id: "3",
              title: "Do you provide basketball equipment?",
              content: "Yes, the school provides uniforms, basketballs, and basic equipment. Players are encouraged to have their own basketball shoes and water bottles for optimal performance."
            },
            {
              id: "4",
              title: "What academic requirements must be met?",
              content: "Team members must maintain a minimum GPA of 2.5 and cannot have any failing grades. Academic support is provided to help student-athletes balance sports and studies."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest News & Updates"
          description="Stay updated with our latest games, achievements, and team news"
          tag="Team News"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Training",
              title: "Intensive Training Camp Success",
              excerpt: "Our summer training camp focused on advanced techniques and team building exercises that prepared us for the championship season",
              imageSrc: "https://pixabay.com/get/gcf8d4c232a0be345556e931f88ba8df23e5864022b7b5bee5398775d2628d22d74b5fefa137253dbca059d5fe4fc91737f4a285d375280c27c10a433e94787a9_1280.jpg",
              imageAlt: "Basketball team during intensive training session",
              authorName: "Coach Hassan",
              authorAvatar: "https://pixabay.com/get/g81f95b9e3ea87bf87ba2f70b1643c30e369818b5f82630a0bd8f73986ab53c4fdf4e883de035335bb60f736cba339d78394103ac5a45c1e151a75d28b15f84f4_1280.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Championship",
              title: "Regional Championship Victory",
              excerpt: "A thrilling final game that ended with a 78-65 victory, securing our place as regional champions for the second consecutive year",
              imageSrc: "https://pixabay.com/get/g1a4c32d8f0333d21a5f97fb69924ada609102ac23b324ab228fef0b88dec73016f014d6ea99cb8146433809549ae2a700462d5ac831c5a6ec3022290f752fba6_1280.jpg",
              imageAlt: "Championship game action shot with team scoring",
              authorName: "Sports Reporter",
              authorAvatar: "https://pixabay.com/get/ga391ab725fab58250156cbe36cdc997ac2ef65dcd6cd22e5c42fce9d8561cc9679f4cfad98e498ecc844730217a3c1fa6982db2c5e9868ee2f2670133dddcf46_1280.jpg",
              date: "8 Jan 2025"
            },
            {
              id: "3",
              category: "Awards",
              title: "Team Recognition Ceremony",
              excerpt: "Our basketball team was honored at the annual school awards ceremony for outstanding academic and athletic achievements",
              imageSrc: "https://pixabay.com/get/ge2f0040cef72dcfa80972ac4e208e7955a83319b15230fa68f148215b7e58f5cd8d2c1afc3cab15c58da573848d838b0d5db21ac8915efeaf0a288b8d4303f76_1280.jpg",
              imageAlt: "Team receiving awards at ceremony",
              authorName: "Abdou M.",
              authorAvatar: "https://pixabay.com/get/g9474ae971472d8c285bc8be83f9ff5dc4efcfe78965f0ec8753ad80415143ae8e144ea91e08f19893ca9d4700827dce89a3161fec9d34cca6efe1b8f255b29d1_1280.jpg",
              date: "2 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Us"
          title="Interested in Joining Our Champion Team?"
          description="Get in touch with us to learn more about tryouts, training schedules, and becoming part of the Niger School Basketball legacy."
          tagIcon={Mail}
          imageSrc="https://pixabay.com/get/gbe8a9febc30eded63967659de69cb831983f3c8c1b7fd3342f9f8f89247ebd352904883d8ab395e5ee8d2065110e2355f6f35941327d771bf5df734cb0d345b7_1280.jpg"
          imageAlt="Niger School basketball court ready for practice"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Information"
          termsText="By signing up, you agree to receive information about tryouts and team activities. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Niger Basketball"
          columns={[
            {
              title: "Team",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Players", href: "team" },
                { label: "Achievements", href: "achievements" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Training Schedule", href: "training" },
                { label: "Tryouts", href: "tryouts" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "School",
              items: [
                { label: "Niger School", href: "https://nigerschool.edu" },
                { label: "Athletics Department", href: "athletics" },
                { label: "Student Portal", href: "portal" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/nigerschoolbasketball",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/nigerschoolbasketball",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/nigerschoolbb",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 Niger School Basketball Team. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}