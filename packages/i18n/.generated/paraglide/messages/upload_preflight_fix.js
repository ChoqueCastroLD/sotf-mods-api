/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_FixInputs */

const en_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix`)
};

const es_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corregir`)
};

const de_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheben`)
};

const fr_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corriger`)
};

const it_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correggi`)
};

const nl_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oplossen`)
};

const pl_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popraw`)
};

const pt_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigir`)
};

const ru_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправить`)
};

const sv_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärda`)
};

const tr_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzelt`)
};

const zh_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`去修改`)
};

const ja_upload_preflight_fix = /** @type {(inputs: Upload_Preflight_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正する`)
};

/**
* | output |
* | --- |
* | "Fix" |
*
* @param {Upload_Preflight_FixInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_fix = /** @type {((inputs?: Upload_Preflight_FixInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_FixInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_fix(inputs)
	if (locale === "de") return de_upload_preflight_fix(inputs)
	if (locale === "fr") return fr_upload_preflight_fix(inputs)
	if (locale === "it") return it_upload_preflight_fix(inputs)
	if (locale === "nl") return nl_upload_preflight_fix(inputs)
	if (locale === "pl") return pl_upload_preflight_fix(inputs)
	if (locale === "pt") return pt_upload_preflight_fix(inputs)
	if (locale === "ru") return ru_upload_preflight_fix(inputs)
	if (locale === "sv") return sv_upload_preflight_fix(inputs)
	if (locale === "tr") return tr_upload_preflight_fix(inputs)
	if (locale === "zh") return zh_upload_preflight_fix(inputs)
	if (locale === "ja") return ja_upload_preflight_fix(inputs)
	return en_upload_preflight_fix(inputs)
});
