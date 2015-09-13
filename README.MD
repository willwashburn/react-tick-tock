# react-tick-tock

> Simple [React](http://facebook.github.io/react/index.html) component for a countdown timer

```bash
npm install react-tick-tock --save
```

## Example
```javascript
var Timer = require('react-tick-tock');

var RenderTag = React.createClass({
    render: function () {
        return (
            <Div>
                {this.props.children}
            </Div>
        )
    }
})

var App = React.createClass({

    render: function () {
        return (
                <Timer
                    duration={30}
                    renderTag={RenderTag}
                />
        );
    }
});


```

## Changelog

### 0.0.1
- Simple countdown timer

## Contributors

* Will Washburn (@willwashburn)
