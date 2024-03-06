import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    radiusButton: {
        display: 'inline-block',
        padding: '15px 10px 15px',
        minWidth: '200px',
        borderRadius: '30px',
        textAlign: 'center',
        backgroundColor: '#FCD980',
        color: '#000',

        '&:hover': {
            backgroundColor: "#fdd05d"
        }
    }
})

export default function RadiusButton({ href, text }) {
    const classes = useStyles()
    return (
        <a className={classes.radiusButton} href={href}>{text}</a>
    );
}