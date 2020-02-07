import React from "react";
import BeautyStars from 'beauty-stars';

class Star extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    static getDerivedStateFromProps(props) {
        if (props.question.difficulty === "hard") {
            return {
                difficulty: 3
            }
        }
        else if (props.question.difficulty === "medium") {
            return {
                difficulty: 2
            }
        }
        else
            return {
                difficulty: 1
            }
    }

    render() {
        return (
            <div>
                <BeautyStars
                    value={this.state.difficulty}
                    maxStars={3}
                    size={18}
                />
            </div>
        )
    }
}

export default Star;