export const navmenuitems = [
    {
        id: 1,
        linkName: "Home",
        linkTo: "/"
    },
    {
        id: 2,
        linkName: "About",
        linkTo: "/about"
    },
    {
        id: 3,
        linkName: "Projects",
        linkTo: "/projects",
        children: [
            {
                id: 11,
                subLinkName: "All Projects",
                linkTo: "/projects"
            },
            {
                id: 12,
                subLinkName: "Find a Project",
                linkTo: "/projects/find"
            },
            {
                id: 11,
                subLinkName: "Submit A Project",
                linkTo: "/projects/submit"
            },
        ]
    },
    {
        id: 4,
        linkName: "Contact",
        linkTo: "/contact"
    },
]

export const pageheaderitems = {
    "about": {
        title: "About Me",
        description: "Get to know the guy behind all this"
    },
    "projects": {
        title: "Projects",
        description: "Look through stuff I've worked on"
    },
    "contact": {
        title: "Contact Me",
        description: "Send me a message, Let's connect!"
    },
}