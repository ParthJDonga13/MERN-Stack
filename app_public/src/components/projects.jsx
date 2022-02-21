export const Projects = () => {
    return (
        <div id="portfolio" className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Projects</h2>
                </div>
                <div className='row'>
                    <div className='portfolio-items'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <img style = {{borderRadius:'50px'}}className="img-responsive" src="img/esociety.jpg" alt='warehouse.jpg' />
                            <h3>E-Society</h3>
                            <p>Managed team and effectively delegate the work. Used HTML, CSS, JS, JQUERY, SQL, Servlet, JSP, and JDBC techs in the project. Prepared project reports and presentations. Given Presentation to project reviewer and guides.</p>
                        </div>
                    </div>
                    <div className='portfolio-items'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <img style = {{borderRadius:'50px'}}className="img-responsive" src="img/warehouse.jpg" alt='warehouse.jpg' />
                            <h3>Warehouse Management Software</h3>
                            <p>Implemented UI of Pages with theme and Code Validations of User inputs in the project. Assist the Team with all aspects of software design and coding. Maintained Stored Procedures using MySQL.</p>
                        </div>
                    </div>
                    <div className='portfolio-items'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <img style = {{borderRadius:'50px'}}className="img-responsive" src="img/warehouse.jpg" alt='warehouse.jpg' />
                            <h3>Lavish Mobile Store</h3>
                            <p>Online Mobile Store project Using MEAN Stack Programming. It has all the crud operations in order to run an online mobile store. </p>
                        </div>
                    </div>
                </div>
            </div>
        




            {/* <div className="products-afterwrap">
                <div className="product">
                    <div className="grid">
                        <img src="img/warehouse.jpg" alt="Warehouse" />
                        <div className="txt-wrap">
                            <h3>Warehouse Management</h3>
                             <p>Hello How are you</p>
                        </div>
                    </div>
                </div>
                <div className="product grey-bg">
                <div className="grid">
                    <div className="txt-wrap">
                        <h3>Attendance Recorder</h3>
                        <p>We provide a solution to record In and out time of employees, keep track of their leaves,
                        </p>
                    </div>
                    <img src="images/attendance.jpg" alt="Attendance" />
                </div>
            </div>
            </div>
             */}
        </div> 
    )
}
