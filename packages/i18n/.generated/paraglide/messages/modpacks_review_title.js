/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_TitleInputs */

const en_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const es_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const de_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const fr_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const it_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack`)
};

const nl_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const pl_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacki`)
};

const pt_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks`)
};

const ru_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаки`)
};

const sv_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpaket`)
};

const tr_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketleri`)
};

const zh_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`整合包`)
};

const ja_modpacks_review_title = /** @type {(inputs: Modpacks_Review_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパック`)
};

/**
* | output |
* | --- |
* | "Modpacks" |
*
* @param {Modpacks_Review_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_title = /** @type {((inputs?: Modpacks_Review_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_title(inputs)
	if (locale === "de") return de_modpacks_review_title(inputs)
	if (locale === "fr") return fr_modpacks_review_title(inputs)
	if (locale === "it") return it_modpacks_review_title(inputs)
	if (locale === "nl") return nl_modpacks_review_title(inputs)
	if (locale === "pl") return pl_modpacks_review_title(inputs)
	if (locale === "pt") return pt_modpacks_review_title(inputs)
	if (locale === "ru") return ru_modpacks_review_title(inputs)
	if (locale === "sv") return sv_modpacks_review_title(inputs)
	if (locale === "tr") return tr_modpacks_review_title(inputs)
	if (locale === "zh") return zh_modpacks_review_title(inputs)
	if (locale === "ja") return ja_modpacks_review_title(inputs)
	return en_modpacks_review_title(inputs)
});
