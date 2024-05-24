import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
        fontFamily: 'Helvetica',
        fontSize: 12,
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginBottom: 20,
        textAlign: 'center',
        color: '#68D391', // green-400
        fontSize: 24, // Tamaño del título más grande
    },
    subHeader: {
        fontSize: 14, // Tamaño del subtítulo más grande
        marginBottom: 10,
        textAlign: 'center',
        color: '#000000',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#68D391', // green-400
    },
    description: {
        marginBottom: 20,
        color: '#000000',
    },
    section: {
        marginBottom: 10,
        color: '#000000',
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#68D391', // green-400
    },
    line: {
        borderBottom: '1 solid #000',
        marginVertical: 10,
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    gridItem: {
        width: '48%',
    },
});

function PDF({ cepa, descripcion, nombre, edad, telefono, guiaCompra, padecimientos, dosis }) {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.header}>CannAI Mexico</Text>
                <Text style={styles.subHeader}>La primer IA cannábica en el ámbito médico</Text>

                <View style={styles.line} />

                <Text style={styles.sectionTitle}>Datos del Paciente:</Text>
                <View style={styles.grid}>
                    <View style={styles.gridItem}>
                        <Text style={styles.section}>Nombre: {nombre}</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.section}>Edad: {edad}</Text>
                    </View>
                </View>
                <View style={styles.grid}>
                    <View style={styles.gridItem}>
                        <Text style={styles.section}>Teléfono: {telefono}</Text>
                    </View>
                </View>

                <View style={styles.line} />

                <Text style={styles.sectionTitle}>Cepa:</Text>
                <Text style={styles.section}>{cepa}</Text>
                <Text style={styles.description}>{descripcion}</Text>

                <View style={styles.line} />

                <Text style={styles.sectionTitle}>Guía de Compra:</Text>
                <Text style={styles.section}>{guiaCompra}</Text>

                <View style={styles.line} />

                <Text style={styles.sectionTitle}>Padecimientos:</Text>
                <Text style={styles.section}>{padecimientos}</Text>

                <View style={styles.line} />

                <Text style={styles.sectionTitle}>Dosis:</Text>
                <Text style={styles.section}>{dosis}</Text>
            </Page>
        </Document>
    );
}

export default PDF;
