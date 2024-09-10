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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a dynamic full stack developer, I build scalable and innovative web applications using a comprehensive suite of technologies and frameworks"
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="Each technology is carefully chosen for its efficiency, versatility, and ability to enhance the development process. Whether it's crafting sleek front-end interfaces or building robust back-end systems, these technologies are integral to my approach, enabling me to deliver high-quality, scalable, and innovative applications."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Software I love to work with" 
							copy="From powerful IDEs and version control systems to collaborative platforms and debugging tools, these applications enhance my productivity and streamline my development process. They are carefully chosen for their functionality, reliability, and ability to integrate seamlessly into my workflow."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	// Development Tools
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'github', 		name: 'GitHub', 			type: 'devicon' },
	{ key: 'docker', 		name: 'Docker', 			type: 'devicon' },
	{ key: 'postman', 		name: 'Postman', 			type: 'devicon' },

	// Additional Development Tools
	{ key: 'npm-original-wordmark', 			name: 'npm', 				type: 'devicon' },
	{ key: 'yarn', 			name: 'Yarn', 				type: 'devicon' },
	{ key: 'webpack', 		name: 'Webpack', 			type: 'devicon' },

	// Design Tools
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },

	// Video and Audio Tools
	{ key: 'aftereffects',	name: 'After Effects', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Premiere Pro', 		type: 'devicon' },

]

const tech	= [
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'angular', 		name: 'Angular', 			type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'express', 		name: 'Express', 			type: 'devicon' },
	{ key: 'python', 		name: 'Python', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
]