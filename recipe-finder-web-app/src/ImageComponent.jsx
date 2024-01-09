import { Fragment } from "react";

export default function ImageComponent(props) {
    const { user, urls } = props.photo;
    return (
        <div className="recipe-img-container">
            <img src={urls.regular} alt="" className="recipe-img"/>
            <a
                href={`https://unsplash.com/@${user.username}`}
                target="_blank"
                className="recipe-img-link"
            >
                {user.name}
            </a>
        </div>
    )
}