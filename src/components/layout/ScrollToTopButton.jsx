import { scrollToTop } from "src/utils/scrollToTop"

export const ScrollToTopButton = () => {
    return (
        <div id="go_top">
            <button className="btn" title="Ir arriba" onClick={scrollToTop}><i className="bi bi-chevron-up"></i></button>
        </div>
    )
}