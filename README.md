# Mixedpaper for Hugo

Mixedpaper is a minimalist Hugo theme for writers and bloggers.

You can find screenshot at `images/` or a demo on <https://themes.gohugo.io/hugo-theme-mixedpaper/>.

## Feature

- Clean and minimalist
- SCSS styling
- Syntax highlighting
- Styled Archives
- Minimal vanilla js

## Installation

Navigate to the root directory of your Hugo site and clone this repository.

```
git submodule add https://github.com/wayjam/hugo-theme-mixedpaper.git themes/mixedpaper
```

Then, add the theme to the site configuration(`config.toml`).

Refer to the [Hugo docs](https://gohugo.io/getting-started/quick-start/) for more information.

## Upgrade

```
git submodule update --remote --merge
```

## Configuration

#### Hightlight

To enable theme-defined highlighting style, please set `pygmentsUseClasses = true` in `config.toml`

#### Archives

```toml
[[menu.main]]
	name = "Archives"
	identifier = "archives"
	url = "/archives/"
```

#### Comments

Supported Disqus and Valine now.

```toml
disqusShortname = ""
```

OR

```toml
[params.comment]
appid = "your-appid"
appkey = "your-appkey"
placeholder = "enjoy~"
avatar = "mm"
pageSize = 10.0
visitor = false
recordIP = true
highlight = true
meta = "nick,mail"
requiredFields = "nick,mail"
```

#### More

Refer to `exampleSite/config.toml` for more example.

## License

Released under the [MIT License](https://github.com/wayjam/hugo-theme-mixedpaper/blob/master/LICENSE).
