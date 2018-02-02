import { VidMessengerPage } from './app.po';

describe('vid-messenger App', () => {
  let page: VidMessengerPage;

  beforeEach(() => {
    page = new VidMessengerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
