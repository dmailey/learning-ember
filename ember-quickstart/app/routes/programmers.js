import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return [
            'Dennis Ritchie',
            'Bill Gates',
            'Larry Page',
            'Sergey Brin',
            'Linus Torvalds'
        ];
    }
}
