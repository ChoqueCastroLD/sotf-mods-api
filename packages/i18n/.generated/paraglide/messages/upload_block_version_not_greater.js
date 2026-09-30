/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown>, previous: NonNullable<unknown> }} Upload_Block_Version_Not_GreaterInputs */

const en_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} must be greater than ${i?.previous}. Bump the version in manifest.json.`)
};

const es_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} debe ser mayor que ${i?.previous}. Súbela en manifest.json.`)
};

const de_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} muss größer als ${i?.previous} sein. Erhöhe die Version in manifest.json.`)
};

const fr_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} doit être supérieure à ${i?.previous}. Augmentez la version dans manifest.json.`)
};

const it_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versione ${i?.version} deve essere maggiore di ${i?.previous}. Aumenta la versione in manifest.json.`)
};

const nl_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version} moet hoger zijn dan ${i?.previous}. Verhoog de versie in manifest.json.`)
};

const pl_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version} musi być wyższa niż ${i?.previous}. Podnieś wersję w manifest.json.`)
};

const pt_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A versão ${i?.version} precisa ser maior que ${i?.previous}. Aumente a versão no manifest.json.`)
};

const ru_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version} должна быть выше ${i?.previous}. Повысьте версию в manifest.json.`)
};

const sv_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} måste vara högre än ${i?.previous}. Höj versionen i manifest.json.`)
};

const tr_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümü ${i?.previous} sürümünden büyük olmalı. manifest.json içindeki sürümü yükselt.`)
};

const zh_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本 ${i?.version} 必须高于 ${i?.previous}。请在 manifest.json 中提高版本号。`)
};

const ja_upload_block_version_not_greater = /** @type {(inputs: Upload_Block_Version_Not_GreaterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン ${i?.version} は ${i?.previous} より大きい必要があります。manifest.json のバージョンを上げてください。`)
};

/**
* | output |
* | --- |
* | "Version {version} must be greater than {previous}. Bump the version in manifest.json." |
*
* @param {Upload_Block_Version_Not_GreaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_version_not_greater = /** @type {((inputs: Upload_Block_Version_Not_GreaterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Version_Not_GreaterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_version_not_greater(inputs)
	if (locale === "de") return de_upload_block_version_not_greater(inputs)
	if (locale === "fr") return fr_upload_block_version_not_greater(inputs)
	if (locale === "it") return it_upload_block_version_not_greater(inputs)
	if (locale === "nl") return nl_upload_block_version_not_greater(inputs)
	if (locale === "pl") return pl_upload_block_version_not_greater(inputs)
	if (locale === "pt") return pt_upload_block_version_not_greater(inputs)
	if (locale === "ru") return ru_upload_block_version_not_greater(inputs)
	if (locale === "sv") return sv_upload_block_version_not_greater(inputs)
	if (locale === "tr") return tr_upload_block_version_not_greater(inputs)
	if (locale === "zh") return zh_upload_block_version_not_greater(inputs)
	if (locale === "ja") return ja_upload_block_version_not_greater(inputs)
	return en_upload_block_version_not_greater(inputs)
});
