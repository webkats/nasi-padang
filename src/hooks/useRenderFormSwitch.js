import AddMenu from "../components/Forms/AddMenu";
import AddBranch from "../components/Forms/AddBranch";
import AddCity from "../components/Forms/AddCity";

export default function useRenderFormSwitch() {
  const renderForm = (content) => {
    switch (content) {
      case "AddMenu":
        return <AddMenu />;
      case "AddBranch":
        return <AddBranch />;
      case "AddCity":
        return <AddCity />;
      default:
        return null;
    }
  };

  return [renderForm];
}
