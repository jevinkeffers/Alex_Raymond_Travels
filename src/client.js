import * as contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


export const client = contentful.createClient({
    space: 'jc35ohpaz200',
    accessToken: 'gmh4B7LHkPsCNtECd0E5oECnh0jjxZCOL6aNDxp4B7Q'
})

client
    .getEntry('<entry_id>')
    .then(entry => {
        const rawRichTextField = entry.fields.body;
        return documentToHtmlString(rawRichTextField);
    })
    .then(renderedHtml => {
        // do something with html, like write to a file
        console.log(renderedHtml);
        document.getElementById('rich-text-body').innerHTML = renderedHtml;
    })
    .catch(error => console.log(error));