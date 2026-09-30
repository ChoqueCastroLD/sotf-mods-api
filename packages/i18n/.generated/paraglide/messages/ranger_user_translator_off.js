/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Translator_OffInputs */

const en_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translator badge removed.`)
};

const es_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignia de traductor retirada.`)
};

const de_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzer-Abzeichen entfernt.`)
};

const fr_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badge de traducteur retiré.`)
};

const it_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivo di traduttore rimosso.`)
};

const nl_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertalersbadge verwijderd.`)
};

const pl_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto odznakę tłumacza.`)
};

const pt_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnia de tradutor removida.`)
};

const ru_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значок переводчика снят.`)
};

const sv_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättarmärket togs bort.`)
};

const tr_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevirmen rozeti kaldırıldı.`)
};

const zh_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已移除译者徽章。`)
};

const ja_ranger_user_translator_off = /** @type {(inputs: Ranger_User_Translator_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳者バッジを外しました。`)
};

/**
* | output |
* | --- |
* | "Translator badge removed." |
*
* @param {Ranger_User_Translator_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_translator_off = /** @type {((inputs?: Ranger_User_Translator_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Translator_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_translator_off(inputs)
	if (locale === "de") return de_ranger_user_translator_off(inputs)
	if (locale === "fr") return fr_ranger_user_translator_off(inputs)
	if (locale === "it") return it_ranger_user_translator_off(inputs)
	if (locale === "nl") return nl_ranger_user_translator_off(inputs)
	if (locale === "pl") return pl_ranger_user_translator_off(inputs)
	if (locale === "pt") return pt_ranger_user_translator_off(inputs)
	if (locale === "ru") return ru_ranger_user_translator_off(inputs)
	if (locale === "sv") return sv_ranger_user_translator_off(inputs)
	if (locale === "tr") return tr_ranger_user_translator_off(inputs)
	if (locale === "zh") return zh_ranger_user_translator_off(inputs)
	if (locale === "ja") return ja_ranger_user_translator_off(inputs)
	return en_ranger_user_translator_off(inputs)
});
