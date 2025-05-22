import * as React from "react";
import { UseFormSetValue, FieldErrors } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CandidateLevel } from "@/types/assignment";
import { AssignmentFormData } from "@/api/assignment/dto";

interface CandidateLevelsSelectProps {
  setValue: UseFormSetValue<AssignmentFormData>;
  levels: string[];
  errors: FieldErrors<AssignmentFormData>;
}

const CandidateLevelsSelect = ({ setValue, levels, errors }: CandidateLevelsSelectProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Label htmlFor="accountType">Candidate level <span className="text-primary">*</span></Label>
        <Select
          onValueChange={(value: CandidateLevel) =>
            setValue("level", value)
          }
        >
          <SelectTrigger id="accountType" className="w-1/2 overflow-hidden text-ellipsis">
            <SelectValue placeholder="Select a candidate level"/>
          </SelectTrigger>
          <SelectContent>
            {levels.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {errors.level && (
        <p className="text-sm text-destructive">
          {errors.level.message}
        </p>
      )}
    </div>
  )
}

export default CandidateLevelsSelect;
