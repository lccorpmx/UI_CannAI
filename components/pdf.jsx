import { Page, Text, Document, StyleSheet, Image } from '@react-pdf/renderer';


function PDF(){
    return(
        <Document>
            <Page>
                <Text>PDF EJEMPLO</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est a dolor ducimus vel suscipit ea ipsa, ad natus illum, sit fugit reprehenderit ex. Corporis, recusandae at? Obcaecati, doloremque vel.</Text>
            </Page>
        </Document>
    )
}

export default PDF;