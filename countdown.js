var React = require('react');
var TimerMixin = require('react-timer-mixin');

module.exports = React.createClass({

    displayName: 'react-tick-tock',

    mixins: [TimerMixin],

    propTypes: {
        automaticRestart: React.PropTypes.bool,
        duration:         React.PropTypes.number.isRequired,
        interval:         React.PropTypes.number,
        onFinish:         React.PropTypes.func,
        onTick:           React.PropTypes.func,
        pause:            React.PropTypes.bool,
        renderTag:        React.PropTypes.required,
        stop:             React.PropTypes.bool

    },

    getDefaultProps: function () {
        return {
            automaticRestart: true,
            onFinish:         function () {},
            onTick:           function (timeRemaining) {},
            pause:            false,
            stop:             false,
            interval:         1000
        };
    },

    render: function () {
        return (
            <this.props.renderTag>
                {this.state.clock}
            </this.props.renderTag>
        );
    },

    getInitialState: function () {
        return {
            "clock": this.props.duration
        }
    },

    componentDidMount: function () {
        this.interval = this.setInterval(
            () => {
                this._tick()
            },
            this.props.interval
        );
    },

    _timesUp: function () {
        this.props.onFinish();

        if (this.props.automaticRestart) {
            this._resetClock();
        }
    },

    _resetClock: function () {
        this.setState({
            "clock": this.props.duration
        });
    },


    _tick: function () {

        if (this.props.pause) {
            return;
        }

        if (this.props.stop) {
            this._resetClock();
            return;
        }

        // take a second off the clock
        var time = this.state.clock - 1;

        // if the time is out, call the callback
        if (time <= 0) {
            this._timesUp();

            return;
        }

        this.props.onTick(time);

        //else update the clock time
        this.setState({
            "clock": time
        })

    }
});
