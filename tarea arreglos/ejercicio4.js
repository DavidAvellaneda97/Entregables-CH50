let cursoDeEstudiantes1 = ['Matematicas', 'Inglés', 'Programación'];
let cursoDeEstudiantes2 = ['Geografía', 'Español', 'Programacion'];

function encontraCusrsosEnComun(array1, array2) {
  let cursosEnComun = array1.filter(curso => array2.includes(curso));
  cursosEnComun.forEach(curso => console.log(curso));
}

encuentraCursosEnComun(cursoDeEstudiantes1, cursoDeEstudiantes2); // Esto imprimirá: Programación

// filter e includes

function encuentraCursosEnComun (curso1, curso2){
    return curso1.filter(curso => curso2.includes(curso));
}

let cursoDeEstudiantes1 = ['Matematicas', 'Inglés', 'Programación'];
let cursoDeEstudiantes2 = ['Español', 'Geografía', 'programación'];

let cursosEnComun = cursoDeEstudiantes1.filter(curso => cursoDeEstudiantes2.includes(course));
console.log(cursosEnComun);
