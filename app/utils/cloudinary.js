export const uploadToCloudinary = async (formData) => {
  const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/df3lre5rc/image/upload"; // Replace with your Cloudinary URL
  const response = await fetch(cloudinaryUrl, {
    method: "POST",
    body: formData,
  });

  console.log("Response Status:", response.status);
  console.log("Response Headers:", response.headers);

  if (response.status < 200 || response.status >= 300) {
    throw new Error("Failed to upload image");
  }

  return response.json();
};
