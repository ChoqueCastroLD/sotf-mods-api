/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Upload_Version_PreviousInputs */

const en_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Previous: v${i?.version}`)
};

const es_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anterior: v${i?.version}`)
};

const de_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vorherige: v${i?.version}`)
};

const fr_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Précédente : v${i?.version}`)
};

const it_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Precedente: v${i?.version}`)
};

const nl_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vorige: v${i?.version}`)
};

const pl_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poprzednia: v${i?.version}`)
};

const pt_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anterior: v${i?.version}`)
};

const ru_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Предыдущая: v${i?.version}`)
};

const sv_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Föregående: v${i?.version}`)
};

const tr_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önceki: v${i?.version}`)
};

const zh_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上一版本：v${i?.version}`)
};

const ja_upload_version_previous = /** @type {(inputs: Upload_Version_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前のバージョン：v${i?.version}`)
};

/**
* | output |
* | --- |
* | "Previous: v{version}" |
*
* @param {Upload_Version_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_previous = /** @type {((inputs: Upload_Version_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_previous(inputs)
	if (locale === "de") return de_upload_version_previous(inputs)
	if (locale === "fr") return fr_upload_version_previous(inputs)
	if (locale === "it") return it_upload_version_previous(inputs)
	if (locale === "nl") return nl_upload_version_previous(inputs)
	if (locale === "pl") return pl_upload_version_previous(inputs)
	if (locale === "pt") return pt_upload_version_previous(inputs)
	if (locale === "ru") return ru_upload_version_previous(inputs)
	if (locale === "sv") return sv_upload_version_previous(inputs)
	if (locale === "tr") return tr_upload_version_previous(inputs)
	if (locale === "zh") return zh_upload_version_previous(inputs)
	if (locale === "ja") return ja_upload_version_previous(inputs)
	return en_upload_version_previous(inputs)
});
