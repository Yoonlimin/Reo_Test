import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyEmailSent() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || localStorage.getItem("pendingEmail") || "";
  const [isVerified, setIsVerified] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


  useEffect(() => {
    if (!email) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API_URL}/api/check-verification?email=${email}`);
        const text = await res.text(); // get raw response
        try {
          const data = JSON.parse(text); // try parsing
          
          if (data.isverified) {
            setIsVerified(true);
            clearInterval(interval);
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          }
        } catch (jsonErr) {
          console.error("Invalid JSON response:", text); // helpful for debugging
        }
      } catch (err) {
        console.error("Polling error:", err);
      }
    }, 5000);


    return () => clearInterval(interval);
  }, [email, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F3F9FE] to-[#C5DBEC] px-4 font-inter">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Please Verify Your Email</h1>
        <p className="text-md text-black mb-4">
          A verification link has been sent to <span className="font-semibold">{email}</span>.
        </p>
        
        {/* 🛠️ ADDED SPAM WARNING HERE */}
        <p className="text-sm text-red-600 font-medium mb-4 p-2 bg-red-50 border border-red-200 rounded-lg">
            ⚠️ If the email is not in your inbox, please check your 
            <span className="font-bold"> SPAM or Junk folder</span>.
        </p>
        {/* 🛠️ END SPAM WARNING */}
        
        <p className="text-sm text-gray-700">
          Please click the link in your email to verify your account.
        </p>
        {isVerified && (
          <p className="mt-4 text-sm text-green-600 font-semibold">
            ✅ Email verified! Redirecting to login...
          </p>
        )}
      </div>
    </div>
  );
}
