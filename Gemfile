source "https://rubygems.org"

# GitHub Pages builds this site with the github-pages gem, which pins Jekyll
# and the whitelisted plugins used below. Keeping it here makes local builds
# match production exactly.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows / JRuby timezone data + faster file watching
gem "tzinfo-data", platforms: [:windows, :jruby]
gem "wdm", "~> 0.2", platforms: [:windows]
