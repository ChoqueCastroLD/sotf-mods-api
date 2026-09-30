/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assign_DoneInputs */

const en_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You took this item.`)
};

const es_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te has asignado este elemento.`)
};

const de_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast diesen Eintrag übernommen.`)
};

const fr_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet élément t’est attribué.`)
};

const it_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai preso questo elemento.`)
};

const nl_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt dit item opgepakt.`)
};

const pl_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wziąłeś ten element.`)
};

const pt_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você assumiu este item.`)
};

const ru_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы взяли этот элемент.`)
};

const sv_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du tog det här ärendet.`)
};

const tr_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu öğeyi üstlendin.`)
};

const zh_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已认领此项。`)
};

const ja_ranger_assign_done = /** @type {(inputs: Ranger_Assign_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この項目を担当しました。`)
};

/**
* | output |
* | --- |
* | "You took this item." |
*
* @param {Ranger_Assign_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assign_done = /** @type {((inputs?: Ranger_Assign_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assign_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assign_done(inputs)
	if (locale === "de") return de_ranger_assign_done(inputs)
	if (locale === "fr") return fr_ranger_assign_done(inputs)
	if (locale === "it") return it_ranger_assign_done(inputs)
	if (locale === "nl") return nl_ranger_assign_done(inputs)
	if (locale === "pl") return pl_ranger_assign_done(inputs)
	if (locale === "pt") return pt_ranger_assign_done(inputs)
	if (locale === "ru") return ru_ranger_assign_done(inputs)
	if (locale === "sv") return sv_ranger_assign_done(inputs)
	if (locale === "tr") return tr_ranger_assign_done(inputs)
	if (locale === "zh") return zh_ranger_assign_done(inputs)
	if (locale === "ja") return ja_ranger_assign_done(inputs)
	return en_ranger_assign_done(inputs)
});
