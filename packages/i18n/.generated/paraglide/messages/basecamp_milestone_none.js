/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Milestone_NoneInputs */

const en_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every milestone within reach is already yours.`)
};

const es_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya tienes todos los hitos que están a tu alcance.`)
};

const de_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder erreichbare Meilenstein gehört schon dir.`)
};

const fr_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les paliers à ta portée sont déjà à toi.`)
};

const it_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i traguardi alla tua portata sono già tuoi.`)
};

const nl_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke haalbare mijlpaal is al van jou.`)
};

const pl_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie osiągalne kamienie milowe już są twoje.`)
};

const pt_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os marcos ao seu alcance já são seus.`)
};

const ru_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все досягаемые вехи уже ваши.`)
};

const sv_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla milstolpar inom räckhåll är redan dina.`)
};

const tr_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ulaşılabilecek tüm dönüm noktaları zaten senin.`)
};

const zh_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`触手可及的里程碑都已达成。`)
};

const ja_basecamp_milestone_none = /** @type {(inputs: Basecamp_Milestone_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`手の届くマイルストーンはすべて達成済みです。`)
};

/**
* | output |
* | --- |
* | "Every milestone within reach is already yours." |
*
* @param {Basecamp_Milestone_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_none = /** @type {((inputs?: Basecamp_Milestone_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_none(inputs)
	if (locale === "de") return de_basecamp_milestone_none(inputs)
	if (locale === "fr") return fr_basecamp_milestone_none(inputs)
	if (locale === "it") return it_basecamp_milestone_none(inputs)
	if (locale === "nl") return nl_basecamp_milestone_none(inputs)
	if (locale === "pl") return pl_basecamp_milestone_none(inputs)
	if (locale === "pt") return pt_basecamp_milestone_none(inputs)
	if (locale === "ru") return ru_basecamp_milestone_none(inputs)
	if (locale === "sv") return sv_basecamp_milestone_none(inputs)
	if (locale === "tr") return tr_basecamp_milestone_none(inputs)
	if (locale === "zh") return zh_basecamp_milestone_none(inputs)
	if (locale === "ja") return ja_basecamp_milestone_none(inputs)
	return en_basecamp_milestone_none(inputs)
});
