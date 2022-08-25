import Header from "../header";

function AdminHoc(WrappedComponent) {
    return function NewComponent() {
        return (
            <div className="flexCol fullVirtualHeight">
                <Header />
                <div className='flexCol mainCntnr '>
                    <WrappedComponent />
                </div>
            </div>
        );
    }
}

export default AdminHoc;