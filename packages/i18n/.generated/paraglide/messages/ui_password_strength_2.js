/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Password_Strength_2Inputs */

const en_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fair`)
};

const es_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceptable`)
};

const de_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mittel`)
};

const fr_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moyen`)
};

const it_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discreta`)
};

const nl_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redelijk`)
};

const pl_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Średnie`)
};

const pt_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Razoável`)
};

const ru_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Средний`)
};

const sv_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänt`)
};

const tr_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orta`)
};

const zh_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一般`)
};

const ja_ui_password_strength_2 = /** @type {(inputs: Ui_Password_Strength_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`普通`)
};

/**
* | output |
* | --- |
* | "Fair" |
*
* @param {Ui_Password_Strength_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_password_strength_2 = /** @type {((inputs?: Ui_Password_Strength_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Password_Strength_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_password_strength_2(inputs)
	if (locale === "de") return de_ui_password_strength_2(inputs)
	if (locale === "fr") return fr_ui_password_strength_2(inputs)
	if (locale === "it") return it_ui_password_strength_2(inputs)
	if (locale === "nl") return nl_ui_password_strength_2(inputs)
	if (locale === "pl") return pl_ui_password_strength_2(inputs)
	if (locale === "pt") return pt_ui_password_strength_2(inputs)
	if (locale === "ru") return ru_ui_password_strength_2(inputs)
	if (locale === "sv") return sv_ui_password_strength_2(inputs)
	if (locale === "tr") return tr_ui_password_strength_2(inputs)
	if (locale === "zh") return zh_ui_password_strength_2(inputs)
	if (locale === "ja") return ja_ui_password_strength_2(inputs)
	return en_ui_password_strength_2(inputs)
});
