import './QR.css';
import image from '../../images/image-qr-code.png'

const QR = () => {
    return (
        <div className='qr'>
            <img src={image} alt='qr code' />
            <h1>
            Improve your front-end skills by building projects
            </h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default QR;