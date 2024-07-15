import { getCollection } from "astro:content";
import { SITE_TAGS } from "../../consts";
import { useState } from "react";
import './CardSort.css'
import Card from "../Card/Card";

const projects = (await getCollection('projects')).sort(
    (a, b) =>  b.data.order - a.data.order
);

export default function CardSort() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filterTags = (tag: string) => {
        setSelectedTags((prevTags) => {
            if (prevTags.includes(tag)) {
                return prevTags.filter(prevTag => prevTag !== tag);
            }

            return [tag, ...prevTags];
        })
    }

    const projectData = (!selectedTags.length) ? projects :
        projects.filter((proj) => {
            return proj.data.tags.some(tag => selectedTags.includes(tag))
        })

    return (
        <div>
            <ul className="tags">
                {
                    SITE_TAGS.map((tag, i) => (
                        <li key={i}>
                            <button
                                onClick={() => filterTags(tag)}
                                className={`sub-body-text ${selectedTags.includes(tag) ? 'active' : ''}`}>
                                    {tag}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <ul className="card-grid">
                {projectData.map((project, i) => (
                    <li key={i}>
                        <Card
                            companyImages={project.data.companyImages}
                            href={`/projects/${project.slug}`}
                            summary={project.data.summary}
                            tags={project.data.tags}
                            title={project.data.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}