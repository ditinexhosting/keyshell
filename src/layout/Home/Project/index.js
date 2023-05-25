import Image from 'next/image';

export default function Index({ projects }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <a key={project.id} href={project.href} className="group">
              <div className="h-48 w-full ">
                <div className='h-full w-full bg-cover' style={{ backgroundImage: `url(${project.imageSrc})` }}></div>
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
