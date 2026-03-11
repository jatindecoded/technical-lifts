export const SITE = {
	name: 'Technical Lifts',
	tagline: 'The Gym in Vikaspuri That Actually Gets You Results',
	subheadline:
		'Certified trainers. Real equipment. No fluff. Whether you are starting out or training seriously - this is where progress happens.',
	phone: '+91XXXXXXXXXX',
	email: 'hello@technicallifts.in',
	address: 'Full Address, Vikaspuri, New Delhi',
	googleMapsUrl: '',
	instagramUrl: '',
	googleReviewsUrl: '',
	trialCTA: 'Book Your Free Trial',
	secondaryCTA: 'See Membership Plans',
	timings: 'Mon-Sat: 6AM to 10PM | Sun: 7AM to 1PM',
} as const;

export interface NavLink {
	label: string;
	href: string;
}

export const NAV_LINKS: NavLink[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Facilities', href: '#facilities' },
	{ label: 'Trainers', href: '#trainers' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'Contact', href: '#contact' },
];

export interface TrustBarItem {
	label: string;
	iconName: string;
}

export const TRUST_BAR: TrustBarItem[] = [
	{ label: '100+ Google Reviews', iconName: 'Star' },
	{ label: '5+ Certified Trainers', iconName: 'Users' },
	{ label: "Vikaspuri's Top-Rated Gym", iconName: 'Trophy' },
];

export interface WhoItsForItem {
	title: string;
	description: string;
}

export const WHO_ITS_FOR: WhoItsForItem[] = [
	{
		title: 'Beginners Who Need Direction',
		description:
			'Start with confidence through guided workouts, form correction, and a step-by-step plan that actually helps you stay consistent.',
	},
	{
		title: 'Busy Professionals',
		description:
			'Get efficient sessions built around your schedule so you can train smart, recover better, and keep making measurable progress.',
	},
	{
		title: 'Serious Lifters and Athletes',
		description:
			'Train in a high-performance setup with real equipment, structured programming, and coaches who focus on long-term results.',
	},
];

export const PT_INCLUDES: string[] = [
	'One-on-one coaching with a certified trainer',
	'Custom workout and progression plan',
	'Monthly body composition and performance review',
];

export const FACILITIES: string[] = [
	'Fully equipped strength and free weights zone',
	'Functional training and mobility area',
	'Cardio section with treadmills, bikes, and rowers',
	'Locker and changing rooms',
	'Clean washrooms and regular sanitization',
	'On-floor trainer support during operating hours',
];

export interface Trainer {
	name: string;
	certification: string;
	speciality: string;
	photo: string;
}

export const TRAINERS: Trainer[] = [
	{
		name: 'Aman Verma',
		certification: 'ACE Certified Personal Trainer',
		speciality: 'Strength Training',
		photo: '/images/trainers/trainer-1.jpg',
	},
	{
		name: 'Ritika Saini',
		certification: 'K11 Certified Fitness Coach',
		speciality: 'Fat Loss Transformation',
		photo: '/images/trainers/trainer-2.jpg',
	},
	{
		name: 'Karan Malik',
		certification: 'NSCA-CPT',
		speciality: 'Muscle Building',
		photo: '/images/trainers/trainer-3.jpg',
	},
	{
		name: 'Neha Khurana',
		certification: 'REPS India Level 4',
		speciality: 'Mobility and Functional Fitness',
		photo: '/images/trainers/trainer-4.jpg',
	},
	{
		name: 'Sarthak Mehta',
		certification: 'ISSA Certified Trainer',
		speciality: 'Sports Conditioning',
		photo: '/images/trainers/trainer-5.jpg',
	},
];

export interface Transformation {
	name: string;
	result: string;
	photo: string;
}

export const TRANSFORMATIONS: Transformation[] = [
	{
		name: 'Rohit',
		result: 'Lost 12 kg in 5 months',
		photo: '/images/transformations/transformation-1.jpg',
	},
	{
		name: 'Simran',
		result: 'Dropped 8% body fat in 4 months',
		photo: '/images/transformations/transformation-2.jpg',
	},
	{
		name: 'Nitin',
		result: 'Built 5 kg lean muscle in 6 months',
		photo: '/images/transformations/transformation-3.jpg',
	},
	{
		name: 'Anjali',
		result: 'Improved strength and posture in 12 weeks',
		photo: '/images/transformations/transformation-4.jpg',
	},
];

export interface PricingPlan {
	name: string;
	duration: string;
	price: string;
	isPopular: boolean;
	features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
	{
		name: 'Monthly',
		duration: '1 Month',
		price: '₹2,499',
		isPopular: false,
		features: [
			'Unlimited gym access',
			'Basic trainer guidance',
			'Access to all workout zones',
		],
	},
	{
		name: 'Quarterly',
		duration: '3 Months',
		price: '₹6,499',
		isPopular: false,
		features: [
			'Unlimited gym access',
			'Workout plan every month',
			'Priority support on floor',
		],
	},
	{
		name: 'Half Yearly',
		duration: '6 Months',
		price: '₹11,999',
		isPopular: true,
		features: [
			'Unlimited gym access',
			'Personalized progression tracking',
			'Monthly fitness assessment',
		],
	},
	{
		name: 'Yearly',
		duration: '12 Months',
		price: '₹19,999',
		isPopular: false,
		features: [
			'Unlimited gym access',
			'Goal-based workout programming',
			'Quarterly body composition review',
		],
	},
];

export interface FAQItem {
	question: string;
	answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
	{
		question: 'Do you offer a free trial?',
		answer:
			'Yes. You can book a free trial workout session to explore the gym, meet the trainers, and understand how we plan your fitness journey.',
	},
	{
		question: 'Is this gym suitable for complete beginners?',
		answer:
			'Absolutely. Our trainers guide beginners on form, routine, and progression so you can train safely and confidently from day one.',
	},
	{
		question: 'Do you have personal training?',
		answer:
			'Yes. We offer one-on-one personal training with certified coaches based on your goals, schedule, and current fitness level.',
	},
	{
		question: 'What are your gym timings?',
		answer:
			'We are open Monday to Saturday from 6AM to 10PM, and Sunday from 7AM to 1PM.',
	},
	{
		question: 'Are there separate batches for men and women?',
		answer:
			'No separate batches are required. We maintain a comfortable, professional training environment for everyone throughout the day.',
	},
	{
		question: 'Do you help with fat loss and transformation goals?',
		answer:
			'Yes. We focus on structured training, habit building, and consistent tracking to support sustainable fat loss and body transformation.',
	},
	{
		question: 'Where is Technical Lifts located?',
		answer:
			'We are located in Vikaspuri, New Delhi. You can call us or use the map link on the website for exact directions.',
	},
];
