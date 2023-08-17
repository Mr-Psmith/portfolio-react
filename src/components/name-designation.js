function NameDesignation () {

    let hoverHandler;

    return (
        <>
            <div onMouseOver={hoverHandler}>
                {!hoverHandler ? <h4>P. Sancthus</h4> : <h4>Pal Mihaly Szenthe</h4> }
                <h5>Web-developer, designer, writer, thinker</h5>
            </div>
        </>
    );
};

export default NameDesignation;
