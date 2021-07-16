import React from "react";
import useFetchTable from "../hooks/useFetchTable";
import MenuCard from "./MenuCard";

export default function CategoryCard({ category, branchMenus }) {
  const [menus, menuStatus] = useFetchTable("allMenu", {});

  if (menuStatus === "success") {
    const filteredMenus = menus.filter((menu) => {
      let isBranchMenu = false;
      branchMenus.forEach((branchMenu) => {
        if (menu.name === branchMenu.displayField) isBranchMenu = true;
      });
      return isBranchMenu;
    });

    const filteredCategoryMenus = filteredMenus.filter((menu) => {
      return menu.category.displayField === category.name;
    });

    console.log(branchMenus, "branchMenus");
    console.log(filteredMenus, "filteredMenus", category.name);
    console.log(filteredCategoryMenus, "filteredCategoryMenus", category.name);

    return (
      <div className="col-12 border p-3 g-3">
        <div className="row mb-3">
          <div className="col-12">
            <h3>{category.name}</h3>
          </div>
        </div>
        <div className="row">
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
