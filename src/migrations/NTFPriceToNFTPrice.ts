/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Collection, Db } from "mongodb"

import { renameField } from "helpers/dbOperations"
import type { MigrationInfo } from "types/migration"

/**
 * Information about this migration script.
 */
export const info__NTFPriceToNFTPrice: MigrationInfo = {
	name: "NTFPriceToNFTPrice",
	description: "Rename the field 'NTFPrice' to 'NFTPrice' in the 'aliases' collection",
	author: "Yoratoni",
}

/**
 * The main migration script function.
 * @param _db The database.
 * @param _collection The collection.
 * @param _count The number of documents to process.
 */
export default async function NTFPriceToNFTPrice(_db: Db, _collection: Collection, _count: number) {
	await renameField(_collection, {}, "NTFPrice", "NFTPrice")
}
