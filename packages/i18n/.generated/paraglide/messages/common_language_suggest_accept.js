/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Language_Suggest_AcceptInputs */

const en_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch`)
};

const es_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar`)
};

const de_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wechseln`)
};

const fr_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer`)
};

const it_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia`)
};

const nl_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wisselen`)
};

const pl_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień`)
};

const pt_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mudar`)
};

const ru_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переключить`)
};

const sv_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt`)
};

const tr_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değiştir`)
};

const zh_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切换`)
};

const ja_common_language_suggest_accept = /** @type {(inputs: Common_Language_Suggest_AcceptInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切り替える`)
};

/**
* | output |
* | --- |
* | "Switch" |
*
* @param {Common_Language_Suggest_AcceptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_language_suggest_accept = /** @type {((inputs?: Common_Language_Suggest_AcceptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Language_Suggest_AcceptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_language_suggest_accept(inputs)
	if (locale === "de") return de_common_language_suggest_accept(inputs)
	if (locale === "fr") return fr_common_language_suggest_accept(inputs)
	if (locale === "it") return it_common_language_suggest_accept(inputs)
	if (locale === "nl") return nl_common_language_suggest_accept(inputs)
	if (locale === "pl") return pl_common_language_suggest_accept(inputs)
	if (locale === "pt") return pt_common_language_suggest_accept(inputs)
	if (locale === "ru") return ru_common_language_suggest_accept(inputs)
	if (locale === "sv") return sv_common_language_suggest_accept(inputs)
	if (locale === "tr") return tr_common_language_suggest_accept(inputs)
	if (locale === "zh") return zh_common_language_suggest_accept(inputs)
	if (locale === "ja") return ja_common_language_suggest_accept(inputs)
	return en_common_language_suggest_accept(inputs)
});
