//// ScrollWrapper.tsx - wrapper component to provide child components a Y-scrollable container

const ScrollWrapper = (props: React.PropsWithChildren) => {
    return (
        <div className='scrollWrapper'>
            {props.children}
        </div>
    )
}

export default ScrollWrapper;