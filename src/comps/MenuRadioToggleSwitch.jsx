import '../css/MenuRadioToggleSwitch.css'

export default function MenuRadioToggleSwitch(props) {
    return(
        <>
            <label className="switch">
                    <input type="checkbox" className="radio-switch"></input>
                    <span className="slider round"></span>
                </label>
        </>
    )
}