import AssignmentForm from "./components/assignment-form"

const AssignmentPage = () => {
  return (
    <div className="min-h-screen flex-1 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <AssignmentForm/>
      </div>
    </div>
  )
}

export default AssignmentPage;
