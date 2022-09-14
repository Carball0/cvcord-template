const Profile = () => {
  return (
    <div>
      <section class="text-gray-600">
        <div class="profCont container w-full ml-36 mx-auto m-10">
          <div class="flex flex-wrap -m-4 md:w-96">
            <div class="p-4">
              <div class="h-full border-2 border-gray-400 border-opacity-60 rounded-xl overflow-hidden">
                <img
                  class="h-44 w-full object-cover object-center"
                  src="https://dummyimage.com/1920x1920"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xl title-font font-medium text-gray-200 mb-1">
                    Name Surname1 Surname2
                  </h2>
                  <h1 class="title-font text-lg font-medium text-slate-400 mb-3">
                    Position/ Title/s
                  </h1>
                  <p class="leading-relaxed">
                    General description of yourself<br/>
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
