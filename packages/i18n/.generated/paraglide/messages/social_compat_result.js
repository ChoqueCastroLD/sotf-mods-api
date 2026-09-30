/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_ResultInputs */

const en_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Did it work?`)
};

const es_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Funcionó?`)
};

const de_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hat es funktioniert?`)
};

const fr_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça a marché ?`)
};

const it_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha funzionato?`)
};

const nl_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkte het?`)
};

const pl_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy działało?`)
};

const pt_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funcionou?`)
};

const ru_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сработало?`)
};

const sv_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerade det?`)
};

const tr_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalıştı mı?`)
};

const zh_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`能用吗？`)
};

const ja_social_compat_result = /** @type {(inputs: Social_Compat_ResultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動きましたか？`)
};

/**
* | output |
* | --- |
* | "Did it work?" |
*
* @param {Social_Compat_ResultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_result = /** @type {((inputs?: Social_Compat_ResultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_ResultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_result(inputs)
	if (locale === "de") return de_social_compat_result(inputs)
	if (locale === "fr") return fr_social_compat_result(inputs)
	if (locale === "it") return it_social_compat_result(inputs)
	if (locale === "nl") return nl_social_compat_result(inputs)
	if (locale === "pl") return pl_social_compat_result(inputs)
	if (locale === "pt") return pt_social_compat_result(inputs)
	if (locale === "ru") return ru_social_compat_result(inputs)
	if (locale === "sv") return sv_social_compat_result(inputs)
	if (locale === "tr") return tr_social_compat_result(inputs)
	if (locale === "zh") return zh_social_compat_result(inputs)
	if (locale === "ja") return ja_social_compat_result(inputs)
	return en_social_compat_result(inputs)
});
