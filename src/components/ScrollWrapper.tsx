//// ScrollWrapper.tsx - wrapper component to provide child components a Y-scrollable container

const ScrollWrapper = (props: React.PropsWithChildren) => {
    const wrapperStyle: React.CSSProperties = {
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '800px',
        height: '600px',
        border: '1px solid dimgrey',
        padding: '15px',
    }

    return (
        <div style={wrapperStyle}>
            {props.children}
        </div>
    )
}

export default ScrollWrapper;