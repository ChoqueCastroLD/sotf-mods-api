/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_FoundInputs */

const en_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json found`)
};

const es_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json encontrado`)
};

const de_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json gefunden`)
};

const fr_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json trouvé`)
};

const it_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json trovato`)
};

const nl_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json gevonden`)
};

const pl_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znaleziono manifest.json`)
};

const pt_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json encontrado`)
};

const ru_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json найден`)
};

const sv_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json hittades`)
};

const tr_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json bulundu`)
};

const zh_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已找到 manifest.json`)
};

const ja_upload_manifest_found = /** @type {(inputs: Upload_Manifest_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json を検出`)
};

/**
* | output |
* | --- |
* | "manifest.json found" |
*
* @param {Upload_Manifest_FoundInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_found = /** @type {((inputs?: Upload_Manifest_FoundInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_FoundInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_found(inputs)
	if (locale === "de") return de_upload_manifest_found(inputs)
	if (locale === "fr") return fr_upload_manifest_found(inputs)
	if (locale === "it") return it_upload_manifest_found(inputs)
	if (locale === "nl") return nl_upload_manifest_found(inputs)
	if (locale === "pl") return pl_upload_manifest_found(inputs)
	if (locale === "pt") return pt_upload_manifest_found(inputs)
	if (locale === "ru") return ru_upload_manifest_found(inputs)
	if (locale === "sv") return sv_upload_manifest_found(inputs)
	if (locale === "tr") return tr_upload_manifest_found(inputs)
	if (locale === "zh") return zh_upload_manifest_found(inputs)
	if (locale === "ja") return ja_upload_manifest_found(inputs)
	return en_upload_manifest_found(inputs)
});
