/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Permission_TitleInputs */

const en_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers only`)
};

const es_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo para guardabosques`)
};

const de_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur für Ranger`)
};

const fr_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réservé aux rangers`)
};

const it_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo per i ranger`)
};

const nl_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen voor rangers`)
};

const pl_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko dla strażników`)
};

const pt_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só para guardas`)
};

const ru_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только для рейнджеров`)
};

const sv_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast för rangers`)
};

const tr_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca korucular için`)
};

const zh_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限护林员`)
};

const ja_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャー専用`)
};

/**
* | output |
* | --- |
* | "Rangers only" |
*
* @param {Errors_Permission_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_permission_title = /** @type {((inputs?: Errors_Permission_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Permission_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_permission_title(inputs)
	if (locale === "de") return de_errors_permission_title(inputs)
	if (locale === "fr") return fr_errors_permission_title(inputs)
	if (locale === "it") return it_errors_permission_title(inputs)
	if (locale === "nl") return nl_errors_permission_title(inputs)
	if (locale === "pl") return pl_errors_permission_title(inputs)
	if (locale === "pt") return pt_errors_permission_title(inputs)
	if (locale === "ru") return ru_errors_permission_title(inputs)
	if (locale === "sv") return sv_errors_permission_title(inputs)
	if (locale === "tr") return tr_errors_permission_title(inputs)
	if (locale === "zh") return zh_errors_permission_title(inputs)
	if (locale === "ja") return ja_errors_permission_title(inputs)
	return en_errors_permission_title(inputs)
});
