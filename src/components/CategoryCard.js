import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import MenuCard from "./MenuCard";

export default function CategoryCard({ category, branchMenus }) {
  const [menus, menuStatus] = useFetchTable("allMenu", {});

  if (menuStatus === "success") {
    const filteredMenus = menus.filter((menu) => {
      let isBranchMenu = false;
      branchMenus.forEach((branchMenu) => {
        if (menu.name === branchMenu.name) isBranchMenu = true;
      });
      return isBranchMenu;
    });

    const filteredCategoryMenus = filteredMenus.filter((menu) => {
      return menu.category.displayField === category.name;
    });

    return (
      <div className="col-12 border p-3">
        <div className="row mb-3">
          <div className="col-12">
            <h3>{category.name}</h3>
          </div>
        </div>
        <div className="row g-3">
          {filteredCategoryMenus.length ? (
            filteredCategoryMenus.map((menu) => {
              return <MenuCard key={menu.id} menu={menu} />;
            })
          ) : (
            <div className="col-12">NO MENU YET</div>
          )}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}
