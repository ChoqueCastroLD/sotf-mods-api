/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Unsaved_StayInputs */

const en_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep editing`)
};

const es_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguir editando`)
};

const de_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter bearbeiten`)
};

const fr_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer à modifier`)
};

const it_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua a modificare`)
};

const nl_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verder bewerken`)
};

const pl_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj dalej`)
};

const pt_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar editando`)
};

const ru_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить редактирование`)
};

const sv_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt redigera`)
};

const tr_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenlemeye devam et`)
};

const zh_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续编辑`)
};

const ja_basecamp_unsaved_stay = /** @type {(inputs: Basecamp_Unsaved_StayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集を続ける`)
};

/**
* | output |
* | --- |
* | "Keep editing" |
*
* @param {Basecamp_Unsaved_StayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_unsaved_stay = /** @type {((inputs?: Basecamp_Unsaved_StayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Unsaved_StayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_unsaved_stay(inputs)
	if (locale === "de") return de_basecamp_unsaved_stay(inputs)
	if (locale === "fr") return fr_basecamp_unsaved_stay(inputs)
	if (locale === "it") return it_basecamp_unsaved_stay(inputs)
	if (locale === "nl") return nl_basecamp_unsaved_stay(inputs)
	if (locale === "pl") return pl_basecamp_unsaved_stay(inputs)
	if (locale === "pt") return pt_basecamp_unsaved_stay(inputs)
	if (locale === "ru") return ru_basecamp_unsaved_stay(inputs)
	if (locale === "sv") return sv_basecamp_unsaved_stay(inputs)
	if (locale === "tr") return tr_basecamp_unsaved_stay(inputs)
	if (locale === "zh") return zh_basecamp_unsaved_stay(inputs)
	if (locale === "ja") return ja_basecamp_unsaved_stay(inputs)
	return en_basecamp_unsaved_stay(inputs)
});
