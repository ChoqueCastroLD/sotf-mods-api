/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Linked_ToastInputs */

const en_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord linked`)
};

const es_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord vinculado`)
};

const de_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord verknüpft`)
};

const fr_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord lié`)
};

const it_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord collegato`)
};

const nl_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord gekoppeld`)
};

const pl_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połączono Discord`)
};

const pt_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord vinculado`)
};

const ru_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord привязан`)
};

const sv_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord kopplat`)
};

const tr_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord bağlandı`)
};

const zh_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关联 Discord`)
};

const ja_oauth_linked_toast = /** @type {(inputs: Oauth_Linked_ToastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord を連携しました`)
};

/**
* | output |
* | --- |
* | "Discord linked" |
*
* @param {Oauth_Linked_ToastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_linked_toast = /** @type {((inputs?: Oauth_Linked_ToastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Linked_ToastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_linked_toast(inputs)
	if (locale === "de") return de_oauth_linked_toast(inputs)
	if (locale === "fr") return fr_oauth_linked_toast(inputs)
	if (locale === "it") return it_oauth_linked_toast(inputs)
	if (locale === "nl") return nl_oauth_linked_toast(inputs)
	if (locale === "pl") return pl_oauth_linked_toast(inputs)
	if (locale === "pt") return pt_oauth_linked_toast(inputs)
	if (locale === "ru") return ru_oauth_linked_toast(inputs)
	if (locale === "sv") return sv_oauth_linked_toast(inputs)
	if (locale === "tr") return tr_oauth_linked_toast(inputs)
	if (locale === "zh") return zh_oauth_linked_toast(inputs)
	if (locale === "ja") return ja_oauth_linked_toast(inputs)
	return en_oauth_linked_toast(inputs)
});
