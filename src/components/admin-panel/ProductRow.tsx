import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IProduct } from "@/app/admin/dashboard/page";
import { useAppDispatch } from "@/redux/hooks";
import { setProduct } from "@/redux/features/productSlice";
import axios from "axios";
import { setLoading } from "@/redux/features/loadingSlice";
import { makeToast } from "@/utils/helper";

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsType) => {
  const dispatch = useAppDispatch();

  // Fungsi untuk mengedit produk
  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  // Fungsi untuk menghapus produk berdasarkan nama
  const onDelete = () => {
    dispatch(setLoading(true));

    const payload = {
      name: product.name, // Menggunakan nama produk untuk penghapusan
    };

    axios
      .delete("/api/delete_product", { data: payload }) // Kirimkan payload ke API
      .then((res) => {
        console.log(res);
        makeToast("Produk berhasil dihapus!");
        setUpdateTable((prevState) => !prevState); // Memperbarui tabel setelah penghapusan
      })
      .catch((err) => {
        console.error(err);
        makeToast("Terjadi kesalahan saat menghapus produk!", "error");
      })
      .finally(() => dispatch(setLoading(false))); // Menghentikan loading
  };

  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>{product.price}</td>
      <td className="py-2">
        <Image
          src={product.imgSrc}
          width={40}
          height={40}
          alt="Product_image"
        />
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={onEdit} // Trigger edit handler
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete} // Trigger delete handler
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
