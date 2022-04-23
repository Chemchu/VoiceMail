const LogoHeader = () => {
    return (
        <div className="flex gap-4 items-end">
            <div>
                <span style={{ color: "#3e65cf" }}>V</span>
                <span style={{ color: "#c71610" }}>o</span>
                <span style={{ color: "#f2a60c" }}>i</span>
                <span style={{ color: "#08851b" }}>c</span>
                <span style={{ color: "#3e65cf" }}>e</span>
                <span>M</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
            </div>
            <div style={{ color: "#3e65cf" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    );
}

export default LogoHeader;