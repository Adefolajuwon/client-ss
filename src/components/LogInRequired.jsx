import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const LogInRequired = ({ element }) => {
	const { loading, userData } = useAuthContext();
	return (
		<>
			{!loading && userData?._id && <>{element}</>}
			{!loading && !userData?._id && <Navigate to="/login"></Navigate>}
			{loading && (
				<div className="w-full h-[100vh] bg-white text-2xl  flex items-center justify-center">
					<p>Loading...</p>
				</div>
			)}
		</>
	);
};

export default LogInRequired;
