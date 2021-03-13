export default {
    defaultTitle: 'Blue Pixel frontend test',
    rootDomain: process.env.NODE_ENV === 'development' ? 'sandbox.blackpixel.mx' : 'pakke.mx',
    httpsUri: process.env.NODE_ENV === 'development' ? 'https://gql.sandbox.blackpixel.mx' : 'https://gql.pakke.mx',
    wssUri: process.env.NODE_ENV === 'development' ? 'wss://gql.sandbox.blackpixel.mx' : 'wss://gql.pakke.mx',
    cdnRoot: process.env.NODE_ENV === 'development' ? 'https://cdn.blackpixel.mx' : 'https://cdn.pakke.mx',
    previewRoot: process.env.NODE_ENV === 'development' ? 'https://preview.sandbox.blackpixel.mx' : 'https://preview.pakke.mx',
    trackUrl: process.env.NODE_ENV === 'development' ? "https://seller.pakke.mx/api/v1/Shipments/tracking?trackingNumber=" : "https://seller.pakke.mx/api/v1/Shipments/tracking?trackingNumber=",
    passwordMinLength: 8,
    recaptchaSiteKey: '6LfPx8oZAAAAAKkHa_DhwWeynkV1keZnwRoYiPJd',
    recipientName: process.env.NODE_ENV === 'development'? "Rodrigo Spesia" : "Pakke MX",
    fromEmail: "noreply@bluepixel.mx",
    website: process.env.NODE_ENV === 'development' ? "sandbox.blackpixel.mx" : 'www.pakke.mx'
};