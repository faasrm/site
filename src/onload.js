function typewriterDocumentTitle() {
    document.title = 'F';
        setTimeout(() => {
            document.title = 'Fa';
            setTimeout(() => {
                document.title = 'Faa';
                setTimeout(() => {
                    document.title = 'Faas';
                    setTimeout(() => {
                        document.title = 'Faasr';
                        setTimeout(() => {
                            document.title = 'Faasrm';
                            setTimeout(() => {
                                document.title = 'Faasrm';
                            }, 250);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
}

window.onload = function() {
    typewriterDocumentTitle();
}