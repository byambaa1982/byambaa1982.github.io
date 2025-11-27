# Free Blog with GitHub Pages and Jekyll

## [My Jekyll Website](https://byambaa1982.github.io)

I made the decision to share my blog posts on GitHub using Jekyll, and it has proven to be an excellent choice. Jekyll is a static site generator that offers a multitude of benefits for hosting a blog. One of the main reasons I chose Jekyll is its simplicity and ease of use. With Jekyll, I can focus on writing content without getting caught up in complex configurations or dependencies. The straightforward structure and intuitive templating system allow me to create and customize my blog effortlessly. Additionally, Jekyll's integration with GitHub Pages makes it seamless to publish my blog directly from my repository. This combination of simplicity, flexibility, and seamless integration convinced me that Jekyll was the perfect tool for my blogging needs.

You can see the results of my blogging endeavors by visiting [my website](https://byambaa1982.github.io), where my Jekyll-powered blog is hosted.

## Why Use GitHub Pages for Blogging?

- **100% Free Hosting** - GitHub Pages offers free hosting for static websites
- **Custom Domain Support** - Use your own domain name or get a free `.github.io` subdomain
- **Version Control** - All your blog posts are tracked with Git
- **Easy Publishing** - Simply push to GitHub and your site updates automatically
- **No Database Required** - Static site = fast loading and secure
- **Markdown Support** - Write posts in simple Markdown format

## How to Clone and Deploy Your Own Blog

### Prerequisites

Before you begin, make sure you have:
- A GitHub account
- Git installed on your computer
- Ruby and Jekyll installed (for local testing)

### Step 1: Fork or Clone This Repository

**Option A: Fork this repository (Recommended for beginners)**
1. Click the "Fork" button at the top right of this repository
2. This creates your own copy at `https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io`

**Option B: Clone this repository**
```bash
git clone https://github.com/byambaa1982/byambaa1982.github.io.git
cd byambaa1982.github.io
```

### Step 2: Rename Repository (If Using Fork)

If you forked the repository:
1. Go to your forked repository on GitHub
2. Click "Settings"
3. Rename the repository to `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your actual GitHub username)
4. This naming convention is required for GitHub Pages to work automatically

### Step 3: Customize the Configuration

Edit `_config.yml` to personalize your blog:

```yaml
title: Your Blog Title
description: Your blog description
author:
  name: Your Name
  bio: Your bio
  email: your-email@example.com
  github: your-github-username
  twitter: your-twitter-handle
```

### Step 4: Test Locally (Optional but Recommended)

**Install Jekyll:**
```bash
# On Windows (using PowerShell)
gem install jekyll bundler

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser to see your site.

### Step 5: Create Your First Blog Post

1. Create a new file in the `_posts` folder
2. Name it using the format: `YYYY-MM-DD-your-post-title.md`
3. Add front matter at the top:

```markdown
---
title: Your Post Title
tag: Category
---

Your content here...
```

### Step 6: Push Changes to GitHub

```bash
# Add all changes
git add .

# Commit with a message
git commit -m "Initial customization"

# Push to GitHub
git push origin main
```

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"

Your site will be live at `https://YOUR-USERNAME.github.io` within a few minutes!

## Customization Guide

### Change the Logo

1. Add your logo image to `assets/images/logo/`
2. Edit `_includes/header.html` to reference your logo
3. Supported formats: PNG, JPG, SVG

### Change the Theme

Edit `_config.yml`:
```yaml
text_skin: forest # Options: default, dark, forest, ocean, chocolate, orange
```

### Add a Custom Domain

1. Create a file named `CNAME` in the root directory
2. Add your domain (e.g., `www.yourdomain.com`)
3. Configure DNS settings with your domain provider
4. Point to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### Directory Structure

```
├── _config.yml          # Main configuration
├── _posts/             # Your blog posts (Markdown files)
├── _includes/          # Reusable components
├── _layouts/           # Page templates
├── _sass/              # Custom styles
├── assets/             # Images, CSS, JavaScript
│   └── images/
│       └── logo/       # Logo files
└── index.html          # Homepage
```

## Writing Blog Posts

Create a new file in `_posts/` folder:

```markdown
---
title: My Amazing Post
tag: Technology
---

Your content goes here. You can use **Markdown** formatting.

## Headers
### Subheaders

- Bullet points
- Are easy

1. Numbered lists
2. Work too

[Links](https://example.com) and `code snippets` are supported.
```

## Troubleshooting

**Site not updating?**
- Wait 2-3 minutes after pushing changes
- Check the "Actions" tab on GitHub for build errors
- Ensure your repository is public

**Jekyll build errors?**
- Check `_config.yml` for syntax errors
- Ensure all plugins are listed in the `plugins` section
- Review the build log in GitHub Actions

**Images not showing?**
- Use relative paths: `/assets/images/your-image.png`
- Ensure images are committed to the repository

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Jekyll Text Theme Docs](https://tianqi.name/jekyll-TeXt-theme/)

## Support

If you find this template helpful, give it a ⭐ on GitHub!

For issues or questions, open an issue on the repository.

## License

This project is open source and available under the MIT License.




