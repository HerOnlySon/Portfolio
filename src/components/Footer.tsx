import { siteConfig } from '../data/portfolio'

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-t border-emerald-200 py-6 text-sm text-emerald-700">
        <span>{siteConfig.name}</span>
        <span className="hidden text-center md:block">{siteConfig.role} Portfolio</span>
        <span>2026</span>
      </div>
    </footer>
  )
}
export default Footer
