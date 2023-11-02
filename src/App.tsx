import employees from "./data/employees.json";
import dayjs from "dayjs";

function App() {
	const title = "Employee Directory";
	const introText =
		"Welcome to our Employee Directory, your one-stop destination for discovering and connecting with the talented individuals who make our organization thrive.";
	return (
		<>
			<h1 className="text-3xl mb-3">{title}</h1>
			<p>{introText}</p>
			<hr />
			<div>
				{employees.map((employee) => {
					return (
						<div>
							{employees.map((employee) => {
								return (
									<div className="bg-slate-800 mt-3 text-slate-200 p-3 rounded">
										<div className="flex gap-3">
											<img
												className="w-28 rounded"
												src={`images/employees/employee_${employee.employeeID}.jpg`}
											/>
											<div>
												<p>
													{employee.firstName}{" "}
													{employee.lastName}
												</p>
												<p className="text-yellow-200">
													{employee.title}
												</p>
												<p className="text-red-500">
													{employee.address.phone}
												</p>
												<p className="text-red-500">
													{dayjs(
														employee.birthDate
													).format("MMM DD, YYYY")}
												</p>
											</div>
										</div>
										<div className="mt-2 italic text-slate-400">
											{employee.notes}
										</div>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
