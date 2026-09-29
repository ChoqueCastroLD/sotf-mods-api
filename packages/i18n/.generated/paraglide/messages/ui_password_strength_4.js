/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Password_Strength_4Inputs */

const en_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Very strong`)
};

const es_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muy fuerte`)
};

const de_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sehr stark`)
};

const fr_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Très fort`)
};

const it_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Molto forte`)
};

const nl_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeer sterk`)
};

const pl_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bardzo silne`)
};

const pt_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muito forte`)
};

const ru_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очень надёжный`)
};

const sv_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mycket starkt`)
};

const tr_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok güçlü`)
};

const zh_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非常强`)
};

const ja_ui_password_strength_4 = /** @type {(inputs: Ui_Password_Strength_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`とても強い`)
};

/**
* | output |
* | --- |
* | "Very strong" |
*
* @param {Ui_Password_Strength_4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_password_strength_4 = /** @type {((inputs?: Ui_Password_Strength_4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Password_Strength_4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_password_strength_4(inputs)
	if (locale === "de") return de_ui_password_strength_4(inputs)
	if (locale === "fr") return fr_ui_password_strength_4(inputs)
	if (locale === "it") return it_ui_password_strength_4(inputs)
	if (locale === "nl") return nl_ui_password_strength_4(inputs)
	if (locale === "pl") return pl_ui_password_strength_4(inputs)
	if (locale === "pt") return pt_ui_password_strength_4(inputs)
	if (locale === "ru") return ru_ui_password_strength_4(inputs)
	if (locale === "sv") return sv_ui_password_strength_4(inputs)
	if (locale === "tr") return tr_ui_password_strength_4(inputs)
	if (locale === "zh") return zh_ui_password_strength_4(inputs)
	if (locale === "ja") return ja_ui_password_strength_4(inputs)
	return en_ui_password_strength_4(inputs)
});
