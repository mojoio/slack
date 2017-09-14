import { expect, tap } from 'tapbundle'
import * as slackme from '../ts/index'

tap.test('first test', async () => {
  console.log(slackme.standardExport)
})

tap.start()
