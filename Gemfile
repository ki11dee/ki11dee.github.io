source "https://rubygems.org"

ruby "3.2.2"  # or 3.3.0

gem "jekyll", "~> 4.3.2"
gem "webrick", "~> 1.7"  # need Ruby 3+

# Optional: theme
gem "jekyll-theme-minimal", "~> 0.2.0"

# Plugins
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end