import React from 'react';
import SEOHead from '../../components/seo/SEOHead';

export default function Workshops() {
	return (
		<>
			<SEOHead
				title="Workshops | TVET Training & Professional Development Events"
				description="Browse upcoming and past TVET workshops, hands-on training, and professional development events by Elolo Agbleke."
				canonical="https://eloloagbleke.com/events/workshops"
				openGraph={{
					title: "Workshops | TVET Training & Professional Development Events",
					description: "Browse upcoming and past TVET workshops, hands-on training, and professional development events by Elolo Agbleke.",
					url: "https://eloloagbleke.com/events/workshops"
				}}
				additionalMetaTags={[{
					name: 'keywords',
					content: 'workshops, TVET, training, professional development, Elolo Agbleke, events, skills, Ghana, education'
				}]}
			/>
			<div className="max-w-2xl mx-auto text-center py-20">
				<h1 className="text-4xl font-bold mb-6 text-[#df8125]">Workshops</h1>
				<p className="text-lg text-gray-700">Not available at the moment.</p>
			</div>
		</>
	);
}
