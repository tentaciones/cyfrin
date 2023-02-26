import React, { forwardRef, RefObject } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
type Props = {
  targetRef: RefObject<HTMLDivElement>;
  scrollToTop: () => void;
};

const ContactUs = forwardRef<HTMLDivElement, Props>(
  ({ targetRef, scrollToTop }, ref) => {
    const logo =
      "https://images.squarespace-cdn.com/content/v1/6332ddc9c3f53f31fa48c436/73ff7da5-b0c5-4cb1-8479-c017e4d2f32b/favicon.png";
    return (
      <div
        className="bg-background w-screen  px-7 md:px-8 md:py-5 py-10"
        ref={targetRef}
      >
        <div className="w-full md:h-[600px] h-[1000px] bg-gray-700 rounded-md flex md:flex-row flex-col gap-10 text-white px-5 py-10">
          <div className="">
            <p className="text-3xl font-bold ">CONTACT US</p>
            <p className="mt-5">
              Use the button below to ask for a quote or fill out the form to
              get in touch with us.
            </p>
            <button className="mt-5 bg-blue-800 h-[60px] w-64">
              ASK FOR A QUOTE
            </button>
            <p className="mt-5">SUBSCRIBE TO OUR CHANNEL</p>
            <div className="flex gap-5 mt-5">
              <div>
                <LiteYouTubeEmbed
                  id="_JeRq7Gwj5Y" // Default none, id of the video or playlist
                  adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
                  params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
                  playlist={false} // Use  true when your ID be from a playlist
                  playlistCoverId="_JeRq7Gwj5Y" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
                  poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
                  title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
                  noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
                />
                <p>The Undeniable Value of Blockchain </p>
              </div>

              <div>
                <LiteYouTubeEmbed
                  id="TmZ8gH-toX0" // Default none, id of the video or playlist
                  adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
                  params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
                  playlist={false} // Use  true when your ID be from a playlist
                  playlistCoverId="TmZ8gH-toX0" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
                  poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
                  title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
                  noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
                />
                <p>The Undeniable Value of Blockchain </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col md:gap-7 gap-5">
              <input
                type="text"
                className="w-full bg-white h-[60px] rounded-md px-5 text-black outline-none border border-gray-800"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full bg-white h-[60px] rounded-md px-5 text-black outline-none border border-gray-800"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="w-full bg-white h-[60px] rounded-md px-5 text-black outline-none border border-gray-800"
                placeholder="Email "
              />
              <input
                type="textarea"
                className="w-full bg-white h-[60px] rounded-md px-5 text-black outline-none border border-gray-800"
                placeholder="Subject"
              />
              <input
                type="textarea"
                className="w-full bg-white h-[60px] rounded-md px-5 text-black outline-none border border-gray-800"
                placeholder="Message"
              />
              <button className="w-full h-[60px] bg-blue-800 font-bold text-3xl ">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex  justify-center mt-10">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex  justify-center mt-10 text-white font-bold text-xl pb-32">
          <p onClick={scrollToTop} className="hover:cursor-pointer">
            HOME /{" "}
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHR9eJm6n8E2BONYHtzc28DDHtxMr5qYaXmE_MPu64dZL2xg/viewform"
            className="text-blue-500 font-thin mx-3"
          >
            REQUEST A QUOTE
          </a>
        </div>
      </div>
    );
  }
);

export default ContactUs;
