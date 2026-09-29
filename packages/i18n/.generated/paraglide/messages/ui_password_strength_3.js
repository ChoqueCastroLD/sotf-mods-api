/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Password_Strength_3Inputs */

const en_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strong`)
};

const es_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fuerte`)
};

const de_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stark`)
};

const fr_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fort`)
};

const it_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forte`)
};

const nl_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sterk`)
};

const pl_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silne`)
};

const pt_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forte`)
};

const ru_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Надёжный`)
};

const sv_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starkt`)
};

const tr_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güçlü`)
};

const zh_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`强`)
};

const ja_ui_password_strength_3 = /** @type {(inputs: Ui_Password_Strength_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`強い`)
};

/**
* | output |
* | --- |
* | "Strong" |
*
* @param {Ui_Password_Strength_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_password_strength_3 = /** @type {((inputs?: Ui_Password_Strength_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Password_Strength_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_password_strength_3(inputs)
	if (locale === "de") return de_ui_password_strength_3(inputs)
	if (locale === "fr") return fr_ui_password_strength_3(inputs)
	if (locale === "it") return it_ui_password_strength_3(inputs)
	if (locale === "nl") return nl_ui_password_strength_3(inputs)
	if (locale === "pl") return pl_ui_password_strength_3(inputs)
	if (locale === "pt") return pt_ui_password_strength_3(inputs)
	if (locale === "ru") return ru_ui_password_strength_3(inputs)
	if (locale === "sv") return sv_ui_password_strength_3(inputs)
	if (locale === "tr") return tr_ui_password_strength_3(inputs)
	if (locale === "zh") return zh_ui_password_strength_3(inputs)
	if (locale === "ja") return ja_ui_password_strength_3(inputs)
	return en_ui_password_strength_3(inputs)
});
