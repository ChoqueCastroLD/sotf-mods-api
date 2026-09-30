/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Unlinked_ToastInputs */

const en_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord unlinked`)
};

const es_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord desvinculado`)
};

const de_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord getrennt`)
};

const fr_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord dissocié`)
};

const it_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord scollegato`)
};

const nl_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord ontkoppeld`)
};

const pl_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odłączono Discord`)
};

const pt_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord desvinculado`)
};

const ru_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord отвязан`)
};

const sv_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord bortkopplat`)
};

const tr_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord bağlantısı kaldırıldı`)
};

const zh_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消关联 Discord`)
};

const ja_oauth_unlinked_toast = /** @type {(inputs: Oauth_Unlinked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord の連携を解除しました`)
};

/**
* | output |
* | --- |
* | "Discord unlinked" |
*
* @param {Oauth_Unlinked_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_unlinked_toast = /** @type {((inputs?: Oauth_Unlinked_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Unlinked_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_unlinked_toast(inputs)
	if (locale === "de") return de_oauth_unlinked_toast(inputs)
	if (locale === "fr") return fr_oauth_unlinked_toast(inputs)
	if (locale === "it") return it_oauth_unlinked_toast(inputs)
	if (locale === "nl") return nl_oauth_unlinked_toast(inputs)
	if (locale === "pl") return pl_oauth_unlinked_toast(inputs)
	if (locale === "pt") return pt_oauth_unlinked_toast(inputs)
	if (locale === "ru") return ru_oauth_unlinked_toast(inputs)
	if (locale === "sv") return sv_oauth_unlinked_toast(inputs)
	if (locale === "tr") return tr_oauth_unlinked_toast(inputs)
	if (locale === "zh") return zh_oauth_unlinked_toast(inputs)
	if (locale === "ja") return ja_oauth_unlinked_toast(inputs)
	return en_oauth_unlinked_toast(inputs)
});
