const AboutMe = () => {
  return (
    <>
      <section
        id="aboutme"
        className="flex flex-col justify-between items-center p-5 py-10 aboutme"
      >
        <div>
          <h1 className="text-4xl font-bold m-2">About Me</h1>
        </div>
        <div className="mt-5 w-1/2 text-center about-desc">
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I&apos;ve also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p>
            When I’m not at the computer, I’m usually rock climbing, hanging out
            with my wife and two cats, or running around Hyrule searching for
            Korok seeds K o r o k s e e d s .
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
