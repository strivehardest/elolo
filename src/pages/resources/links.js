import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';

const usefulLinks = [
	{
		name: 'Ministry of Education Ghana',
		url: 'https://moe.gov.gh/',
		description: 'Official website for the Ministry of Education, Ghana.'
	},
	{
		name: 'Ghana TVET Service',
		url: 'https://gtvets.gov.gh/',
		description: 'Ghana Technical and Vocational Education and Training Service.'
	},
	{
		name: 'WorldSkills International',
		url: 'https://worldskills.org/',
		description: 'Global hub for skills excellence and development.'
	},
	{
		name: 'African Union TVET',
		url: 'https://edu-au.org/tvet',
		description: 'African Union TVET initiatives and resources.'
	},
	// Add more links as needed
];

export default function LinksPage() {
	return (
		<>
			<SEOHead
				title="Useful Links | TVET, Education & Skills Resources"
				description="Browse a curated list of useful links for TVET, education, skills development, and professional resources in Ghana and beyond."
				canonical="https://eloloagbleke.com/resources/links"
				openGraph={{
					title: "Useful Links | TVET, Education & Skills Resources",
					description: "Browse a curated list of useful links for TVET, education, skills development, and professional resources in Ghana and beyond.",
					url: "https://eloloagbleke.com/resources/links"
				}}
				additionalMetaTags={[{
					name: 'keywords',
					content: 'useful links, TVET, education, skills, resources, Ghana, Elolo Agbleke, professional development, community'
				}]}
			/>
			<div className="max-w-3xl mx-auto py-10 px-4">
			<h1 className="text-3xl sm:text-4xl font-bold mb-8 text-[#df8125] text-center">Useful Links</h1>
			<ul className="space-y-6">
				{usefulLinks.map((link, idx) => (
					<li key={idx} className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition-shadow border border-[#f3e7d7]">
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl font-semibold text-[#df8125] hover:underline"
						>
							{link.name}
						</a>
						<p className="text-gray-700 mt-2 text-base">{link.description}</p>
					</li>
				))}
			</ul>
		</div>
		</>
	);
}
