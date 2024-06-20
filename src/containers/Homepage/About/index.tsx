const teams = [
  {
    name: "Daniel Onggunhao",
    title: "Co-Founder",
    url: "https://github.com/dan-jan",
    image_url: "https://avatars.githubusercontent.com/u/101145494?v=4",
    email: "daniel@jan.ai",
  },
  {
    name: "Nicole Zhu",
    title: "Co-Founder",
    url: "https://github.com/0xsage",
    image_url: "https://avatars.githubusercontent.com/u/69952136?v=4",
    email: "nicole@jan.ai",
  },
  {
    name: "Nam Nguyen",
    title: "Developer",
    url: "https://github.com/namchuai",
    image_url: "https://avatars.githubusercontent.com/u/10397206?v=4",
    email: "james@jan.ai",
  },
  {
    name: "Hiro Vuong",
    title: "MLE",
    url: "https://github.com/hiro-v",
    image_url: "https://avatars.githubusercontent.com/u/22463238?v=4",
    email: "hiro@jan.ai",
  },
  {
    name: "Ashley Tran",
    title: "Product Designer",
    url: "https://github.com/imtuyethan",
    image_url: "https://avatars.githubusercontent.com/u/89722390?v=4",
    email: "ashley@jan.ai",
  },
  {
    name: "Hien To",
    title: "DevOps Engineer",
    url: "https://github.com/hientominh",
    image_url: "https://avatars.githubusercontent.com/u/37921427?v=4",
    email: "hien@jan.ai",
  },
  {
    name: "Van Pham",
    title: "QA & Release Manager",
    url: "https://github.com/Van-QA",
    image_url: "https://avatars.githubusercontent.com/u/64197333?v=4",
    email: "van@jan.ai",
  },
  {
    name: "Louis Le",
    title: "Software Engineer",
    url: "https://github.com/louis-jan",
    image_url: "https://avatars.githubusercontent.com/u/133622055?v=4",
    email: "louis@jan.ai",
  },
  {
    name: "Rex Ha",
    title: "LLM Researcher & Content Writer",
    url: "https://github.com/hahuyhoang411",
    image_url: "https://avatars.githubusercontent.com/u/64120343?v=4",
    email: "rex@jan.ai",
  },
  {
    name: "Faisal",
    title: "UI Engineer",
    url: "https://github.com/urmauur",
    image_url: "https://avatars.githubusercontent.com/u/10354610?v=4",
    email: "faisal@jan.ai",
  },
  {
    name: "Alan Dao",
    title: "AI Engineer",
    url: "https://github.com/tikikun",
    image_url: "https://avatars.githubusercontent.com/u/22268502?v=4",
    email: "alan@jan.ai",
  },
  {
    name: "Henry Ho",
    title: "Software Engineer",
    url: "https://github.com/hieu-jan",
    image_url: "https://avatars.githubusercontent.com/u/150573299?v=4",
    email: "hieu@jan.ai",
  },
  {
    name: "Mark Nguyen",
    title: "Software Engineer",
    url: "https://github.com/marknguyen1302",
    image_url: "https://avatars.githubusercontent.com/u/170505949?v=4",
    email: "hieu@jan.ai",
  },
  {
    name: "Sang",
    title: "Software Engineer",
    url: "https://github.com/vansangpfiev",
    image_url: "https://avatars.githubusercontent.com/u/15782972?v=4",
    email: "sang@jan.ai",
  },
  {
    name: "Cameron",
    title: "Software Engineer",
    url: "https://github.com/CameronNg",
    image_url: "https://avatars.githubusercontent.com/u/165638256?v=4",
    email: "cameron@jan.ai",
  },
];

const About = () => {
  return (
    <div className="container mt-32">
      <div className="flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 p-10 gap-12 items-center rounded-lg justify-between">
        <div>
          <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
            Hello
          </h3>
          <p>
            Hello, we're the team that built{" "}
            <a href="https://jan.ai" target="_blank">
              Jan
            </a>
            . We believe that AI models and software should be local first, user
            owned, and open source.
          </p>
          <p>
            After running LLMs on over 1 million machines, across laptops and
            HCP servers, we built Cortex to help all developers run LLMs easily
            and scalably.
          </p>
          <p className="mb-0">
            We'd also like to acknowledge the following projects: llamacpp,
            tensorrtllm, onnx, directml,...
          </p>
        </div>
        <div className="w-full lg:w-1/2 text-center">
          {teams.map((team) => {
            return (
              <div
                key={team.name}
                className="relative w-16 h-16 inline-block mx-1 transition-all"
              >
                <div className="absolute bg-black dark:bg-neutral-700 w-full h-full -right-1 -bottom-1 rounded-full z-10" />
                <img
                  src={team.image_url}
                  alt={`${team.name} - ${team.title} `}
                  className="object-cover rounded-full relative z-20 border-2 border-black dark:border-neutral-700"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
