import { Button } from "@/components/ui/button";
import { ListOrderedIcon, PackageIcon, PackageSearchIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex h-full w-[240px] flex-col items-center gap-10 border-r border-solid border-r-accent bg-background px-8 py-10">
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <div className="flex w-full flex-col gap-3">
        <Button variant="outline" className="flex w-full justify-start gap-2">
          <PackageIcon size={16} />
          Produtos
        </Button>

        <Button variant="outline" className="flex w-full justify-start gap-2">
          <ListOrderedIcon size={16} />
          Categorias
        </Button>

        <Button variant="outline" className="flex w-full justify-start gap-2">
          <PackageSearchIcon size={16} />
          Pedidos
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;