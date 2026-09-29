/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Password_Strength_0Inputs */

const en_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too weak`)
};

const es_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demasiado débil`)
};

const de_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu schwach`)
};

const fr_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trop faible`)
};

const it_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Troppo debole`)
};

const nl_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te zwak`)
};

const pl_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Za słabe`)
};

const pt_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fraca demais`)
};

const ru_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слишком слабый`)
};

const sv_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För svagt`)
};

const tr_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok zayıf`)
};

const zh_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`太弱`)
};

const ja_ui_password_strength_0 = /** @type {(inputs: Ui_Password_Strength_0Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`弱すぎます`)
};

/**
* | output |
* | --- |
* | "Too weak" |
*
* @param {Ui_Password_Strength_0Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_password_strength_0 = /** @type {((inputs?: Ui_Password_Strength_0Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Password_Strength_0Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_password_strength_0(inputs)
	if (locale === "de") return de_ui_password_strength_0(inputs)
	if (locale === "fr") return fr_ui_password_strength_0(inputs)
	if (locale === "it") return it_ui_password_strength_0(inputs)
	if (locale === "nl") return nl_ui_password_strength_0(inputs)
	if (locale === "pl") return pl_ui_password_strength_0(inputs)
	if (locale === "pt") return pt_ui_password_strength_0(inputs)
	if (locale === "ru") return ru_ui_password_strength_0(inputs)
	if (locale === "sv") return sv_ui_password_strength_0(inputs)
	if (locale === "tr") return tr_ui_password_strength_0(inputs)
	if (locale === "zh") return zh_ui_password_strength_0(inputs)
	if (locale === "ja") return ja_ui_password_strength_0(inputs)
	return en_ui_password_strength_0(inputs)
});
