/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Severity_ErrorInputs */

const en_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`blocks publication`)
};

const es_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bloquea la publicación`)
};

const de_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`blockiert die Veröffentlichung`)
};

const fr_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bloque la publication`)
};

const it_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`blocca la pubblicazione`)
};

const nl_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`blokkeert publicatie`)
};

const pl_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`blokuje publikację`)
};

const pt_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bloqueia a publicação`)
};

const ru_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`блокирует публикацию`)
};

const sv_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`blockerar publicering`)
};

const tr_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yayımlamayı engeller`)
};

const zh_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阻止发布`)
};

const ja_ranger_severity_error = /** @type {(inputs: Ranger_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開をブロック`)
};

/**
* | output |
* | --- |
* | "blocks publication" |
*
* @param {Ranger_Severity_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_severity_error = /** @type {((inputs?: Ranger_Severity_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Severity_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_severity_error(inputs)
	if (locale === "de") return de_ranger_severity_error(inputs)
	if (locale === "fr") return fr_ranger_severity_error(inputs)
	if (locale === "it") return it_ranger_severity_error(inputs)
	if (locale === "nl") return nl_ranger_severity_error(inputs)
	if (locale === "pl") return pl_ranger_severity_error(inputs)
	if (locale === "pt") return pt_ranger_severity_error(inputs)
	if (locale === "ru") return ru_ranger_severity_error(inputs)
	if (locale === "sv") return sv_ranger_severity_error(inputs)
	if (locale === "tr") return tr_ranger_severity_error(inputs)
	if (locale === "zh") return zh_ranger_severity_error(inputs)
	if (locale === "ja") return ja_ranger_severity_error(inputs)
	return en_ranger_severity_error(inputs)
});
