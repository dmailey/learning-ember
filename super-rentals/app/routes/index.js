import Route from '@ember/routing/route';

const COMMUNITY_TYPES = [
    'Condo',
    'Townhouse',
    'Apartment'
];

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch('/api/rentals.json');
        let { data } = await response.json();

        return data.map((model) => {
            let { attributes } = model;
            let type;

            type = (COMMUNITY_TYPES.includes(attributes.category)) ? 'Community' : 'Standalone';

            return { type, ...attributes };
        });
    }
}
