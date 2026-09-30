/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_LabelInputs */

const en_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For you`)
};

const es_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para ti`)
};

const de_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für dich`)
};

const fr_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour vous`)
};

const it_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per te`)
};

const nl_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor jou`)
};

const pl_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla ciebie`)
};

const pt_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para você`)
};

const ru_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для вас`)
};

const sv_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För dig`)
};

const tr_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senin için`)
};

const zh_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为你推荐`)
};

const ja_landing_personal_label = /** @type {(inputs: Landing_Personal_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなた向け`)
};

/**
* | output |
* | --- |
* | "For you" |
*
* @param {Landing_Personal_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_label = /** @type {((inputs?: Landing_Personal_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_label(inputs)
	if (locale === "de") return de_landing_personal_label(inputs)
	if (locale === "fr") return fr_landing_personal_label(inputs)
	if (locale === "it") return it_landing_personal_label(inputs)
	if (locale === "nl") return nl_landing_personal_label(inputs)
	if (locale === "pl") return pl_landing_personal_label(inputs)
	if (locale === "pt") return pt_landing_personal_label(inputs)
	if (locale === "ru") return ru_landing_personal_label(inputs)
	if (locale === "sv") return sv_landing_personal_label(inputs)
	if (locale === "tr") return tr_landing_personal_label(inputs)
	if (locale === "zh") return zh_landing_personal_label(inputs)
	if (locale === "ja") return ja_landing_personal_label(inputs)
	return en_landing_personal_label(inputs)
});
