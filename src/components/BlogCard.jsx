import { Link } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
const BlogCard = ({blog}) => {

    const {id, cover_image, title, description, published_at} = blog

    return (
        <div>
            <Link
                to={`/blog/${id}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src= {cover_image || placeholderImage } />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl text-gray-600 font-semibold group-hover:underline group-focus:underline"> {title}</h3>
                    <span className="text-xs  text-gray-600">{new Date (published_at).toLocaleDateString()}</span>
                    <p className='text-gray-600'>{description}</p>
                </div>
            </Link>

        </div>
    );
};

export default BlogCard;