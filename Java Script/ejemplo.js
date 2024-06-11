let recetas = [
    {
        nombre: "Tarta de Chocolate",
        ingredientes: [
            '200g de chocolate negro',
            '150g de mantequilla',
            '150g de azúcar',
            '3 huevos',
            '150g de harina',
            '1 cucharadita de esencia de vainilla'
        ],
        preparacion: [
            'Derretir el chocolate y la mantequilla al baño maría.',
            'En un bol, batir los huevos y agregar el azúcar.',
            'Añadir la mezcla de chocolate y mantequilla derretida.',
            'Incorporar la harina y la esencia de vainilla.',
            'Verter la mezcla en un molde y hornear a 180°C durante 25-30 minutos.',
            'Dejar enfriar y servir.'
        ],
        imagen: "assets/img/receta1.jpg"
    },
    {
        nombre: "Pasta Alfredo",
        ingredientes: [
            "Pasta",
            "Crema de leche",
            "Mantequilla",
            "Queso parmesano",
            "Ajo",
            "Sal y pimienta al gusto"
        ],
        preparacion: [
            "Cocinar la pasta según las instrucciones del paquete.",
            "En una sartén, derretir la mantequilla y dorar el ajo picado.",
            "Agregar la crema de leche y dejar reducir.",
            "Añadir el queso parmesano rallado y mezclar hasta que se derrita.",
            "Sazonar con sal y pimienta al gusto.",
            "Mezclar la salsa con la pasta cocida y servir caliente."
        ],
        imagen: "assets/img/receta2.jpg"
    },
    {
        nombre: "Ensalada César",
        ingredientes: [
            '200g de lechuga romana',
            '100g de pechuga de pollo',
            '50g de queso parmesano rallado',
            '2 rebanadas de pan de molde',
            '2 cucharadas de aceite de oliva',
            '1 diente de ajo',
            '1 cucharada de mostaza',
            '1 cucharada de salsa Worcestershire',
            '1 cucharada de jugo de limón',
            'Sal y pimienta al gusto'
        ],
        preparacion: [
            'Cortar las rebanadas de pan en cubos y dorarlos en una sartén con un poco de aceite de oliva y ajo picado.',
            'Cortar la lechuga romana en trozos y colocarla en un bol grande.',
            'Cocinar la pechuga de pollo a la parrilla y cortarla en tiras finas.',
            'Agregar el pollo a la lechuga en el bol.',
            'Preparar la salsa mezclando el aceite de oliva, mostaza, salsa Worcestershire, jugo de limón, sal y pimienta.',
            'Verter la salsa sobre la ensalada y mezclar bien.',
            'Espolvorear queso parmesano rallado y los cubos de pan dorado sobre la ensalada antes de servir.'
        ],
        imagen: "assets/img/receta3.jpeg"
    },
    {
        nombre: "Paella Valenciana",
        ingredientes: [
            '300g de arroz bomba',
            '200g de pollo',
            '200g de conejo',
            '200g de judías verdes',
            '200g de garrofón',
            '1 tomate maduro',
            '1 pimiento rojo',
            '1 pimiento verde',
            '1 cebolla',
            '2 dientes de ajo',
            'Azafrán en hebras',
            'Aceite de oliva',
            'Sal y pimienta al gusto'
        ],
        preparacion: [
            'Cortar el pollo y el conejo en trozos pequeños y saltearlos en una paellera con aceite de oliva.',
            'Picar la cebolla, los pimientos y el tomate y añadirlos a la paellera junto con los ajos picados.',
            'Cuando las verduras estén pochadas, agregar el arroz y sofreír durante unos minutos.',
            'Añadir el garrofón y las judías verdes cortadas en trozos pequeños.',
            'Cubrir con agua caliente y dejar cocinar a fuego medio durante aproximadamente 20 minutos.',
            'Agregar unas hebras de azafrán disueltas en un poco de caldo caliente para dar color y sabor a la paella.',
            'Dejar reposar unos minutos antes de servir.'
        ],
        imagen: "assets/img/receta4.jpeg"
    },
    {
        nombre: "Sushi de Salmón",
        ingredientes: [
            '200g de arroz para sushi',
            '300g de filete de salmón fresco',
            '1 aguacate maduro',
            'Algas nori',
            'Vinagre de arroz',
            'Azúcar',
            'Sal',
            'Salsa de soja',
            'Wasabi',
            'Jengibre encurtido'
        ],
        preparacion: [
            'Cocinar el arroz siguiendo las instrucciones del paquete y añadir una mezcla de vinagre de arroz, azúcar y sal.',
            'Cortar el salmón en tiras finas y el aguacate en rodajas.',
            'Extender una capa delgada de arroz sobre una hoja de alga nori.',
            'Colocar las tiras de salmón y las rodajas de aguacate en el centro del arroz.',
            'Enrollar el sushi con ayuda de una esterilla de bambú y cortar en rodajas.',
            'Servir con salsa de soja, wasabi y jengibre encurtido.'
        ],
        imagen: "assets/img/receta5.jpeg"
    },
    {
        nombre: "Risotto de Champiñones",
        ingredientes: [
            '300g de arroz Arborio',
            '200g de champiñones',
            '1 cebolla',
            '2 dientes de ajo',
            '1 litro de caldo de verduras',
            '100ml de vino blanco',
            '50g de mantequilla',
            '50g de queso parmesano rallado',
            'Aceite de oliva',
            'Sal y pimienta al gusto'
        ],
        preparacion: [
            'Picar finamente la cebolla y los ajos y saltear en una sartén con un poco de aceite de oliva.',
            'Añadir los champiñones limpios y cortados en láminas y cocinar hasta que estén dorados.',
            'Agregar el arroz y remover para que se impregne de los jugos de los champiñones.',
            'Incorporar el vino blanco y dejar reducir.',
            'Ir añadiendo el caldo de verduras poco a poco, removiendo constantemente, hasta que el arroz esté cocido y cremoso.',
            'Retirar del fuego y añadir la mantequilla y el queso parmesano rallado. Mezclar bien.',
            'Servir caliente, añadiendo más queso rallado si se desea.'
        ],
        imagen: "assets/img/receta6.jpg"
    }


];

