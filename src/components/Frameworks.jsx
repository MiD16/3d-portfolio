import { OrbitingCircles } from "./OrbitCircles";

export default function Frameworks() {
  const frameworksAndLanguages = [
    'python',
    'django',
    'flask',
    'dart',
    'flutter',
    'java',
    'spring-wordmark',
    'php',
    'laravel',
    "csharp",
    "dot-net-wordmark",
    "dotnetcore",
    "javascript",
    "react",
    "cplusplus",
    "tailwindcss",
  ];

  const technologies = [
    'linux',
    'docker',
    "git",
    'github',
    'gitlab',
    'oracle',
    "sqlite",
    'firebase',
    'insomnia',
    'jupyter-wordmark',
    'postman',
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={45} radius={180}>
        {frameworksAndLanguages.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={35} radius={100} reverse speed={2}>
        {technologies.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt="Icon"
    className="duration-200 rounded-sm hover:scale-110"
  />
);
