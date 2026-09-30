/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Not_A_Mod_TitleInputs */

const en_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not a mod`)
};

const es_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No es un mod`)
};

const de_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Mod`)
};

const fr_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas un mod`)
};

const it_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è una mod`)
};

const nl_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mod`)
};

const pl_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie mod`)
};

const pt_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não é um mod`)
};

const ru_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это не мод`)
};

const sv_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte en modd`)
};

const tr_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod değil`)
};

const zh_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是模组`)
};

const ja_ranger_template_not_a_mod_title = /** @type {(inputs: Ranger_Template_Not_A_Mod_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODではない`)
};

/**
* | output |
* | --- |
* | "Not a mod" |
*
* @param {Ranger_Template_Not_A_Mod_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_not_a_mod_title = /** @type {((inputs?: Ranger_Template_Not_A_Mod_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Not_A_Mod_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_not_a_mod_title(inputs)
	if (locale === "de") return de_ranger_template_not_a_mod_title(inputs)
	if (locale === "fr") return fr_ranger_template_not_a_mod_title(inputs)
	if (locale === "it") return it_ranger_template_not_a_mod_title(inputs)
	if (locale === "nl") return nl_ranger_template_not_a_mod_title(inputs)
	if (locale === "pl") return pl_ranger_template_not_a_mod_title(inputs)
	if (locale === "pt") return pt_ranger_template_not_a_mod_title(inputs)
	if (locale === "ru") return ru_ranger_template_not_a_mod_title(inputs)
	if (locale === "sv") return sv_ranger_template_not_a_mod_title(inputs)
	if (locale === "tr") return tr_ranger_template_not_a_mod_title(inputs)
	if (locale === "zh") return zh_ranger_template_not_a_mod_title(inputs)
	if (locale === "ja") return ja_ranger_template_not_a_mod_title(inputs)
	return en_ranger_template_not_a_mod_title(inputs)
});
