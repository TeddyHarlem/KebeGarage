import React from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import CustomersList from "../../components/Admin/CustomerList/CustomersList";
import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";

function Customers() {
	const { isLogged, isAdmin, isManager } = useAuth();
//github.com/aershov24/full-stack-interview-questions
https: if (isLogged) {
	console.log("Test22");
	if (isAdmin || isManager) {
		return (
			<div>
				<div className="container-fluid admin-pages">
					<div className="row">
						<div className="col-md-3 admin-left-side">
							<AdminMenu />
						</div>
						<div className="col-md-9 admin-right-side">
							<CustomersList />
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<h1>You are not authorized to access this page</h1>
			</div>
		);
	}
} else {
	return (
		<div>
			<LoginForm />
		</div>
	);
}
}

export default Customers;

// import React from "react";
// import { useAuth } from "../../../Contexts/AuthContext";

// import LoginForm from "../../components/LoginForm/LoginForm";
// import CustomersList from "../../components/Admin/CustomerList/CustomersList";
// import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
// import { Container, Row, Col } from "react-bootstrap";

// function Customers() {
// 	const { isLogged, isAdmin, isManager } = useAuth();

// 	return (
// 		<Container fluid>
// 			<Row>
// 				<Col xs={12} md={3} lg={3}>
// 					<div className="container-fluid admin-pages">
// 						<div className="admin-left-side">
// 							{isLogged && (isAdmin || isManager) && <AdminMenu />}
// 						</div>
// 					</div>
// 				</Col>
// 				<Col xs={12} md={9} lg={9}>
// 					{isLogged ? (
// 						<>
// 							{isAdmin || isManager ? (
// 								<div className="admin-right-side">
// 									<CustomersList />
// 								</div>
// 							) : (
// 								<h1>You are not authorized to access this page</h1>
// 							)}
// 						</>
// 					) : (
// 						<LoginForm />
// 					)}
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// }

// export default Customers;
