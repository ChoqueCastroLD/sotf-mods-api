/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_KickerInputs */

const en_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free for Windows`)
};

const es_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis para Windows`)
};

const de_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostenlos für Windows`)
};

const fr_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratuit pour Windows`)
};

const it_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis per Windows`)
};

const nl_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis voor Windows`)
};

const pl_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za darmo dla Windows`)
};

const pt_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grátis para Windows`)
};

const ru_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бесплатно для Windows`)
};

const sv_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gratis för Windows`)
};

const tr_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows için ücretsiz`)
};

const zh_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 免费版`)
};

const ja_manager_kicker = /** @type {(inputs: Manager_KickerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 用・無料`)
};

/**
* | output |
* | --- |
* | "Free for Windows" |
*
* @param {Manager_KickerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_kicker = /** @type {((inputs?: Manager_KickerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_KickerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_kicker(inputs)
	if (locale === "de") return de_manager_kicker(inputs)
	if (locale === "fr") return fr_manager_kicker(inputs)
	if (locale === "it") return it_manager_kicker(inputs)
	if (locale === "nl") return nl_manager_kicker(inputs)
	if (locale === "pl") return pl_manager_kicker(inputs)
	if (locale === "pt") return pt_manager_kicker(inputs)
	if (locale === "ru") return ru_manager_kicker(inputs)
	if (locale === "sv") return sv_manager_kicker(inputs)
	if (locale === "tr") return tr_manager_kicker(inputs)
	if (locale === "zh") return zh_manager_kicker(inputs)
	if (locale === "ja") return ja_manager_kicker(inputs)
	return en_manager_kicker(inputs)
});
