import MediaProgressBar from "@/components/media-progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructor-context";
import { mediaUploadService } from "@/services";
import React, { useContext } from "react";

const CourseSettings = () => {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediauploadProgressPercentage,
    setMediauploadProgressPercentage,
  } = useContext(InstructorContext);

  async function handleImageUploadChange(event) {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediauploadProgressPercentage
        );

        console.log(response);
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response.data.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (error) {
        console.log("Select Image error", error);
      }
    }
  }
  console.log(courseLandingFormData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <div className="px-5">
        {mediaUploadProgress ? (
          <MediaProgressBar
            isMediaUploading={mediaUploadProgress}
            progess={mediauploadProgressPercentage}
          />
        ) : null}
      </div>

      <CardContent>
        {courseLandingFormData?.image ? (
          <img src={courseLandingFormData.image} />
        ) : (
          <div className="flex flex-col gap-3">
            <Label>Upload Course Image</Label>
            <Input
              onChange={handleImageUploadChange}
              type="file"
              accept="image/*"
              className="cursor-pointer"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseSettings;
