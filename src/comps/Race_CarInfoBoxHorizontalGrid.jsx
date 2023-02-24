import '../css/Race_CarInfoBoxHorizontalGrid.css'
import cx from 'classnames';

export default function Race_CarInfoBoxHorizontalGrid(props) {
    const {img, car, manufacturer, display_variant_a, display_variant_b} = props;
    const variantClasses = cx({
        'display_variant_a':display_variant_a,
        'display_variant_b':display_variant_b
      });
    return(
        <>
            <div className={'race_carinfoboxhoriztonalgrid '+ variantClasses}>
                <div className='race_carinfoboxhoriztonalgrid-inner'>
                    <div className='car-img'>
                        <img src={img}/>
                    </div>
                    <div className='car-manufacturer'>
                        <p className='desc'>Manufacturer</p>
                        <p>{manufacturer}</p>
                    </div>
                    <div className='car-model'>
                        <p className='desc'>Model</p>
                        <p>{car}</p>
                    </div>
                </div>
            </div>
        </>
    )
}