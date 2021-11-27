import { queryExcel } from '../auth/auth'
const EXCEL_COLS = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('')

function arrayArrayToObjectArray(array: any[]): any[] {
  const headers = array.slice(0, 1).flat()
  return array.slice(1).map((item: string[]) => {
    const obj = {}
    item.forEach((value, i) => (obj[headers[i]] = value))
    return obj
  })
}

export async function getTableRows() {
  return arrayArrayToObjectArray(
    (await queryExcel('GET', `worksheets('data')/usedRange`)).values,
  )
}

export async function getMyRow(accountName) {
  const rows = await getTableRows()
  const index = rows.findIndex((row) => row.accountName === accountName)
  return { index, row: rows[index] }
}

export async function updateMyRow(accountName, newValues) {
  const { index, row } = await getMyRow(accountName)
  Object.entries(newValues).forEach(([key, value]) => {
    if (row.hasOwnProperty(key)) {
      row[key] = value
    }
  })
  const update = Object.values(row).slice(1)
  const body = {
    values: [update],
  }
  const offset = 1

  await queryExcel(
    'PATCH',
    `worksheets('data')/range(address='${EXCEL_COLS[offset]}${index + 2}:${
      EXCEL_COLS[offset + update.length - 1]
    }${index + 2}')`,
    body,
  )
}
