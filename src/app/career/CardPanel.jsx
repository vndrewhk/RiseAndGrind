export default () => {
  const posts = [
    {
      title: "The Odin Project",
      desc: "The Odin Project is a free and open-source coding curriculum that offers a comprehensive path for aspiring web developers. With its hands-on projects, extensive resources, and a supportive online community, The Odin Project empowers self-learners to build strong coding skills and launch their careers in web development.",
      img: "https://www.theodinproject.com/assets/og-logo-022832d4cefeec1d5266237be260192f5980f9bcbf1c9ca151b358f0ce1fd2df.png",
      authorLogo: "https://andrewhkma.vercel.app/images/andrew_ma.jpg",
      authorName: "Andrew Ma",
      date: "Sept 04 2023",
      href: "javascript:void(0)",
    },
    {
      title: "NeetCode",
      desc: "NeetCode. A better way to prepare for coding interviews",
      img: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dd1abac9-220d-4c4d-a8c5-d755e2606800/public",
      authorLogo: "https://andrewhkma.vercel.app/images/andrew_ma.jpg",
      authorName: "Andrew Ma",
      date: "Sept 04 2023",
      href: "javascript:void(0)",
    },
    {
      title: "/r/cscareerquestions",
      desc: "A fantastic community where developers can help learners and other developers.",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/800px-Reddit_Logo_Icon.svg.png",
      authorLogo: "https://andrewhkma.vercel.app/images/andrew_ma.jpg",
      authorName: "Andrew Ma",
      date: "Sept 04 2023",
      href: "javascript:void(0)",
    },
    {
      title: "Udemy",
      desc: "Udemy is a valuable platform for learning how to code, providing a wide range of quality courses taught by experienced instructors. Its accessible format and affordable pricing make it an ideal choice for both beginners and experienced developers seeking to enhance their coding skills.",
      img: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      authorLogo: "https://andrewhkma.vercel.app/images/andrew_ma.jpg",
      authorName: "Andrew Ma",
      date: "Sept 04 2023",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className=" mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        {/* <h1 className="text-3xl text-gray-800 font-semibold">Resources</h1>
        <p className="mt-3 text-gray-500">
          Resources, curated by you. The community.
        </p> */}
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm bg-white hover:scale-105"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md object-cover"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.authorName}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
