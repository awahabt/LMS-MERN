import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InstructorContext } from '@/context/instructor-context'
import { mediaUploadService } from '@/services'
import React, { useContext } from 'react'

const CourseSettings = () => {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

    async function handleImageUploadChange(event) {
      const selectedImage = event.target.files[0]

      if(selectedImage){
        const imageFormData = new FormData();
        imageFormData.append('file', selectedImage)

        try{
          const response = await mediaUploadService(imageFormData)
          
          console.log(response);
          

        }catch(error){
          console.log("Select Image error", error);
          
        }
      }
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-3'>
          <Label>Upload Course Image</Label>
          <Input
          onChange={handleImageUploadChange}
           type="file"
          accept="image/*"
          className="cursor-pointer"/>
        </div>
      </CardContent>
    </Card>
  )
}

export default CourseSettings
