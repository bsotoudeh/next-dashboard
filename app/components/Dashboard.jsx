import { useFetch } from "@/api/useFetch";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ColorBadge from "@/components/ColorBadge";

export default async function Dashboard() {
  const data = await useFetch('/objects');

  return (
    <div>
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <Link href="/add-product">
                <Button className="mb-6" variant="primary" size="md">
                    Add Product
                </Button>
            </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((obj) => (
            <Card key={obj.id} className="p-4 flex flex-col">
                <span className="text-lg font-semibold dark:text-gray-50">{obj.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-100 pt-4">
                    <span className="font-bold text-gray-900 dark:text-gray-50 dark:text-gray-50">Color: </span>
                         <ColorBadge color={obj.data?.color ?? 'N/A'} />
                    </span>
                <span className="text-sm text-gray-500 dark:text-gray-100 pt-4">
                    <span className="font-bold text-gray-900 dark:text-gray-50">Capacity: </span>
                    {obj.data?.capacity ?? 'N/A'}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-100 pt-4">
                    <span className="font-bold text-gray-900 dark:text-gray-50">Description: </span>
                        {obj.data?.description ?? 'N/A'}
                    </span>
                <span className="text-sm text-gray-500 dark:text-gray-100 pt-4">
                    <span className="font-bold text-gray-900 dark:text-gray-50">Generation: </span>
                        {obj.data?.Generation ?? 'N/A'}
                    </span>
                <span className="text-sm text-gray-500 dark:text-gray-100 pt-4">
                    <span className="font-bold text-gray-900 dark:text-gray-50">Price: </span>
                    {obj.data?.price
                        ? obj.data.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                        : 'N/A'}
                    </span>
            </Card>
            ))}
        </div>
    </div>
  );
}