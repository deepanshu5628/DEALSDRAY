function Details(data){
    let info=data.data;
    return (
        <div className="w-10/12 flex  gap-20 " >

            
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.mobileno}</p>
            <p>{info.designation}</p>
            <p>{info.gender}</p>
            <p>{info.course}</p>
            <p>{info.createdAt}</p>
            <p><button>Edit </button></p>
            <p><button>Delter</button> </p>
        </div>
    )
}

export default Details;