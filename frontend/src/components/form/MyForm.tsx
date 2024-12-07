import "./style.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { InputData } from "../../types";

const validationSchema = Yup.object().shape({
  mileage: Yup.number()
    .min(0, "Mileage Invalid. Enter values between 0-3000")
    .max(200000, "Mileage Invalid. Enter values between 0-3000")
    .required("Mileage is required"),
  Horse_power: Yup.number()
    .min(0, "Horsepower Invalid. Enter values between 5-3000")
    .max(2000, "Horsepower Invalid. Enter values between 5-3000")
    .required("Horse Power is required"),
  Year: Yup.number()
    .required("Year is required")
    .min(1950, "Year Invalid.Value must be greater than 1950")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  Fuel_Type: Yup.string().required("Fuel Type is required"),
  offerType: Yup.string().required("Offer Type is required"),
  Transmission: Yup.string().required("Transmission is required"),
});

const initialValues: InputData = {
  mileage: "",
  Horse_power: "",
  Year: "",
  Fuel_Type: "Diesel",
  offerType: "Used",
  Transmission: "Manual",
};

interface MyFormProps {
  onSubmit: (values: InputData) => void;
  prediction: number | null;
}

const MyForm: React.FC<MyFormProps> = ({ onSubmit, prediction }) => (
  <div className="form-container">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <div>
            <label>Mileage</label>
            <Field name="mileage" type="number" value={values.mileage} />
            {errors.mileage && touched.mileage && (
              <div className="error">{errors.mileage}</div>
            )}
          </div>

          <div>
            <label>Horse Power</label>
            <Field
              name="Horse_power"
              type="number"
              value={values.Horse_power}
            />
            {errors.Horse_power && touched.Horse_power && (
              <div className="error">{errors.Horse_power}</div>
            )}
          </div>

          <div>
            <label>Year</label>
            <Field name="Year" type="number" value={values.Year} />
            {errors.Year && touched.Year && (
              <div className="error">{errors.Year}</div>
            )}
          </div>

          <div>
            <label>Fuel Type</label>
            <Field as="select" name="Fuel_Type">
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Electric/Diesel">Electric/Diesel</option>
              <option value="Electric/Gasoline">Electric/Gasoline</option>
              <option value="Gasoline">Gasoline</option>
              <option value="LPG">LPG</option>
            </Field>
            {errors.Fuel_Type && touched.Fuel_Type && (
              <div className="error">{errors.Fuel_Type}</div>
            )}
          </div>

          <div>
            <label>Offer Type</label>
            <Field as="select" name="offerType">
              <option value="Used">Used</option>
              <option value="Pre_registered">Pre-registered</option>
              <option value="Employee_car">Employee car</option>
            </Field>
            {errors.offerType && touched.offerType && (
              <div className="error">{errors.offerType}</div>
            )}
          </div>

          <div>
            <label>Transmission</label>
            <Field as="select" name="Transmission">
              <option value="Manual">Manual</option>
              <option value="Semi_Automatic">Semi-Automatic</option>
            </Field>
            {errors.Transmission && touched.Transmission && (
              <div className="error">{errors.Transmission}</div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Predicting..." : "Predict"}
          </button>
        </Form>
      )}
    </Formik>

    {prediction !== null && (
      <div className="result">
        <h4>
          Value: <span>€{prediction}</span>
        </h4>
      </div>
    )}
  </div>
);

export default MyForm;
