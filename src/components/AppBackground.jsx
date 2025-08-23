export default function AppBackground() {
    return (
        <div style={{ position: 'sticky', width: '100%', height: '0', top: '0', left: '0', zIndex: '-2' }}>
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '110dvh',
                    background: 'linear-gradient(to bottom, var(--bgTopColor), var(--bgBottomColor))',
                }}
            ></div>
        </div>
    );
}
