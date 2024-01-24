import { Breadcrumb } from "../components";
const AddJob = () => {
  const breadcrumb = [{ name: "Job List", path: "/jobs" }, { name: "Add" }];
  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <Breadcrumb routes={breadcrumb} title="Create" />
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right"></div>
        </div>
      </div>
      <div className="content-body">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-primary" role="alert">
              <div className="alert-body">
                <strong>Info:</strong> Please check the&nbsp;
                <a
                  className="text-primary"
                  href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-full.html"
                  target="_blank"
                >
                  Layout full documentation
                </a>
                &nbsp; for more details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddJob;
