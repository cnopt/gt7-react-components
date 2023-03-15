import '../css/MenuDropdownSwitch.css';

export default function MenuDropdownSwitch(props) {
    return(
        <>
            <select className='menuitem-dropdown'>
                <option value='A' className='menuitem-dropdown-option'>A</option>
                <option value='B' className='menuitem-dropdown-option'>B</option>
                <option value='C' className='menuitem-dropdown-option'>C</option>
            </select>
        </>
    )
}