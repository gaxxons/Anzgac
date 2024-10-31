import React, { useState, useEffect } from 'react';
import { contentService, ContentSection } from '../../services/contentService';
import { Upload, Save, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContentEditorProps {
  page: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ page }) => {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadContent();
  }, [page]);

  const loadContent = async () => {
    setLoading(true);
    const content = await contentService.getPageContent(page);
    setSections(content);
    setLoading(false);
  };

  const handleContentChange = (index: number, field: keyof ContentSection, value: string) => {
    const updatedSections = [...sections];
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value
    };
    setSections(updatedSections);
  };

  const handleImageUpload = async (index: number, file: File) => {
    const imageUrl = await contentService.uploadImage(file, page);
    if (imageUrl) {
      handleContentChange(index, 'image_url', imageUrl);
    }
  };

  const handleSave = async (section: ContentSection) => {
    setSaving(true);
    const updated = await contentService.updateContent(section);
    if (updated) {
      toast.success('Content updated successfully');
      await loadContent();
    } else {
      toast.error('Failed to update content');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <div key={section.id || index} className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Section</label>
              <input
                type="text"
                value={section.section}
                onChange={(e) => handleContentChange(index, 'section', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleContentChange(index, 'title', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                value={section.content}
                onChange={(e) => handleContentChange(index, 'content', e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <div className="mt-1 flex items-center space-x-4">
                {section.image_url && (
                  <img
                    src={section.image_url}
                    alt={section.title}
                    className="h-20 w-20 object-cover rounded"
                  />
                )}
                <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Upload className="w-4 h-4 inline-block mr-2" />
                  Upload Image
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(index, file);
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleSave(section)}
                disabled={saving}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {saving ? (
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentEditor;