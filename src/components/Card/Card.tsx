import { SITE_TAGS } from "../../consts";
import './Card.css'

type CardProps = {
    companyImages: string[];
    href: string;
    summary: string;
    tags: typeof SITE_TAGS;
    title: string;
  };
  
export default function Card({
    companyImages,
    href,
    summary,
    tags,
    title,
}: CardProps) {
    return (
        <div className="link-card">
            <a href={href}>
                <ul className="company-images">
                    {companyImages.map((img, i) => (
                        <li key={i}>
                            <img src={img} alt="" />
                        </li>
                    ))}
                </ul>
                <h2 className="title-card-text">
                    {title}
                </h2>
                <p>
                    {summary}
                </p>
                <span>&rarr;</span>
                <ul className="tag-list">
                    {tags?.map((tag, i) => (
                        <li className="mono-medium" key={i}>{tag}</li>
                    ))}
                </ul>
            </a>
        </div>
    )
}