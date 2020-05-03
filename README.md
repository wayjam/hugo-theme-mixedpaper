# Mixedpaper for Hugo

Mixedpaper is a minimalist Hugo theme for writers and bloggers.

## Feature

- Clean and minimalist
- SCSS styling
- JavaScript free
- Syntax highlighting

## Installation

Navigate to the root directory of your Hugo site and clone this repository.

Refer to the [Hugo docs](https://gohugo.io/getting-started/quick-start/) for more information.

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
[params.comment]
type = "disqus" # or valine
[params.comment.valine]
appid = "appid"
appkey = "appkey"
notify = "notify"
verify = "verify"
placeholder = "enjoy~"
avatar = "mm"
meta = "nick,mail"
pageSize = 10.0
visitor = false
```

#### More

Refer to `exampleSite/config.toml` for more example.

## License

Released under the [MIT License](https://github.com/wayjam/hugo-theme-mixedpaper/blob/master/LICENSE.md).
