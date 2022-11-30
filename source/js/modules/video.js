const initVideo = function () {
  const video = document.querySelector('.video__video-wrapper');

  if (typeof (video) !== 'undefined' && video !== null) {

    const image = video.querySelector('.video__img');
    const button = video.querySelector('.video__button');

    if (typeof (image && button) !== 'undefined' && image && button !== null) {

      const playVideo = () => {
        button.addEventListener('click', () => {
          const iframe = createIframe();
          image.remove();
          button.remove();
          video.appendChild(iframe);
        });
      };


      const createIframe = () => {
        const iframe = document.createElement('iframe');

        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('src', generateURL());
        iframe.classList.add('video__iframe');

        return iframe;
      };

      const generateURL = () => {
        const query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/9TZXsZItgdw' + query;
      };
      playVideo();
    }
  }

};
export default initVideo;
