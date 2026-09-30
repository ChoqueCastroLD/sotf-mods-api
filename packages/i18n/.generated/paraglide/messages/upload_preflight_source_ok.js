/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Source_OkInputs */

const en_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source code linked.`)
};

const es_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código fuente enlazado.`)
};

const de_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quellcode verlinkt.`)
};

const fr_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code source lié.`)
};

const it_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice sorgente collegato.`)
};

const nl_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broncode gelinkt.`)
};

const pl_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podlinkowano kod źródłowy.`)
};

const pt_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código-fonte vinculado.`)
};

const ru_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на исходный код есть.`)
};

const sv_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källkod länkad.`)
};

const tr_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak koda bağlantı verildi.`)
};

const zh_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已链接源代码。`)
};

const ja_upload_preflight_source_ok = /** @type {(inputs: Upload_Preflight_Source_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコードへのリンクがあります。`)
};

/**
* | output |
* | --- |
* | "Source code linked." |
*
* @param {Upload_Preflight_Source_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_source_ok = /** @type {((inputs?: Upload_Preflight_Source_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Source_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_source_ok(inputs)
	if (locale === "de") return de_upload_preflight_source_ok(inputs)
	if (locale === "fr") return fr_upload_preflight_source_ok(inputs)
	if (locale === "it") return it_upload_preflight_source_ok(inputs)
	if (locale === "nl") return nl_upload_preflight_source_ok(inputs)
	if (locale === "pl") return pl_upload_preflight_source_ok(inputs)
	if (locale === "pt") return pt_upload_preflight_source_ok(inputs)
	if (locale === "ru") return ru_upload_preflight_source_ok(inputs)
	if (locale === "sv") return sv_upload_preflight_source_ok(inputs)
	if (locale === "tr") return tr_upload_preflight_source_ok(inputs)
	if (locale === "zh") return zh_upload_preflight_source_ok(inputs)
	if (locale === "ja") return ja_upload_preflight_source_ok(inputs)
	return en_upload_preflight_source_ok(inputs)
});
