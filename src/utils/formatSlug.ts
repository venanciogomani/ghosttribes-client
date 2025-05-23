export function formatSlug(name: string): string {
    return name
        .toLowerCase()                      // Convert to lowercase
        .trim()                             // Remove leading and trailing spaces
        .replace(/[^a-z0-9\s-]/g, "")       // Remove special characters
        .replace(/\s+/g, "-")               // Replace spaces with hyphens
        .replace(/-+/g, "-");               // Replace multiple hyphens with a single hyphen
}
