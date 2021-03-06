import React from 'react';

class TaDaTask extends React.Component {

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }

    changeComplete = () => {
        this.props.changeCompleteFunc(this.props.id);
    }

    updateEmotion = (emotion) => {
        this.props.updateEmotionFunc(this.props.id, emotion);
    }

    emotionClass = (isActive) => {
        return isActive ? "btn btn-outline-info btn-sm active" : "btn btn-outline-info btn-sm"
    }

    render() {
        return (
            <div className="row">
                <div className="col-5">
                    <p className="strikethrough">{this.props.taDaTask}</p>
                </div>
                <div className="col-3">
                    <div className="btn-group" data-toggle="buttons" aria-label="Ta Da List Emoticon Buttons">

                    <button type="button" className={this.emotionClass(this.props.emotion === "smile")} onClick={() => this.updateEmotion("smile")} ><i className="fa fa-smile-o" aria-hidden="true"></i></button>

                    <button type="button" className={this.emotionClass(this.props.emotion === "meh")} onClick={() => this.updateEmotion("meh")} ><i className="fa fa-meh-o" aria-hidden="true"></i></button>

                    <button type="button" className={this.emotionClass(this.props.emotion === "frown")} onClick={() => this.updateEmotion("frown")} ><i className="fa fa-frown-o" aria-hidden="true"></i></button>

                    </div>
                </div>
                <div className="col-4">
                    <div className="btn-group" role="group" aria-label="Ta Da List Buttons">
                        <button type="button" className="btn btn-outline-info btn-sm" onClick={this.changeComplete} ><i className="fa fa-check" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-outline-info btn-sm" onClick={this.handleDelete}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaDaTask;