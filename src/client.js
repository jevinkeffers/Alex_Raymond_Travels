import * as contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


export const client = contentful.createClient({
    space: 'jc35ohpaz200',
    accessToken: 'gmh4B7LHkPsCNtECd0E5oECnh0jjxZCOL6aNDxp4B7Q'
})

client.getEntry('<entry_id>');