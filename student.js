const studentList=[
    {"fname":"Teppo1","lname":"Testi1"},
    {"fname":"Teppo2","lname":"Testi2"},
    {"fname":"Teppo3","lname":"Testi3"}
];

const student={

    getAll:function(){
        //console.log("Tämä palauttaisi kaikki opiskelijat tietokannan taulusta");
        //console.log(studentList);
        return studentList;
    },
    getOne:function(id){
        //console.log("Tämä palauttaisi opiskelijan, jonka id="+id);
        //console.log(studentList[id]);
        return studentList[id];
    }
};

module.exports=student;