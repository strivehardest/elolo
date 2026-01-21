import React from 'react';
import SEOHead from '../../components/seo/SEOHead';

export default function Conferences() {
	return (
		<>
			<SEOHead
				title="Conferences | TVET Leadership & Innovation Forums"
				description="Attend TVET conferences and forums on leadership, innovation, and skills development in Ghana and Africa."
				canonical="https://eloloagbleke.com/events/conferences"
				openGraph={{
					title: "Conferences | TVET Leadership & Innovation Forums",
					description: "Attend TVET conferences and forums on leadership, innovation, and skills development in Ghana and Africa.",
					url: "https://eloloagbleke.com/events/conferences"
				}}
				additionalMetaTags={[{
					name: 'keywords',
					content: 'conferences, TVET, leadership, innovation, forums, Elolo Agbleke, Ghana, Africa, events, skills development'
				}]}
			/>
			<div className="max-w-2xl mx-auto text-center py-20">
				<h1 className="text-4xl font-bold mb-6 text-[#df8125]">Conferences</h1>
				<p className="text-lg text-gray-700">Not available at the moment.</p>
			</div>
		</>
	);
}
