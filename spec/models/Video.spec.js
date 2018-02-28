import Video from "../../src/models/Video";
describe('Video', () => {
    it('sets attrs of video properly', () => {
        const video = new Video({ thumbnail: '/my-thumb', title: 'My Title', description: 'Some Description' });
        expect(video.thumbnail).toEqual('/my-thumb');
        expect(video.title).toEqual('My Title');
        expect(video.description).toEqual('Some Description');
    });
});
//# sourceMappingURL=Video.spec.js.map