"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import usePost from "@/api/usePost";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Toast from "@/components/Toast";

export default function AddProductPage() {
  const { postData, loading, error, data } = usePost(
    "/objects"
  );

  const [toastMessage, setToastMessage] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const payload = {
        name: formData.name,
        data: {
            year: Number(formData.year),
            price: Number(formData.price),
            "CPU model": formData.cpu,
            "Hard disk size": formData.disk,
            color: formData.color,
        },
    };

    const result = await postData(payload);

    if (result) {
        setToastMessage('Product created successfully!');
        reset();
        router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">Add Product</h1>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Product Name"
          {...register("name", { required: "Product name is required" })}
          error={errors.name?.message}
        />
        <Input
          label="Year"
          {...register("year", {
            required: "Year is required",
            min: { value: 1970, message: "Year must be >= 1970" },
          })}
          error={errors.year?.message}
        />
        <Input
          label="Price"
          {...register("price", {
            required: "Price is required",
            min: { value: 0, message: "Price must be positive" },
          })}
          error={errors.price?.message}
        />
       <Input
            label="CPU Model"
            {...register("cpu")}
            error={errors.cpu?.message}
        />

        <Input
            label="Hard Disk Size"
            {...register("disk")}
            error={errors.disk?.message}
        />
        <Input
          label="Color"
          {...register("color", { required: "Color is required" })}
          error={errors.color?.message}
        />

        <Button type="submit" variant="primary" size="md" disabled={loading}>
          {loading ? "Saving..." : "Add Product"}
        </Button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {data && (
        <div className="mt-4 p-4 border rounded bg-green-100 text-green-800">
          Product created successfully! <br />
          ID: {data.id}
        </div>
      )}
      {toastMessage && (
        <Toast message={toastMessage} type="success" onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
