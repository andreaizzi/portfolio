// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Chi sono?"
					subTitle="With a comprehensive skill set encompassing full stack development, system architecture, cloud services, database management, and UI/UX principles, coupled with a passion for innovative problem-solving and continuous learning, I am a versatile and forward-thinking digital professional poised to create impactful web solutions."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/portrait.png" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="A Complete Developer: From Concept to Deployment"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'code' ]}
							copy="As a full stack developer, I bring a comprehensive skill set that spans the entire web development process. From crafting sleek and responsive user interfaces to building reliable and scalable backend architectures, I ensure every aspect of an application works seamlessly together. My experience with both frontend frameworks like NextJS, React and Angular, and backend technologies like Python, NodeJS, and C#, allows me to develop well-rounded solutions that cater to both performance and usability. By combining technical expertise with an eye for design and user experience, I strive to create applications that are not only powerful but also intuitive and enjoyable to use."
						/>
						<BadgesBlock 
							title="🤍 System Design and Architecture" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of development is designing systems that are both scalable and resilient.  approach system architecture with a focus on performance optimization, security best practices, and long-term maintainability. Whether working on Back-End or Frond-End, I ensure that every component is designed to handle growth, high traffic, and complex data processes."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}
const methods 	= [
	{ key: 'seedling', 		name: 'Scalability', 		type: 'fas' },
	{ key: 'arrows-turn-to-dots', 			name: 'Flexibility', 		type: 'fas' },
	{ key: 'rocket', 			name: 'Performance Optimization', 	type: 'fas' },
	{ key: 'clouds', 		name: 'Cloud Architecture', 	type: 'fas' },
	{ key: 'shield-halved', 		name: 'Security & Resilience', 		type: 'fas' },
	{ key: 'database', 			name: 'Database Management', 	type: 'fas' },
]