import React from "react";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            con: false,
            check: false,
        }
    }

    static getDerivedStateFromProps(props) {
        return {
            questions: props.questions
        }
    }

    next() {
        this.props.counter();
        this.setState({
            i: this.state.i + 1,
            con: false,
            remark: "",
            check: false
        })
    }

    ans(prop) {
        if (prop === "right") {
            this.props.ansCounter()
            this.setState({
                remark: "Right answer",
                con: true,
                check: true
            })
        }
        if (prop === "wrong") {
            this.setState({
                remark: "Wrong answer",
                con: true,
                check: true
            })
        }
        if (this.state.i === this.props.length - 1) {
            this.setState({
                con: false
            })
        }
    }

    render() {
        var style = {
            width: 180, height: 30, margin: 10
        }
        return (
            <div>
                {this.state.questions.question.replace(/[%20]/g, ' ')}
                <br />
                <br />
                <div style={{ width: 400, margin: "0 auto" }}>
                    <input
                        type="button"
                        value={this.state.questions.correct_answer.replace(/[%20]/g, ' ')}
                        onClick={() => this.ans("right")}
                        style={style}
                        disabled={this.state.check}
                    />
                    {this.state.questions.incorrect_answers.map((v, i) => {
                        return <div key={i} style={{ display: "inline-block" }}>
                            <input
                                type="button"
                                value={v.replace(/[%20]/g, ' ')}
                                style={style}
                                onClick={() => this.ans("wrong")}
                                disabled={this.state.check}
                            />
                        </div>
                    })}
                </div >
                <div style={{ width: 400, margin: "0 auto", textAlign: "center" }}>
                    <p>{this.state.remark}</p>
                    {this.state.con && <button style={style} onClick={() => this.next()}>Next question</button>}
                </div>
            </div>
        )
    }
}

export default Quiz;