function buscar() {
    const searchTerm = document.getElementById('nombre').value.trim().toLowerCase();
    let nombre;
    let ingredientes;
    let preparacion;
    let imagen;
    const matches = recetas.filter(receta => receta.nombre.toLowerCase().includes(searchTerm));
    
    if (matches.length > 0) {
        const match = matches[0];
        nombre = match.nombre;
        ingredientes = match.ingredientes;
        preparacion = match.preparacion;
        imagen = match.imagen;

        document.getElementById('titulo').innerText = nombre;

        const listaIngredientes = document.getElementById('ingredientes');
        listaIngredientes.innerHTML = '';

        const ulIngredientes = document.createElement('ul');
        for (let i = 0; i < ingredientes.length; i++) {
            const li = document.createElement('li');
            li.textContent = ingredientes[i];
            ulIngredientes.appendChild(li);
        }
        listaIngredientes.appendChild(ulIngredientes);

        const listaPreparacion = document.getElementById('preparacion');
        listaPreparacion.innerHTML = '';
        const ulPreparacion = document.createElement('ul');
        for (let i = 0; i < preparacion.length; i++) {
            const li = document.createElement('li');
            li.textContent = preparacion[i];
            ulPreparacion.appendChild(li);
        }
        listaPreparacion.appendChild(ulPreparacion);

        document.getElementById('imagen').src = imagen;
    } else {
        document.getElementById('titulo').innerText = 'La receta no existe';
        document.getElementById('ingredientes').innerHTML = '';
        document.getElementById('preparacion').innerHTML = '';
        document.getElementById('imagen').src = '';
    }
}


/**
 * validacion de entra de busqueda -(Indistinto Mayus minus y espacio)
 * validacion si existe el nombre de receta buscar
 * solucionar todos los incovenientes que puedan tener al testear la funcionalidad()
*/