import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const Post = ({ article }) => {
    // const options = {
    //     renderMark: {
    //         [MARKS.BOLD]: (text) => `<custom-bold>${text}</custom-bold>`
    //     },
    //     renderNode: {
    //         [BLOCKS.PARAGRAPH]: (node, next) =>
    //             `<custom-paragraph>${next(node.content)}</custom-paragraph>`,
    //     }
    // }
    
    const { headline, subhead, featuredImage, body } = article.fields;

    const postBody = documentToHtmlString(body);
    return (
        <div className="post">
            <h1 className="title">{headline}</h1>
            <h3 className="subhead">{subhead}</h3>
            {featuredImage && (
                <img
                className="featuredImage"
                src={featuredImage.fields.file.url}
                alt={headline}
                title={headline}
                />
            )}
            <section dangerouslySetInnerHTML={{ __html: postBody }} />
            {/* <section className='location'>{location}</section> */}
        </div>
    );
    };

export default Post;
