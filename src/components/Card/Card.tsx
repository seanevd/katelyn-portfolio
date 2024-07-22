import { SITE_TAGS } from "../../consts";
import './Card.css'

type CardProps = {
    companyImages: string[];
    href: string;
    slug: string;
    summary: string;
    tags: typeof SITE_TAGS;
    title: string;
  };
  
export default function Card({
    companyImages,
    href,
    slug,
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
                            <img
                                src={`/project-images/${slug}/logos/${img}`}
                                alt={`${title} logo`} />
                        </li>
                    ))}
                </ul>
                <h2 className="title-card-text">
                    {title}
                </h2>
                <p className="summary-text">
                    {summary}
                </p>
                <div className="arrow-elem">
                    <div className="arrow"></div>
                </div>
                <ul className="tag-list">
                    {tags?.map((tag, i) => (
                        <li className="mono-bold" key={i}>{tag}</li>
                    ))}
                </ul>
            </a>
        </div>
    )
}