import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ABCNav() {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='light'
			variant='light'
			className='fixed-top p-3'
		>
			<Navbar.Brand href='/'>ABC Library</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse
				id='responsive-navbar-nav'
				className='justify-content-center'
			>
				<Nav className='mr-auto'>
					<NavDropdown title='Category' id='collasible-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>
							Computer Science
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>
							Management Information System
						</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>
							International Relation
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='#action/3.4'>All</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href='#'>Login</Nav.Link>
					<Nav.Link href='#'>Register</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default ABCNav;
