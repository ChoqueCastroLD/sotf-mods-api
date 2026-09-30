/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Translator_OnInputs */

const en_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translator badge granted.`)
};

const es_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignia de traductor concedida.`)
};

const de_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzer-Abzeichen vergeben.`)
};

const fr_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badge de traducteur attribué.`)
};

const it_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivo di traduttore assegnato.`)
};

const nl_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertalersbadge toegekend.`)
};

const pl_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przyznano odznakę tłumacza.`)
};

const pt_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnia de tradutor concedida.`)
};

const ru_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значок переводчика выдан.`)
};

const sv_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättarmärket delades ut.`)
};

const tr_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevirmen rozeti verildi.`)
};

const zh_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已授予译者徽章。`)
};

const ja_ranger_user_translator_on = /** @type {(inputs: Ranger_User_Translator_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳者バッジを付与しました。`)
};

/**
* | output |
* | --- |
* | "Translator badge granted." |
*
* @param {Ranger_User_Translator_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_translator_on = /** @type {((inputs?: Ranger_User_Translator_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Translator_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_translator_on(inputs)
	if (locale === "de") return de_ranger_user_translator_on(inputs)
	if (locale === "fr") return fr_ranger_user_translator_on(inputs)
	if (locale === "it") return it_ranger_user_translator_on(inputs)
	if (locale === "nl") return nl_ranger_user_translator_on(inputs)
	if (locale === "pl") return pl_ranger_user_translator_on(inputs)
	if (locale === "pt") return pt_ranger_user_translator_on(inputs)
	if (locale === "ru") return ru_ranger_user_translator_on(inputs)
	if (locale === "sv") return sv_ranger_user_translator_on(inputs)
	if (locale === "tr") return tr_ranger_user_translator_on(inputs)
	if (locale === "zh") return zh_ranger_user_translator_on(inputs)
	if (locale === "ja") return ja_ranger_user_translator_on(inputs)
	return en_ranger_user_translator_on(inputs)
});
