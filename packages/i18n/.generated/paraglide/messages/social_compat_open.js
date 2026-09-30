/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_OpenInputs */

const en_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report compatibility`)
};

const es_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportar compatibilidad`)
};

const de_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität melden`)
};

const fr_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler la compatibilité`)
};

const it_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala la compatibilità`)
};

const nl_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit melden`)
};

const pl_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś zgodność`)
};

const pt_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatar compatibilidade`)
};

const ru_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить о совместимости`)
};

const sv_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera kompatibilitet`)
};

const tr_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk bildir`)
};

const zh_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告兼容性`)
};

const ja_social_compat_open = /** @type {(inputs: Social_Compat_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性を報告`)
};

/**
* | output |
* | --- |
* | "Report compatibility" |
*
* @param {Social_Compat_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_open = /** @type {((inputs?: Social_Compat_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_open(inputs)
	if (locale === "de") return de_social_compat_open(inputs)
	if (locale === "fr") return fr_social_compat_open(inputs)
	if (locale === "it") return it_social_compat_open(inputs)
	if (locale === "nl") return nl_social_compat_open(inputs)
	if (locale === "pl") return pl_social_compat_open(inputs)
	if (locale === "pt") return pt_social_compat_open(inputs)
	if (locale === "ru") return ru_social_compat_open(inputs)
	if (locale === "sv") return sv_social_compat_open(inputs)
	if (locale === "tr") return tr_social_compat_open(inputs)
	if (locale === "zh") return zh_social_compat_open(inputs)
	if (locale === "ja") return ja_social_compat_open(inputs)
	return en_social_compat_open(inputs)
});
