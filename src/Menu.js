import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	NavbarCollapse,
} from "react-bootstrap";

export default function Menu() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">rBts</Navbar.Brand>
				<Navbar.Collapse>
					<Nav>
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>Profile</Nav.Link>
						<NavDropdown title="Courses">
							<NavDropdown.Item>Front-End</NavDropdown.Item>
							<NavDropdown.Item>Back-End</NavDropdown.Item>
							<NavDropdown.Item>CEO</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
