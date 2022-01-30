import BlogStyle from "../Styles/BlogStyle";
import BlogSectionOne from "./Blog/BlogSectionOne";
import BlogSectionTwo from "./Blog/BlogSectionTwo";
import BlogSectionThree from "./Blog/BlogSectionThree";


function Blog() {
    const classes = BlogStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <BlogSectionOne/>
            <BlogSectionTwo/>
            <BlogSectionThree/>
        </div>
    );
}

export default Blog;