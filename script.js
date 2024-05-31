document.addEventListener('DOMContentLoaded', function() {
    // Simulación de obtención de datos de la CDC
    const dataFromCDC = [
        { title: "Prevención de la Gripe", link: "https://www.cdc.gov/flu/prevent/index.html" },
        { title: "Información sobre el COVID-19", link: "https://www.cdc.gov/coronavirus/2019-ncov/index.html" }
    ];

    const novedadesSection = document.getElementById('novedades');
    const cdcContainer = document.createElement('div');
    cdcContainer.innerHTML = '<h3>Recursos de la CDC</h3>';

    const list = document.createElement('ul');
    dataFromCDC.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
        list.appendChild(listItem);
    });

    cdcContainer.appendChild(list);
    novedadesSection.appendChild(cdcContainer);

    // Cargar iframe con el contenido del enlace proporcionado
    const iframeContainer = document.getElementById('contenido-iframe');
    const iframe = document.createElement('iframe');
    iframe.src = "https://servicios.pami.org.ar/vademecum/views/consultaPublica/listado.zul";
    iframe.width = "100%";
    iframe.height = "600px"; // Ajusta la altura según sea necesario
    iframe.style.border = "none";
    iframeContainer.appendChild(iframe);
});
