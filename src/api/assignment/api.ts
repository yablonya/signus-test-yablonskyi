import { AssignmentFormData } from "@/api/assignment/dto";
import { API_URL } from "@/constants/global";
import { ErrorResponse } from "@/types/api";
import { CandidateLevelsData } from "@/types/assignment";

const URL_SUFFIX = "candidates";

export const submitAssignment = async (assignment: AssignmentFormData) => {
  try {
    const response = await fetch(`${API_URL}/${URL_SUFFIX}/assignments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: assignment.name,
        email: assignment.email,
        assignment_description: assignment.description,
        github_repo_url: assignment.githubUrl,
        candidate_level: assignment.level
      }),
    });

    if (!response.ok) {
      const error: ErrorResponse = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
};

export const getCandidateLevels = async () => {
  try {
    const response = await fetch(`${API_URL}/${URL_SUFFIX}/levels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error: ErrorResponse = await response.json();
      throw new Error(error.message);
    }

    return ((await response.json()) as CandidateLevelsData).levels;
  } catch (error) {
    throw error;
  }
};