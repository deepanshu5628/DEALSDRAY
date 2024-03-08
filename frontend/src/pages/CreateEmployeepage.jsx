function CreateEmployeepage(){
    return (
        <div>
            <form >
                {/* name */}
                <label >Name: 
                    <input type="text" placeholder="enter name" name="name" />
                </label>
                <br />
                {/* email */}
                <label >Email: 
                    <input type="text" placeholder="enter email" name="email"/>
                </label>
                <br />
                {/* phone no  */}
                <label >Mobile NO: 
                    <input type="number" minLength={10} maxLength={10} placeholder="enter mobile no " name="mobileNo"/>
                </label>
                <br />
                {/* designation */}
                <label >Designation:
                <select name="designation">
                    <option value={"HR"}>HR</option>
                    <option value={"Manager"}>Mangaer</option>
                    <option value={"Sales"}>Sales</option>
                </select>
                </label>
                <br />
                {/* genrer */}
               <label >Gender:
               <label >Male:
                    <input type="radio" name="gender" />
                </label>
                <label >Female:
                    <input type="radio" name="gender" />
                </label>
               </label>
                <br />
                {/* course */}
                <label >Course:
                <label >MCA 
                    <input type="checkbox" name="course" />
                </label>
                <label >BCA
                    <input type="checkbox" name="course" />
                </label>
                <label >BSC 
                    <input type="checkbox" name="course" />
                </label>
                </label>
                <br />
                {/* image */}
                <label >Image:
                <input type="file" name="image" />
                </label>
                <br />
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateEmployeepage;