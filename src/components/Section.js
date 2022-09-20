const Section = ({img, title, subtitle, text}) => {
  let imageURL = "https://dummyimage.com/1920x1920"
  if (img != null && Object.keys(img).length != 0) imageURL = img

  return (
    <section class="text-gray-600">
      <div class="p-4">
        <div class="h-full border-2 border-gray-400 border-opacity-60 rounded-xl overflow-hidden">
          <img
            class="h-64 w-full object-cover object-center"
            src={imageURL}
            alt=""
          />
          <div class="p-6">
            <h2 class="tracking-widest text-xl title-font font-medium text-gray-200 mb-1">
              {title ? title : ""}
            </h2>
            <h1 class="title-font text-lg font-medium text-slate-400 mb-3">
              Position/ Title/s
            </h1>
            <p class="leading-relaxed">
              General description of yourself
              <br />
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
