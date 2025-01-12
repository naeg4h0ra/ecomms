import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    // Ambil nama produk dari body request
    const { name } = await request.json();

    // Validasi jika nama tidak diberikan
    if (!name) {
      return NextResponse.json(
        { msg: "Nama produk harus disediakan" },
        { status: 400 }
      );
    }

    // Koneksi ke database
    await connectMongoDB();

    // Cari dan hapus produk berdasarkan nama
    const deletedProduct = await Product.findOneAndDelete({ name });

    // Jika produk tidak ditemukan
    if (!deletedProduct) {
      return NextResponse.json(
        { msg: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }

    // Respon sukses
    return NextResponse.json({ msg: "Produk berhasil dihapus" });
  } catch (error) {
    return NextResponse.json(
      { error, msg: "Terjadi kesalahan saat menghapus produk" },
      { status: 500 }
    );
  }
}
