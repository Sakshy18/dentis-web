export const blogCategories = [
  "All Category",
  "Oral Health Tips",
  "Treatments",
  "Clinic News & Events",
  "Patients Story",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogPost = {
  slug: string;
  title: string;
  dateLabel: string;
  readTime: string;
  excerpt: string;
  image: string;
  category: Exclude<BlogCategory, "All Category">;
  tags: string[];
  authorName: string;
  authorAvatar: string;
  heroSubtitle: string;
  content: string[];
  featured?: boolean;
};

const authorMark = "/images/png/blog/author-mark-leverton.png";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-care-for-your-childs-teeth-at-every-age",
    title: "How to Care for Your Child's Teeth at Every Age",
    dateLabel: "May, 28",
    readTime: "2 min read",
    excerpt:
      "Caring for your child's teeth requires different approaches at each stage of their growth. This guide breaks down age-specific tips to help keep their oral health strong and habits healthy for life.",
    image: "/images/png/blog/featured-child-care.jpg",
    category: "Oral Health Tips",
    tags: ["Child", "Care", "Teeth"],
    authorName: "Jake Haverlock",
    authorAvatar: authorMark,
    heroSubtitle:
      "At the heart of our clinic is a simple mission to make high-quality dental care accessible, comfortable, and tailored to you.",
    content: [
      "Healthy oral habits start early. For infants, gently wiping gums after feeding and introducing brushing as soon as the first tooth appears helps build a strong routine.",
      "As children grow, consistency matters more than perfection. Choose age-appropriate brushes, supervise technique, and make check-ups part of a normal, positive health routine.",
      "By the teen years, prevention and education should work together. Encourage flossing, discuss diet choices, and align regular cleanings with school and activity schedules.",
    ],
    featured: true,
  },
  {
    slug: "7-everyday-habits-that-can-harm-your-teeth",
    title: "7 Everyday Habits That Can Harm Your Teeth",
    dateLabel: "May, 18",
    readTime: "2 min read",
    excerpt: "This article explores common daily habits like snacking, chewing ice, or skipping flossing.",
    image: "/images/png/blog/habits-harm-teeth.jpg",
    category: "Oral Health Tips",
    tags: ["Habits", "Prevention"],
    authorName: "Mark Leverton",
    authorAvatar: authorMark,
    heroSubtitle: "Simple routine changes can make a major difference in long-term oral health.",
    content: [
      "Small everyday actions can add up over time. Frequent snacking, nail biting, and aggressive brushing can all stress enamel and gum tissue.",
      "Start with one or two improvements: use a soft-bristle brush, reduce sugary drinks between meals, and keep hydration high throughout the day.",
    ],
  },
  {
    slug: "whitening-101-safe-ways-to-brighten-your-smile-at-home",
    title: "Whitening 101: Safe Ways to Brighten Your Smile at Home",
    dateLabel: "May, 12",
    readTime: "2 min read",
    excerpt: "Learn safe and dentist-approved tips for achieving a brighter smile using over-the-counter products.",
    image: "/images/png/blog/whitening-101.jpg",
    category: "Treatments",
    tags: ["Whitening", "Home Care"],
    authorName: "Mark Leverton",
    authorAvatar: authorMark,
    heroSubtitle: "Whitening works best when safety and consistency come first.",
    content: [
      "Not all whitening products are equal. Choose products with clear usage instructions and avoid overuse, which can increase sensitivity.",
      "If discoloration is persistent, a professional consultation can identify the cause and recommend a safer treatment plan.",
    ],
  },
  {
    slug: "dental-education-programs-for-schools-and-organizations",
    title: "Dental Education Programs for Schools and Organizations",
    dateLabel: "May, 9",
    readTime: "2 min read",
    excerpt: "Building healthy habits through professional guidance.",
    image: "/images/png/blog/dental-education-program.jpg",
    category: "Clinic News & Events",
    tags: ["Education", "Community"],
    authorName: "Mark Leverton",
    authorAvatar: authorMark,
    heroSubtitle: "Community education creates healthier smiles for the long term.",
    content: [
      "School and workplace programs help people understand daily oral care with practical, age-appropriate instruction.",
      "Our sessions combine demonstrations, Q&A, and preventive checklists so participants can confidently apply what they learn.",
    ],
  },
  {
    slug: "why-routine-dental-check-ups-matter-more-than-you-think",
    title: "Why Routine Dental Check-Ups Matter More Than You Think",
    dateLabel: "April, 23",
    readTime: "2 min read",
    excerpt: "Explains the long-term benefits of regular dental visits, from early detection of problems.",
    image: "/images/png/blog/routine-checkups.jpg",
    category: "Oral Health Tips",
    tags: ["Check-Up", "Prevention"],
    authorName: "Mark Leverton",
    authorAvatar: authorMark,
    heroSubtitle: "Routine care prevents bigger problems before they start.",
    content: [
      "Regular check-ups are not only about cleaning. They also help detect early signs of gum disease, decay, and bite issues before symptoms worsen.",
      "A preventive schedule saves time, lowers treatment complexity, and supports healthier long-term outcomes.",
    ],
  },
  {
    slug: "orthodontic-treatment-for-better-dental-function",
    title: "Orthodontic Treatment for Better Dental Function",
    dateLabel: "April, 14",
    readTime: "2 min read",
    excerpt: "How braces support comfort, balance, and confidence to your smile.",
    image: "/images/png/blog/orthodontic-treatment.jpg",
    category: "Treatments",
    tags: ["Orthodontics", "Function"],
    authorName: "Mark Leverton",
    authorAvatar: authorMark,
    heroSubtitle: "Orthodontics improves more than appearance-it supports bite function too.",
    content: [
      "Aligned teeth are easier to clean and can reduce uneven wear. Correcting bite position also helps improve chewing comfort and jaw balance.",
      "Treatment plans vary by age and need, so professional assessment is key to choosing the right approach.",
    ],
  },
  {
    slug: "supporting-better-oral-health-for-the-community",
    title: "Supporting Better Oral Health for the Community",
    dateLabel: "April, 3",
    readTime: "2 min read",
    excerpt: "Providing education and preventive care to encouraging long-term oral health.",
    image: "/images/png/blog/community-oral-health.jpg",
    category: "Patients Story",
    tags: ["Community", "Impact"],
    authorName: "Mark Leverton",
    authorAvatar: authorMark,
    heroSubtitle: "Healthy communities are built through consistent preventive support.",
    content: [
      "Community-focused programs help bridge care gaps by bringing practical oral health guidance to more families.",
      "From screenings to hygiene education, consistent preventive access can improve confidence and health outcomes at scale.",
    ],
  },
];

export const featuredBlogPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
export const blogFeedPosts = blogPosts.filter((post) => !post.featured);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  return blogFeedPosts.filter((post) => post.slug !== slug).slice(0, limit);
}
