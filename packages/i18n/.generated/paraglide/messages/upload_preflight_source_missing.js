/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Source_MissingInputs */

const en_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No source code link.`)
};

const es_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin enlace al código fuente.`)
};

const de_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Link zum Quellcode.`)
};

const fr_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de lien vers le code source.`)
};

const it_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun link al codice sorgente.`)
};

const nl_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen link naar de broncode.`)
};

const pl_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak linku do kodu źródłowego.`)
};

const pt_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem link para o código-fonte.`)
};

const ru_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет ссылки на исходный код.`)
};

const sv_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen länk till källkoden.`)
};

const tr_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak koda bağlantı yok.`)
};

const zh_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有源代码链接。`)
};

const ja_upload_preflight_source_missing = /** @type {(inputs: Upload_Preflight_Source_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコードへのリンクがありません。`)
};

/**
* | output |
* | --- |
* | "No source code link." |
*
* @param {Upload_Preflight_Source_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_source_missing = /** @type {((inputs?: Upload_Preflight_Source_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Source_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_source_missing(inputs)
	if (locale === "de") return de_upload_preflight_source_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_source_missing(inputs)
	if (locale === "it") return it_upload_preflight_source_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_source_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_source_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_source_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_source_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_source_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_source_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_source_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_source_missing(inputs)
	return en_upload_preflight_source_missing(inputs)
});
