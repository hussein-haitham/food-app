import MenuItem from "./MenuItem";

function MenuList({ activeTab, menuList }) {
  menuList = menuList.map(
    (item) =>
      activeTab === item.category && <MenuItem key={item.id} item={item} />
  );
  return <ul className=" p-6 gap-9">{menuList}</ul>;
}

export default MenuList;
