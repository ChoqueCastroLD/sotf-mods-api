/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Upload_Block_Version_ExistsInputs */

const en_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} already exists. Bump the version in manifest.json.`)
};

const es_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} ya existe. Súbela en manifest.json.`)
};

const de_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} gibt es schon. Erhöhe die Version in manifest.json.`)
};

const fr_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} existe déjà. Augmentez la version dans manifest.json.`)
};

const it_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versione ${i?.version} esiste già. Aumenta la versione in manifest.json.`)
};

const nl_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version} bestaat al. Verhoog de versie in manifest.json.`)
};

const pl_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version} już istnieje. Podnieś wersję w manifest.json.`)
};

const pt_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A versão ${i?.version} já existe. Aumente a versão no manifest.json.`)
};

const ru_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version} уже существует. Повысьте версию в manifest.json.`)
};

const sv_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} finns redan. Höj versionen i manifest.json.`)
};

const tr_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} sürümü zaten var. manifest.json içindeki sürümü yükselt.`)
};

const zh_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本 ${i?.version} 已存在。请在 manifest.json 中提高版本号。`)
};

const ja_upload_block_version_exists = /** @type {(inputs: Upload_Block_Version_ExistsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン ${i?.version} はすでに存在します。manifest.json のバージョンを上げてください。`)
};

/**
* | output |
* | --- |
* | "Version {version} already exists. Bump the version in manifest.json." |
*
* @param {Upload_Block_Version_ExistsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_block_version_exists = /** @type {((inputs: Upload_Block_Version_ExistsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Version_ExistsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_block_version_exists(inputs)
	if (locale === "de") return de_upload_block_version_exists(inputs)
	if (locale === "fr") return fr_upload_block_version_exists(inputs)
	if (locale === "it") return it_upload_block_version_exists(inputs)
	if (locale === "nl") return nl_upload_block_version_exists(inputs)
	if (locale === "pl") return pl_upload_block_version_exists(inputs)
	if (locale === "pt") return pt_upload_block_version_exists(inputs)
	if (locale === "ru") return ru_upload_block_version_exists(inputs)
	if (locale === "sv") return sv_upload_block_version_exists(inputs)
	if (locale === "tr") return tr_upload_block_version_exists(inputs)
	if (locale === "zh") return zh_upload_block_version_exists(inputs)
	if (locale === "ja") return ja_upload_block_version_exists(inputs)
	return en_upload_block_version_exists(inputs)
});
