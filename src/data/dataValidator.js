// Test file to verify all pages are properly exported and working
import { allPages, pageCategories, findPageById, getStats } from './masterData.jsx'

// Test function to validate data integrity
export const validateData = () => {
  const results = {
    totalPages: allPages.length,
    totalCategories: pageCategories.length,
    errors: [],
    warnings: []
  }

  // Check if all pages have required properties
  allPages.forEach((page, index) => {
    if (!page.id) {
      results.errors.push(`Page at index ${index} missing id`)
    }
    if (!page.title) {
      results.errors.push(`Page ${page.id} missing title`)
    }
    if (!page.component) {
      results.errors.push(`Page ${page.id} missing component`)
    }
    if (typeof page.component !== 'function') {
      results.errors.push(`Page ${page.id} component is not a function`)
    }
  })

  // Check if all category page references exist
  pageCategories.forEach((category) => {
    category.pages.forEach((pageId) => {
      const page = findPageById(pageId)
      if (!page) {
        results.errors.push(`Category ${category.id} references non-existent page ${pageId}`)
      }
    })
  })

  // Check for duplicate page IDs
  const pageIds = allPages.map(page => page.id)
  const duplicateIds = pageIds.filter((id, index) => pageIds.indexOf(id) !== index)
  if (duplicateIds.length > 0) {
    results.errors.push(`Duplicate page IDs found: ${duplicateIds.join(', ')}`)
  }

  // Check if page IDs follow naming convention
  allPages.forEach((page) => {
    if (!/^page\d+$/.test(page.id)) {
      results.warnings.push(`Page ${page.id} doesn't follow naming convention (pageXX)`)
    }
  })

  return results
}

// Get comprehensive statistics
export const getComprehensiveStats = () => {
  const stats = getStats()
  
  return {
    ...stats,
    validation: validateData(),
    categoryDetails: pageCategories.map(cat => ({
      id: cat.id,
      title: cat.title,
      pageCount: cat.pages.length,
      pages: cat.pages.map(pageId => {
        const page = findPageById(pageId)
        return page ? { id: page.id, title: page.title } : { id: pageId, title: 'NOT FOUND' }
      })
    }))
  }
}

// Log comprehensive stats to console (for development)
if (typeof window !== 'undefined' && window.console) {
  const stats = getComprehensiveStats()
  console.log('📊 Health Handbook Statistics:', stats)
  
  if (stats.validation.errors.length > 0) {
    console.error('❌ Data Validation Errors:', stats.validation.errors)
  }
  
  if (stats.validation.warnings.length > 0) {
    console.warn('⚠️ Data Validation Warnings:', stats.validation.warnings)
  }
  
  if (stats.validation.errors.length === 0) {
    console.log('✅ All data validation checks passed!')
  }
}

export default { validateData, getComprehensiveStats }
