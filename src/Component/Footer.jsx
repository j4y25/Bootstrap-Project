export default function Footer() {
    return(
        <>
         <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <h5>Legal Associates</h5>

          <p className="text-white-50 mb-2">
            Legal advice and professional support.
          </p>

          <small className="text-white-50">
            © {new Date().getFullYear()} Legal Associates. All rights reserved.
          </small>
        </div>
      </footer>
        </>
    )
}