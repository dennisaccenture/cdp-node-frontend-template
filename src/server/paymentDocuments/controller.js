export const documentController = {
  handler(_request, h) {
    const metaData = [
      {
        id: '12345-abcde-67890-fghij',
        fileName: 'file_report_2024.pdf',
        localAuthority: 'Newcastle City Council',
        financialYear: '2024',
        quarter: 'Q2',
        creationDate: '20/10/2024',
        documentType: 'grant',
        language: 'EN'
      }
    ]

    const grouped = groupDocumentsByYear(metaData)
    const years = Object.keys(grouped)
    const selectedYear = Math.max(...years.map(Number)).toString()

    const selectedGroup = grouped[selectedYear] || []
    const tableRows = createTableRows(selectedGroup)
    const yearOptions = createYearOptions(years, selectedYear)

    return h.view('paymentDocuments/index', {
      pageTitle: 'Documents',
      heading: 'Documents',
      breadcrumbs: [
        {
          text: 'LAPs home',
          href: '/'
        },
        {
          text: 'Payment documents'
        }
      ],
      tableData: {
        caption: 'Financial documents',
        captionClasses: 'govuk-visually-hidden',
        firstCellIsHeader: true,
        head: [
          { text: 'Date' },
          { text: 'Document name' },
          {
            html: "<span class='govuk-visually-hidden'>Download document</span>"
          },
          { html: "<span class='govuk-visually-hidden'>View document</span>" }
        ],
        rows: tableRows
      },
      selectData: {
        id: 'financial-year',
        name: 'year',
        label: {
          text: 'Select financial year',
          classes: 'govuk-label--m'
        },
        items: yearOptions
      }
    })
  }
}

function createTableRows(documents) {
  return documents.map((doc) => {
    const formattedDate = formatDate(doc.creationDate)
    const documentName = `${doc.documentType.charAt(0).toUpperCase() + doc.documentType.slice(1)} letter ${doc.quarter}`

    return [
      { text: formattedDate },
      { text: documentName },
      {
        html: "<a href='#' class='govuk-link'>Download <span class='govuk-visually-hidden'>9 Dec 2025 Grant letter Q4</span></a>",
        classes: 'govuk-table__cell--numeric'
      },
      {
        html: "<a href='#' class='govuk-link'>View (opens in a new tab) <span class='govuk-visually-hidden'>9 Dec 2025 Grant letter Q4</span></a>",
        classes: 'govuk-table__cell--numeric'
      }
    ]
  })
}

const formatDate = (input) => {
  const [day, month, year] = input.split('/')
  const date = new Date(`${year}-${month}-${day}`)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

// utils.js

// Convert "2024" → "2024 to 2025"
export const formatFinancialYearRange = (year) => {
  return `${year} to ${parseInt(year) + 1}`
}

// Format "20/10/2024" → "20 Oct 2024"

// Group documents by financialYear
export const groupDocumentsByYear = (documents) => {
  const groups = {}

  for (const doc of documents) {
    if (!groups[doc.financialYear]) {
      groups[doc.financialYear] = []
    }
    groups[doc.financialYear].push(doc)
  }

  return groups // { "2024": [doc1, doc2], "2025": [doc3] }
}

// Create govukSelect options
export const createYearOptions = (years, selectedYear) => {
  const sortedYears = [...years].sort((a, b) => b - a) // Descending

  return sortedYears.map((year) => ({
    text: formatFinancialYearRange(year),
    value: year,
    selected: year === selectedYear
  }))
}
