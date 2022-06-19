import Head from "next/head";
import Project from "../components/Project";
import { FaCss3Alt, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <Head>
        <title>hugo | Projects</title>
      </Head>
      <div>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p>Here are some of my projects that I find cool.</p>
        <div className="my-5 grid auto-rows-auto grid-cols-2 md:gap-x-52 gap-x-20 gap-y-10 text-center">
          <Project
            name="urlx.cf"
            description="🔗 A simple URL shortener."
            link="https://urlx.cf"
            icons={[
              <FaJs key="js" />,
              <FaHtml5 key="html5" />,
              <FaCss3Alt key="css" />,
            ]}
            github="https://github.com/wheredidhugo/urlx.cf"
          />
          <Project
            name="CloneDirecte"
            description="Une alternative à EcoleDirecte"
            link="https://clonedirecte.cf"
            icons={[<FaReact key="react" />]}
            github="https://github.com/clonedirecte"
            npmjs="https://npmjs.com/~clonedirecte"
          />
          <Project
            name="FootAPI"
            description="⚽ A simple API for Football"
            link="https://footapi.cf"
            icons={[
              <FaJs key="js" />,
              <FaHtml5 key="html5" />,
              <FaCss3Alt key="css" />,
            ]}
            github="https://github.com/footapi"
          />
          <Project
            name="4404"
            description="Description not found"
            link="https://4404.cf"
            github="https://github.com/2202x2"
          />
          <Project
            name="Fullscreen Spotify"
            description="🎧 A website that simply shows what you’re listening to using Last.fm"
            link="https://spotify.hugo.rest"
            icons={[
              <FaJs key="js" />,
              <FaHtml5 key="html5" />,
              <FaCss3Alt key="css" />,
            ]}
            github="https://github.com/wheredidhugo/fullscreen-spotify"
          />
          <Project
            name="GitHub Username Checker"
            description="🧾 Checks for random usernames with a define number of letters on GitHub"
            link="https://github.com/wheredidhugo/fullscreen-spotify"
            icons={[<FaPython key="python" />]}
          />
          <Project
            name="Discord Last.fm"
            description="🎵 A simple Discord RPC for Last.fm"
            link="https://github.com/wheredidhugo/discord-last.fm"
            icons={[
              <FaJs key="js" />,
              <FaHtml5 key="html5" />,
              <FaCss3Alt key="css" />,
            ]}
          />
          <Project
            name="Audio Russian Roulette"
            description="🔫 Turn your volume up and wait for a meme/funny song to play."
            link="https://github.com/wheredidhugo/audio-russian-roulette"
            icons={[
              <FaJs key="js" />,
              <FaHtml5 key="html5" />,
              <FaCss3Alt key="css" />,
            ]}
          />
        </div>
      </div>
    </>
  );
}
