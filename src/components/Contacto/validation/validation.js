export const validate=(form)=>{
    let errors={};
    if(!form.name) errors.name= 'Campo requerido';
    else if(form.name.length > 40 || form.name.length < 2) errors.name= 'Longitud inválida';
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email) ) errors.email= 'Email inválido';
    else if(form.tel.length > 11) errors.tel= 'Longitud inválida';
    else if(!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(form.tel)) errors.tel= 'Número de teléfono inválido';
    else if(!form.text) errors.text= 'Campo requerido';
    return errors;
}