import Route from '@ember/routing/route';

const COMMUNITY_TYPES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class RentalRoute extends Route {
    async model(params) {
        let response = await fetch(`/api/rentals/${params.rental_id}.json`);
        let { data } = await response.json();

        let { id, attributes } = data;
        let type = (COMMUNITY_TYPES.includes(attributes.category)) ? 'Community' : 'Standalone';

        return { id, type, ...attributes };
    }
}
