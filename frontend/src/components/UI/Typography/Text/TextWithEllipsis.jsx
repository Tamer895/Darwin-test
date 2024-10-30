import React from 'react';

export default function TextWithEllipsis({ text, maxLength, ...props }) {
    // Функция для обрезки текста
    const truncatedText = text.length > maxLength
        ? text.substring(0, maxLength) + '...'
        : text;

    return (
        <span {...props}>{truncatedText}</span>
    );
}