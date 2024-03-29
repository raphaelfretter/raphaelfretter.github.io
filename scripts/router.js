document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    route();
});

const routes = {
    "404": {
        template: "/src/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "/src/home.html",
        title: "Home",
        description: "This is the home page",
    },
    "/blog": {
        template: "/src/blog.html",
        title: "Blog",
        description: "This the blog page",
    },
    "/contact": {
        template: "/src/contact.html",
        title: "Contact",
        description: "This is the contact page",
    },
    "/projects": {
        template: "/src/projects.html",
        title: "Projects",
        description: "This is the projects page",
    }
}

const route = (event) => {
    event = event || window.event;
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    const location = window.location.pathname;
    console.log(location);
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes["404"];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .content = route.description;
};

window.onpopstate = locationHandler;
window.route = route;
locationHandler();