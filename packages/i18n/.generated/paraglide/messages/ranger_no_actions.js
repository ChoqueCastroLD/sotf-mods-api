/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_No_ActionsInputs */

const en_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to decide here any more.`)
};

const es_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya no queda nada que decidir aquí.`)
};

const de_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier gibt es nichts mehr zu entscheiden.`)
};

const fr_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il n’y a plus rien à décider ici.`)
};

const it_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui non c’è più niente da decidere.`)
};

const nl_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier valt niets meer te beslissen.`)
};

const pl_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma tu już nic do zdecydowania.`)
};

const pt_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não há mais nada para decidir aqui.`)
};

const ru_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь больше нечего решать.`)
};

const sv_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns inget mer att besluta här.`)
};

const tr_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada karar verilecek bir şey kalmadı.`)
};

const zh_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里已无需再作决定。`)
};

const ja_ranger_no_actions = /** @type {(inputs: Ranger_No_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここで判断することはもうありません。`)
};

/**
* | output |
* | --- |
* | "Nothing to decide here any more." |
*
* @param {Ranger_No_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_no_actions = /** @type {((inputs?: Ranger_No_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_No_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_no_actions(inputs)
	if (locale === "de") return de_ranger_no_actions(inputs)
	if (locale === "fr") return fr_ranger_no_actions(inputs)
	if (locale === "it") return it_ranger_no_actions(inputs)
	if (locale === "nl") return nl_ranger_no_actions(inputs)
	if (locale === "pl") return pl_ranger_no_actions(inputs)
	if (locale === "pt") return pt_ranger_no_actions(inputs)
	if (locale === "ru") return ru_ranger_no_actions(inputs)
	if (locale === "sv") return sv_ranger_no_actions(inputs)
	if (locale === "tr") return tr_ranger_no_actions(inputs)
	if (locale === "zh") return zh_ranger_no_actions(inputs)
	if (locale === "ja") return ja_ranger_no_actions(inputs)
	return en_ranger_no_actions(inputs)
});
