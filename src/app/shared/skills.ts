export interface Icon {
    svg: string;
    title: string;
};
  
export interface Skill {
    header: string;
    icons: Icon[];
};
  
export const skills: Skill[] = [
    {
        header: "Programming languages",
        icons: [
            { svg: "c.svg", title: "C" },
            { svg: "csharp.svg", title: "C#" },
            { svg: "delphi.svg", title: "Delphi" },
            { svg: "javascript.svg", title: "Javascript" },
            { svg: "html5.svg", title: "HTML5" },
            { svg: "css3.svg", title: "CSS3" },
            { svg: "sass.svg", title: "Sass" },
            { svg: "graphql.svg", title: "GraphQL" },
            { svg: "python.svg", title: "Python" },
        ],
    },
    {
        header: "Frameworks & Libraries",
        icons: [
            { svg: "dotnet.svg", title: ".NET" },
            { svg: "xamarin.svg", title: "Xamarin" },
            { svg: "react.svg", title: "React" },
            { svg: "nodejs.svg", title: "NodeJS" },
            { svg: "bootstrap.svg", title: "Bootstrap" },
            { svg: "jquery.svg", title: "JQuery" },
            { svg: "gatsby.svg", title: "Gatsby" },
            { svg: "nextjs.svg", title: "NextJS" },
        ],
    },
    {
        header: "Databases",
        icons: [
            { svg: "microsoftsqlserver.svg", title: "MS SQL" },
            { svg: "sqlite.svg", title: "SQLite" },
            { svg: "influx.svg", title: "Influx" },
            { svg: "mysql.svg", title: "MySQL" },
        ],
    },
    {
        header: "IDEs & Tools",
        icons: [
            { svg: "visualstudio.svg", title: "VS" },
            { svg: "visualstudiocode.svg", title: "VS Code" },
            { svg: "github.svg", title: "Github" },
            { svg: "subversion.svg", title: "SVN" },
            { svg: "nuget.svg", title: "Nuget" },
            { svg: "npm.svg", title: "NPM" },
            { svg: "yarn.svg", title: "Yarn" },
            { svg: "docker.svg", title: "Docker" },
        ],
    },
    {
        header: "Test/Measurement & IoT",
        icons: [
            { svg: "national-instruments.svg", title: "National Instruments" },
            { svg: "labview.svg", title: "Labview" },
            { svg: "arduino.svg", title: "Arduino" },
            { svg: "raspberrypi.svg", title: "Raspberry PI" },
            { svg: "zigbee.svg", title: "Zigbee" },
        ],
    },
  ];
