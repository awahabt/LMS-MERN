import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signUpFormControls, signInFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";

import { GraduationCapIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const index = () => {
  const [activeTab, setActiveTab] = useState("signin");

  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
  } = useContext(AuthContext);

  function handleTabChange(value) {
    setActiveTab(value);
  }
  function checkIfSignInFormValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }
  function checkIfSignUpFormValid() {
    return (
      signUpFormData &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  console.log(signInFormData);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCapIcon className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS Learn</span>
        </Link>
      </header>
      <div className="flex justify-center min-h-screen bg-background mt-[10%]">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 h-11">
            <TabsTrigger value="signin" className="py-2">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="py-2">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormValid()}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign Up"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default index;
