import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json(
        { msg: "Nama produk harus disediakan" },
        { status: 400 }
      );
    }
    await connectMongoDB();
    const deletedProduct = await Product.findOneAndDelete({ name });

    if (!deletedProduct) {
      return NextResponse.json(
        { msg: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }
    return NextResponse.json({ msg: "Produk berhasil dihapus" });
  } catch (error) {
    return NextResponse.json(
      { error, msg: "Terjadi kesalahan saat menghapus produk" },
      { status: 500 }
    );
  }
}
