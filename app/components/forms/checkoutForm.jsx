import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getCountries } from "../../api";

// Validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup.string().required("Phone is required").matches(/^[0-9]+$/, "Phone must be a number").min(4),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
  landmark: yup.string().required("Landmark is required"),
  alternateNumber: yup.string().matches(/^[0-9]*$/, "Alternate Number must be a number")
});

const CheckOutForm = ({ onClose, onSubmit }) => {
    const [countries, setCountries] = useState([]);
  
    // Setup form with react-hook-form and yup resolver
    const { control, handleSubmit, formState: { errors }, trigger } = useForm({
      resolver: yupResolver(schema),
      mode: "onChange"
    });
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const data = await getCountries();
          const countryNames = data.map((country) => country.name.common).sort();
          setCountries(countryNames);
        } catch (err) {
          console.log(err);
        }
      };
      fetchCountries();
    }, []);
  
    // Handle form submission
    const onSubmitForm = (data) => {
      onSubmit(data);
      onClose();
    };

  return (
    <form className="text-[#767676] flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <p className="text-xs">First Name*</p>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <input 
              {...field} 
              placeholder="First Name" 
              className="w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg" 
              onChange={(e) => { field.onChange(e); trigger('firstName'); }} // Trigger validation
            />
          )}
        />
        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Last Name*</p>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <input 
              {...field} 
              placeholder="Last Name" 
              className="w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg" 
              onChange={(e) => { field.onChange(e); trigger('lastName'); }} // Trigger validation
            />
          )}
        />
        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Phone*</p>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input 
              {...field} 
              placeholder="Phone" 
              className="w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg" 
              onChange={(e) => { field.onChange(e); trigger('phone'); }} // Trigger validation
            />
          )}
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Country/Region*</p>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="w-full px-4 py-3  border-[#767676] border-[1px] rounded-lg"
              onChange={(e) => { field.onChange(e); trigger('country'); }} // Trigger validation
            >
              <option className="w-full" value="">Select a Country</option> 
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          )}
        />
        {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Address*</p>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <input 
              {...field} 
              placeholder="Address" 
              className="w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg" 
              onChange={(e) => { field.onChange(e); trigger('address'); }} // Trigger validation
            />
          )}
        />
        {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Landmark*</p>
        <Controller
          name="landmark"
          control={control}
          render={({ field }) => (
            <input 
              {...field} 
              placeholder="Landmark" 
              className="w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg" 
              onChange={(e) => { field.onChange(e); trigger('landmark'); }} // Trigger validation
            />
          )}
        />
        {errors.landmark && <p className="text-red-500 text-xs">{errors.landmark.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Alternate Number</p>
        <Controller
          name="alternateNumber"
          control={control}
          render={({ field }) => (
            <input 
              {...field} 
              placeholder="Alternate Number" 
              className="w-full px-4 py-3 border-[#767676] border-[1px] rounded-lg" 
              onChange={(e) => { field.onChange(e); trigger('alternateNumber'); }} // Trigger validation
            />
          )}
        />
        {errors.alternateNumber && <p className="text-red-500 text-xs">{errors.alternateNumber.message}</p>}
      </div>
      <div className="flex gap-4 items-center">
        <Controller
          name="default"
          control={control}
          render={({ field }) => (
            <input {...field} type="checkbox" className="w-4 h-4" />
          )}
        />
        <p className="text-black">Set as default</p>
      </div>
      <div className="flex justify-center p-4">
        <button type="submit" className="shop-btn-dark">Save & Continue</button>
      </div>
    </form>
  );
}

export default CheckOutForm;
