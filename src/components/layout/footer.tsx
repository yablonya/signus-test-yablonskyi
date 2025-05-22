const Footer = () => {
  return (
    <footer className="w-full p-4 border-t border-gray-200 text-center text-sm text-gray-500 absolute bottom-0">
      <div className="max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Signus.ai</p>
      </div>
    </footer>
  )
}

export default Footer;