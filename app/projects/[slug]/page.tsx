import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import type { ProjectDetail as ProjectDetailType, ProjectsData } from "@/types/portfolio";
import projectsData from "@/data/projects.json";

const data = projectsData as ProjectsData;

export function generateStaticParams() {
  return data.items.map((item) => ({ slug: item.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = data.items.find((p) => p.slug === slug) as ProjectDetailType | undefined;

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
