import ProfilePicture from '../ProfilePicture';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-x-8">
      <div className="flex-1 space-y-2 justify-center flex flex-col">
        <p className="text-gray-300">Hello, I’m Olly,</p>
        <h2 className="text-2xl font-extrabold leading-tight text-center md:text-left">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Front End
          </span>
          &nbsp;
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            Engineer
          </span>{' '}
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            UI | UX
          </span>
          &nbsp;
          <span className="bg-gradient-to-r from-yellow-400 to-orange-600 text-transparent bg-clip-text">
            Designer
          </span>
        </h2>
        <h4 className="text-gray-300">
          I’m a passionate front-end engineer and UI/UX designer with a knack
          for creating beautiful and functional user experiences. I love to
          build things that live on the web.
        </h4>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <ProfilePicture />
      </div>
    </section>
  );
};

export default Hero;
