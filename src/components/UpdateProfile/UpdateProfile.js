import './UpdateProfile.css'


export default function UpdateProfile(props){

    return(
        <div>
            <div class="container rounded bg-white mt-5 mb-5"> 
                <div class="row"> 
                    <div class="col-md-3 border-right"> 
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" src=""/>
                                <span class="font-weight-bold">User Name</span>
                                <span class="text-black-50">Name of user</span>
                                <span> 

                                </span>
                        </div>
                                
                    </div> 
                    <div class="col-md-5 border-right"> 
                        <div class="p-3 py-5"> 
                            <div class="d-flex justify-content-between align-items-center mb-3"> 
                                <h4 class="text-right">Profile Settings</h4> 
                            </div> 
                            <div class="row mt-2"> 
                                <div class="col-md-6">
                                    <label class="labels">Name</label>
                                        <input type="text" class="form-control" placeholder="Name" />
                                </div>
                                 <div class="col-md-6">
                                    <label class="labels">Username</label>
                                        <input type="text" class="form-control"  placeholder="username"/>
                                </div> 
                            </div> 
                            <div class="row mt-3"> 
                                <div class="col-md-12">
                                    <label class="labels">Age</label>
                                    <input type="text" class="form-control" placeholder="enter age" />
                                </div> 
                                <div class="col-md-12">
                                    <label class="labels">Bio</label>
                                        <input type="text" class="form-control" placeholder="enter bio" />
                                </div> 
                                <div class="col-md-12">
                                    <label class="labels">Email ID</label>
                                        <input type="text" class="form-control" placeholder="urmailid@gmail.com"  disabled/>
                                </div>
                                 {/* <div class="col-md-12">
                                    <label class="labels">Date Of Birth</label>
                                        <input type="date" class="form-control" placeholder="education" />
                                </div>  */}
                            </div> 
                            <div class="row mt-3"> 
                                <div class="col-md-6">
                                    <label class="labels">Password</label>
                                        <input type="password" class="form-control" placeholder="enter password" />
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">Verify Password</label>
                                        <input type="password" class="form-control"  placeholder="verify password"/>
                                </div> 
                            </div>
                            <div class="mt-5 text-center">
                                <button class="btn btn-primary profile-button" type="button">Save Profile</button>
                            </div> 
                        </div>
                    </div> 
                    <div class="col-md-3 "> 
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" src=""/>
                                <span class="font-weight-bold">User Name</span>
                                <span class="text-black-50">Name of user</span>
                                <span> 

                                </span>
                        </div>
                                
                    </div> 
                </div>
            </div>
        </div>
    );
}