import ProjectCard from "@/components/ProjectCard";
import { ProjectsData } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}