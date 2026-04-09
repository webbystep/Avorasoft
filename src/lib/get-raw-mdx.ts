import fs from 'fs';
import path from 'path';

export function getRawMDXContent(filePath: string): string | null {
  try {
    // Try the direct path first
    const fullPath = path.join(process.cwd(), 'content/docs', filePath);
    let content: string;

    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch {
      // If direct path fails, try with index.mdx (for folder structures)
      const indexPath = path.join(
        process.cwd(),
        'content/docs',
        filePath.replace('.mdx', '/index.mdx'),
      );
      content = fs.readFileSync(indexPath, 'utf8');
    }

    // Remove frontmatter for cleaner markdown
    const contentWithoutFrontmatter = content.replace(
      /^---\n[\s\S]*?\n---\n/,
      '',
    );

    // Remove import statements for cleaner markdown
    const cleanContent = contentWithoutFrontmatter
      .replace(/^import.*$/gm, '')
      .trim();

    return cleanContent;
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

export function getMDXSourceForCopy(filePath: string): string | null {
  try {
    // Try the direct path first
    const fullPath = path.join(process.cwd(), 'content/docs', filePath);
    let content: string;

    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch {
      // If direct path fails, try with index.mdx (for folder structures)
      const indexPath = path.join(
        process.cwd(),
        'content/docs',
        filePath.replace('.mdx', '/index.mdx'),
      );
      content = fs.readFileSync(indexPath, 'utf8');
    }

    // Remove frontmatter
    let cleanContent = content.replace(/^---\n[\s\S]*?\n---\n/, '');

    // Remove import statements
    cleanContent = cleanContent.replace(/^import.*$/gm, '');

    // Remove JSX components and convert to markdown
    cleanContent = cleanContent
      // Remove div wrappers
      .replace(/<div[^>]*>/g, '')
      .replace(/<\/div>/g, '')
      // Remove dropdown menu components
      .replace(/<DropdownMenu[^>]*>[\s\S]*?<\/DropdownMenu>/g, '')
      .replace(/<Button[^>]*>[\s\S]*?<\/Button>/g, '')
      // Convert Fumadocs Callout to content
      .replace(/<Callout[^>]*>/g, '')
      .replace(/<\/Callout>/g, '')
      // Convert Fumadocs Cards to sections
      .replace(/<Cards>/g, '')
      .replace(/<\/Cards>/g, '')
      .replace(/<Card[^>]*title="([^"]*)"[^>]*>/g, '### $1\n')
      .replace(/<\/Card>/g, '')
      // Convert Fumadocs Tabs to sections (legacy support)
      .replace(/<Tabs[^>]*>/g, '')
      .replace(/<\/Tabs>/g, '')
      .replace(/<Tab value="([^"]*)">/g, '### $1\n')
      .replace(/<\/Tab>/g, '')
      // Convert Fumadocs Steps to numbered list
      .replace(/<Steps>/g, '')
      .replace(/<\/Steps>/g, '')
      .replace(/<Step>/g, '')
      .replace(/<\/Step>/g, '')
      // Convert Card components to markdown (legacy, might still exist)
      .replace(/<Card[^>]*>/g, '')
      .replace(/<\/Card>/g, '')
      .replace(/<CardHeader[^>]*>/g, '')
      .replace(/<\/CardHeader>/g, '')
      .replace(/<CardContent[^>]*>/g, '')
      .replace(/<\/CardContent>/g, '')
      .replace(/<CardTitle[^>]*>(.*?)<\/CardTitle>/g, '**$1**')
      .replace(/<CardDescription[^>]*>(.*?)<\/CardDescription>/g, '$1')
      // Remove icon Card components
      .replace(/<Card className="grid size-8[^>]*>[\s\S]*?<\/Card>/g, '')
      // Convert custom code blocks to standard markdown (no longer needed since we use standard markdown)
      .replace(
        /<div className="relative[^>]*>\s*<code[^>]*>(.*?)<\/code>\s*<\/div>/g,
        '```bash\n$1\n```',
      )
      // Handle paragraph tags
      .replace(/<p[^>]*>/g, '')
      .replace(/<\/p>/g, '\n')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();

    // Add external links section to the markdown output
    cleanContent += `

## External Links

- [Open GitHub](https://github.com)
- [Open ChatGPT](https://chatgpt.com)

## Additional Resources

- [API Documentation](https://docs.scalar.com/api)
- [Framework Examples](https://github.com/scalar/examples)
- [Community Discord](https://discord.gg/scalar)`;

    return cleanContent;
  } catch (error) {
    console.error('Error processing MDX for copy:', error);
    return null;
  }
}
