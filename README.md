# README

## Button component

Attributes include

- label
- href
- newTab
- type
  - default
  - color
  - outline
  - plain
- icon (should be an svg file inside the `_includes` folder)
- animatingIcon

### Alpine JS attributes

Add Alpine JS interactivity within the `attrs` object. Nested double quotes are okay.

```
    button(
        type="outline",
        icon="assets/clipboard.svg",
        animatingIcon="assets/check.svg",
        attrs={
            "x-data": {
                isAnimating: false,
                setAnimating() {
                    this.isAnimating=true;
                    setTimeout(() => {
                        this.isAnimating=false;
                    }, 1500);
                }
            },
            "@click": "setAnimating()"
        }
    )

```
