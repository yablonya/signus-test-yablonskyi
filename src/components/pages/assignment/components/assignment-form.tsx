"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { assignmentFormSchema, AssignmentFormData } from "@/api/assignment/dto";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitAssignment } from "@/api/assignment/api";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants/navigation";
import useLevelsQuery from "@/hooks/use-levels-query";
import CandidateLevelsSelect from "@/components/pages/assignment/components/candidate-levels-select";

const AssignmentForm = () => {
  const { replace } = useRouter();
  const { levels } = useLevelsQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<AssignmentFormData>({
    resolver: zodResolver(assignmentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
      githubUrl: "",
      level: undefined,
    },
  })

  const onSubmit = async (data: AssignmentFormData) => {
    try {
      await submitAssignment(data);
      alert("Assignment submitted successfully!");
      const params = new URLSearchParams()
      params.append("name", data.name)
      replace (`${Routes.ThankYou}?${params.toString()}`);
    } catch (e) {
      if (e instanceof Error) alert(`Error occurred: ${e.message}`);
      console.error(e);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg mb-[70px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">Assignment Submission</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Name"
          placeholder="Enter your name"
          error={errors.name?.message}
          required
          {...register("name")}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          required
          {...register("email")}
        />

        <Textarea
          label="Assignment Description"
          placeholder="Enter assignment description"
          error={errors.description?.message}
          required
          {...register("description")}
        />

        <Input
          label="GitHub Repository URL"
          placeholder="Enter your assignment repository URL"
          error={errors.githubUrl?.message}
          required
          {...register("githubUrl")}
        />

        <CandidateLevelsSelect
          setValue={setValue}
          levels={levels}
          errors={errors}
        />

        <Button type="submit" className="w-full mt-4">
          Submit Assignment
        </Button>
      </form>
    </div>
  )
}

export default AssignmentForm;
