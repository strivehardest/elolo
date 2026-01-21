import React from 'react';
import SEOHead from '../../components/seo/SEOHead';

export default function NetworkingEvents() {
	return (
		<>
			<SEOHead
				title="Networking Events | TVET Community & Professional Connections"
				description="Join TVET networking events and connect with professionals, educators, and industry leaders in Ghana."
				canonical="https://eloloagbleke.com/events/networking"
				openGraph={{
					title: "Networking Events | TVET Community & Professional Connections",
					description: "Join TVET networking events and connect with professionals, educators, and industry leaders in Ghana.",
					url: "https://eloloagbleke.com/events/networking"
				}}
				additionalMetaTags={[{
					name: 'keywords',
					content: 'networking events, TVET, community, professional connections, Elolo Agbleke, Ghana, education, industry, events'
				}]}
			/>
			<div className="max-w-2xl mx-auto text-center py-20">
				<h1 className="text-4xl font-bold mb-6 text-[#df8125]">Networking Events</h1>
				<p className="text-lg text-gray-700">Not available at the moment.</p>
			</div>
		</>
	);
}
