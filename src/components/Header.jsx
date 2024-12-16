import { Link } from "react-router-dom"

function Header() {
	return (
		<>
			<header>
				<h1 title="Go to the home page">
					<Link to="/" id="index_link">Characters</Link>
				</h1>
			</header>
			<hr className="header_hr" />
		</>
	) 
}

export default Header