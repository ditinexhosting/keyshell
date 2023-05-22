import Image from 'next/image';

export default function Index({ projects }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <a key={project.id} href={project.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  height={100}
                  width={100}
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-lg font-medium text-gray-900 ">
                {project.title}
              </h3>
              <p className="mt-4 text-sm text-gray-700">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
