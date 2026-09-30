/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Platform_MissingInputs */

const en_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No platform set.`)
};

const es_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin plataforma indicada.`)
};

const de_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Plattform angegeben.`)
};

const fr_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune plateforme indiquée.`)
};

const it_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna piattaforma indicata.`)
};

const nl_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen platform ingesteld.`)
};

const pl_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ustawiono platformy.`)
};

const pt_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma plataforma definida.`)
};

const ru_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа не указана.`)
};

const sv_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen plattform angiven.`)
};

const tr_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform belirtilmedi.`)
};

const zh_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未设置平台。`)
};

const ja_upload_preflight_platform_missing = /** @type {(inputs: Upload_Preflight_Platform_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォームが未設定です。`)
};

/**
* | output |
* | --- |
* | "No platform set." |
*
* @param {Upload_Preflight_Platform_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_platform_missing = /** @type {((inputs?: Upload_Preflight_Platform_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Platform_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_platform_missing(inputs)
	if (locale === "de") return de_upload_preflight_platform_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_platform_missing(inputs)
	if (locale === "it") return it_upload_preflight_platform_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_platform_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_platform_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_platform_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_platform_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_platform_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_platform_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_platform_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_platform_missing(inputs)
	return en_upload_preflight_platform_missing(inputs)
});
