/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Assignee_MeInputs */

const en_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Me`)
};

const es_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yo`)
};

const de_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mir`)
};

const fr_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moi`)
};

const it_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Me`)
};

const nl_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mij`)
};

const pl_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mnie`)
};

const pt_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eu`)
};

const ru_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мне`)
};

const sv_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mig`)
};

const tr_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ben`)
};

const zh_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我`)
};

const ja_ranger_filter_assignee_me = /** @type {(inputs: Ranger_Filter_Assignee_MeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分`)
};

/**
* | output |
* | --- |
* | "Me" |
*
* @param {Ranger_Filter_Assignee_MeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_assignee_me = /** @type {((inputs?: Ranger_Filter_Assignee_MeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Assignee_MeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_assignee_me(inputs)
	if (locale === "de") return de_ranger_filter_assignee_me(inputs)
	if (locale === "fr") return fr_ranger_filter_assignee_me(inputs)
	if (locale === "it") return it_ranger_filter_assignee_me(inputs)
	if (locale === "nl") return nl_ranger_filter_assignee_me(inputs)
	if (locale === "pl") return pl_ranger_filter_assignee_me(inputs)
	if (locale === "pt") return pt_ranger_filter_assignee_me(inputs)
	if (locale === "ru") return ru_ranger_filter_assignee_me(inputs)
	if (locale === "sv") return sv_ranger_filter_assignee_me(inputs)
	if (locale === "tr") return tr_ranger_filter_assignee_me(inputs)
	if (locale === "zh") return zh_ranger_filter_assignee_me(inputs)
	if (locale === "ja") return ja_ranger_filter_assignee_me(inputs)
	return en_ranger_filter_assignee_me(inputs)
});
