import './PresentationIntro.less'

export const PresentationIntroPage: React.FC<{
    requestedFields: string[]
    onProceed: () => void
}> = ({ requestedFields, onProceed }) => {
    return (
        <div className="presentation-intro">
            <p>
                The following company requests access to the following
                information
            </p>

            <div className="presentation-intro--requestor">
                <div className="presentation-intro--requestor__details">
                    <strong>Requestor</strong>
                    <p>Fancy Restaurant</p>
                </div>
            </div>

            <div className="presentation-intro--info">
                <h3>Information requested</h3>
                <div className="presentation-intro--info__list">
                    <ul>
                        {requestedFields
                            .slice(0, requestedFields.length / 2)
                            .map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </ul>
                    <ul>
                        {requestedFields
                            .slice(requestedFields.length / 2)
                            .map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </ul>
                </div>
            </div>

            <div className="presentation-intro--proceed">
                <p className="presentation-intro--proceed--text">
                    Please proceed, if you want to grant access to the requested
                    information
                </p>

                <div className="presentation-intro--proceed--buttons">
                    <button className="presentation-intro--proceed--buttons--reject">
                        Reject
                    </button>
                    <button
                        className="presentation-intro--proceed--buttons--proceed"
                        onClick={onProceed}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
}
