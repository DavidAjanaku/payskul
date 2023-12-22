import React from "react";
import MainBlog from "./MainBlog";
import ReadMore from "./ReadMore";
import BlogMiniCard from "./BlogMiniCard";

export default function BlogContainer() {
  return (
    <div>
      <div className="flex w-[900px]">
        <div>
          <MainBlog
            coverImage="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/11/tes_gen_blog_post_071921_1171172626-800x412.jpg"
            title="This Title is For the blog so let's be seeing"
            authorName="Author Name"
            authorImage="https://sosafe-awareness.com/sosafe-files/uploads/2022/08/author-profile-picture.png"
            publishDate="October 10, 2023"
          />{" "}
        </div>
        <div>
          <BlogMiniCard
            coverImage="https://yt3.googleusercontent.com/y_esGAQOhX4rTpWvrALErAJlFbm_2TIVrvcVfcZny7TuA8dJZgOQcC6KRfd_J5hljFe-foYXj9U=s900-c-k-c0x00ffffff-no-rj"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <BlogMiniCard
            coverImage="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <ReadMore
            coverImage="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700524800&semt=sph"
            title="Lorem Ipsum Dolor Sit Amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
}
