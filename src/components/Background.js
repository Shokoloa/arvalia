function Background() {
    return (
        <div className="bg" id="bg">
            <img src="https://i.ibb.co/dkbXSPR/background.png" draggable={false} alt="" />
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </div>
    );
}

export default Background;