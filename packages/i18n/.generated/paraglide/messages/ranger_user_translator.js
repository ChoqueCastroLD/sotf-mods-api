/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_TranslatorInputs */

const en_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translator badge`)
};

const es_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignia de traductor`)
};

const de_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzer-Abzeichen`)
};

const fr_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badge de traducteur`)
};

const it_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivo di traduttore`)
};

const nl_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertalersbadge`)
};

const pl_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaka tłumacza`)
};

const pt_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnia de tradutor`)
};

const ru_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значок переводчика`)
};

const sv_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättarmärke`)
};

const tr_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevirmen rozeti`)
};

const zh_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`译者徽章`)
};

const ja_ranger_user_translator = /** @type {(inputs: Ranger_User_TranslatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳者バッジ`)
};

/**
* | output |
* | --- |
* | "Translator badge" |
*
* @param {Ranger_User_TranslatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_translator = /** @type {((inputs?: Ranger_User_TranslatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_TranslatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_translator(inputs)
	if (locale === "de") return de_ranger_user_translator(inputs)
	if (locale === "fr") return fr_ranger_user_translator(inputs)
	if (locale === "it") return it_ranger_user_translator(inputs)
	if (locale === "nl") return nl_ranger_user_translator(inputs)
	if (locale === "pl") return pl_ranger_user_translator(inputs)
	if (locale === "pt") return pt_ranger_user_translator(inputs)
	if (locale === "ru") return ru_ranger_user_translator(inputs)
	if (locale === "sv") return sv_ranger_user_translator(inputs)
	if (locale === "tr") return tr_ranger_user_translator(inputs)
	if (locale === "zh") return zh_ranger_user_translator(inputs)
	if (locale === "ja") return ja_ranger_user_translator(inputs)
	return en_ranger_user_translator(inputs)
});
