function showPosts() {
    var posts = [
        {
            id: 1,
            title: "HTML",
            imageUrl: "assets/card_1_html.png",
            body: "HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.",
        },
        {
            id: 2,
            title: "CSS",
            imageUrl: "assets/card_2_css.png",
            body: "CSS was developed by W3C (World Wide Web Consortium) in 1996 for a rather simple reason. HTML element was not designed to have tags that would help format the page. You were only supposed to write the markup for the web page.Tags like <font> were introduced in HTML version 3.2, and it caused quite a lot of trouble for web developers. Due to the fact that web pages have different fonts, colored backgrounds, and multiple styles, it was a long, painful, and expensive process to rewrite the code. Thus, CSS was created by W3C to solve this problem.",
        },
        {
            id: 3,
            title: "TypeScript",
            imageUrl: "assets/card_3_javascript.png",
            body: "TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. It is a superset of the JavaScript language, designed to give you better tooling at any scale. The lead architect behind TypeScript is Anders Hejlsberg, designer of C# at Microsoft. TypeScript is open source, backed by Microsoft, and considered both a language and a set of tools.",
        },
        {
            id: 4,
            title: "JavaScript",
            imageUrl: "assets/card_4_typescript.jpg",
            body: "JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages, applications, servers, and or even games. Developers generally use JavaScript alongside HTML and CSS The scripting language works well with CSS in formatting HTML elements. However, JavaScript still maintains user interaction, something that CSS cannot do by itself.",
        },
        {
            id: 5,
            title: "Git",
            imageUrl: "assets/card_5_git.jpg",
            body: "Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel. A staggering number of software projects rely on Git for version control, including commercial projects as well as open source. Developers who have worked with Git are well represented in the pool of available software development talent and it works well on a wide range of operating systems and IDEs (Integrated Development Environments).",
        },
        {
            id: 6,
            title: "GitHub",
            imageUrl: "assets/card_6_github.png",
            body: "GitHub is a for-profit company that offers a cloud-based Git repository hosting service. Essentially, it makes it a lot easier for individuals and teams to use Git for version control and collaboration. GitHub’s interface is user-friendly enough so even novice coders can take advantage of Git. Without GitHub, using Git generally requires a bit more technical savvy and use of the command line.",
        },
    ];
    var postList = document.getElementById("postCard");
    if (postList) {
        postList.innerHTML = "";
        posts.map(function (post) {
            var postContent = document.createElement("span");
            postContent.className = "card";
            postContent.href = "/post_details.html?id=".concat(post.id.toString());
            postContent.innerHTML = "\n                <img src=\"".concat(post.imageUrl, "\" alt=\"post card\">\n                <h2>").concat(post.title, "</h2>\n                <div class=\"descriptionJ\">\n                    <p>").concat(post.body, "</p>\n                </div>\n                <span>Expand...</span>\n            ");
            postList.appendChild(postContent);
        });
    }
}