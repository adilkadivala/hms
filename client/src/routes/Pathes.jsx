import { Routes, Route } from "react-router-dom";
import Hello from "../pages/Hello";
import Course from "../pages/dashboard/pages/Course";
import Inquiry from "../pages/dashboard/pages/Inquiry";
import CourseCategory from "../pages/dashboard/pages/CourseCategory";
import Coupon from "../pages/dashboard/pages/Coupen";
import Notification from "../pages/dashboard/pages/Notification";
import Payment from "../pages/dashboard/pages/Payment";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/course" element={<Course />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/course-category" element={<CourseCategory />} />
      <Route path="coupon" element={<Coupon />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default Pathes;
