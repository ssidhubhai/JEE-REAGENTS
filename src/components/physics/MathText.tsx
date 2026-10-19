import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ content, className = '' }) => {
  const html = useMemo(() => {
    if (!content) return '';

    // First replace block math $$...$$
    let formatted = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
      } catch {
        return `<div class="katex-error">$$${math}$$</div>`;
      }
    });

    // Then replace inline math $...$
    formatted = formatted.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
      } catch {
        return `<span class="katex-error">$${math}$</span>`;
      }
    });

    // Convert newlines to <br/>
    formatted = formatted.replace(/\n/g, '<br />');

    return formatted;
  }, [content]);

  return (
    <span
      className={`inline-math-container break-words ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
