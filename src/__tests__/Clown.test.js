import ClownAPI from '../processes/Clown';

beforeEach(() => {
    // TODO
});

afterEach(() => {
    // TODO
});

it('can say hello', async () => {
    return ClownAPI.sayHello().then((result) => {
        expect(result).not.toBeNull();
        expect(result).toBe(true);
    }).catch((reason) => {
        console.log(reason);
    });
});
