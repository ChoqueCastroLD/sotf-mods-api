/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Empty_Unread_TextInputs */

const en_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have read everything that matches this filter.`)
};

const es_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has leído todo lo que coincide con este filtro.`)
};

const de_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast alles gelesen, was zu diesem Filter passt.`)
};

const fr_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez tout lu pour ce filtre.`)
};

const it_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai letto tutto ciò che corrisponde a questo filtro.`)
};

const nl_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt alles gelezen wat bij dit filter past.`)
};

const pl_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeczytano wszystko, co pasuje do tego filtra.`)
};

const pt_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você leu tudo o que corresponde a este filtro.`)
};

const ru_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что подходит под этот фильтр, прочитано.`)
};

const sv_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har läst allt som matchar det här filtret.`)
};

const tr_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtreye uyan her şeyi okudunuz.`)
};

const zh_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`符合此筛选条件的通知都已读。`)
};

const ja_signals_empty_unread_text = /** @type {(inputs: Signals_Empty_Unread_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィルターに一致する通知はすべて既読です。`)
};

/**
* | output |
* | --- |
* | "You have read everything that matches this filter." |
*
* @param {Signals_Empty_Unread_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_empty_unread_text = /** @type {((inputs?: Signals_Empty_Unread_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Empty_Unread_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_empty_unread_text(inputs)
	if (locale === "de") return de_signals_empty_unread_text(inputs)
	if (locale === "fr") return fr_signals_empty_unread_text(inputs)
	if (locale === "it") return it_signals_empty_unread_text(inputs)
	if (locale === "nl") return nl_signals_empty_unread_text(inputs)
	if (locale === "pl") return pl_signals_empty_unread_text(inputs)
	if (locale === "pt") return pt_signals_empty_unread_text(inputs)
	if (locale === "ru") return ru_signals_empty_unread_text(inputs)
	if (locale === "sv") return sv_signals_empty_unread_text(inputs)
	if (locale === "tr") return tr_signals_empty_unread_text(inputs)
	if (locale === "zh") return zh_signals_empty_unread_text(inputs)
	if (locale === "ja") return ja_signals_empty_unread_text(inputs)
	return en_signals_empty_unread_text(inputs)
});
