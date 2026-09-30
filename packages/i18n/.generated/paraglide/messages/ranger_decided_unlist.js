/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_UnlistInputs */

const en_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unlisted: ${i?.title}`)
};

const es_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oculto del listado: ${i?.title}`)
};

const de_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nicht mehr gelistet: ${i?.title}`)
};

const fr_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retiré des listes : ${i?.title}`)
};

const it_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tolto dagli elenchi: ${i?.title}`)
};

const nl_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uit de lijsten gehaald: ${i?.title}`)
};

const pl_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto z list: ${i?.title}`)
};

const pt_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tirado das listas: ${i?.title}`)
};

const ru_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрано из списков: ${i?.title}`)
};

const sv_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Borttagen ur listorna: ${i?.title}`)
};

const tr_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Listelerden kaldırıldı: ${i?.title}`)
};

const zh_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已从列表隐藏：${i?.title}`)
};

const ja_ranger_decided_unlist = /** @type {(inputs: Ranger_Decided_UnlistInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`一覧から外しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Unlisted: {title}" |
*
* @param {Ranger_Decided_UnlistInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_unlist = /** @type {((inputs: Ranger_Decided_UnlistInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_UnlistInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_unlist(inputs)
	if (locale === "de") return de_ranger_decided_unlist(inputs)
	if (locale === "fr") return fr_ranger_decided_unlist(inputs)
	if (locale === "it") return it_ranger_decided_unlist(inputs)
	if (locale === "nl") return nl_ranger_decided_unlist(inputs)
	if (locale === "pl") return pl_ranger_decided_unlist(inputs)
	if (locale === "pt") return pt_ranger_decided_unlist(inputs)
	if (locale === "ru") return ru_ranger_decided_unlist(inputs)
	if (locale === "sv") return sv_ranger_decided_unlist(inputs)
	if (locale === "tr") return tr_ranger_decided_unlist(inputs)
	if (locale === "zh") return zh_ranger_decided_unlist(inputs)
	if (locale === "ja") return ja_ranger_decided_unlist(inputs)
	return en_ranger_decided_unlist(inputs)
});
