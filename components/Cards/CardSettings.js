import React from "react";
import { Form, Formik } from "formik";
import { useGetUser } from "../../utils/queries";
import PageChange from "../PageChange/PageChange";
import { Button, Input } from "@mui/joy";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import api from "../../utils/axios";

export default function CardSettings() {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) {
    return <PageChange />;
  }

  return (
    <Formik
      initialValues={{
        ...user,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(true);
        try {
          const payload = {
            ...values,
            hireDate: new Date(values.hireDate).toJSON(),
            birthday: new Date(values.birthday).toJSON(),
          };
          await api.put("/user/edit-user", payload);
        } catch (e) {
          console.error(e);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, handleChange, isSubmitting, submitForm, setFieldValue }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  My account
                </h6>
                <Button
                  disabled={isSubmitting}
                  onClick={() => submitForm()}
                  variant="solid"
                >
                  Save changes
                </Button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <Form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <Input
                        name="name"
                        disabled={isSubmitting}
                        value={values.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Surname
                      </label>
                      <Input
                        name="surname"
                        disabled={isSubmitting}
                        value={values.surname}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Position
                      </label>
                      <Input
                        name="position"
                        disabled={isSubmitting}
                        value={values.position}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Birthday
                      </label>
                      <DesktopDatePicker
                        name="birthday"
                        sx={{
                          width: "100%",
                          background: "white",
                        }}
                        disabled={isSubmitting}
                        slotProps={{ textField: { size: "small" } }}
                        value={dayjs(values.birthday)}
                        onChange={(value, context) => {
                          setFieldValue("birthday", Date.parse(value));
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Hire date
                      </label>
                      <DesktopDatePicker
                        name="hireDate"
                        sx={{
                          width: "100%",
                          background: "white",
                        }}
                        disabled={isSubmitting}
                        slotProps={{ textField: { size: "small" } }}
                        value={dayjs(values.hireDate)}
                        onChange={(value, context) => {
                          setFieldValue("hireDate", Date.parse(value));
                        }}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone number
                      </label>
                      <Input
                        name="phone"
                        disabled={isSubmitting}
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        About me
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                        defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </LocalizationProvider>
      )}
    </Formik>
  );
}
