/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_AttentionInputs */

const en_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This author has rejected mods or active sanctions.`)
};

const es_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este autor tiene mods rechazados o sanciones activas.`)
};

const de_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Autor hat abgelehnte Mods oder aktive Sanktionen.`)
};

const fr_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet auteur a des mods refusés ou des sanctions actives.`)
};

const it_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo autore ha mod rifiutate o sanzioni attive.`)
};

const nl_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze maker heeft afgewezen mods of actieve sancties.`)
};

const pl_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten autor ma odrzucone mody lub aktywne sankcje.`)
};

const pt_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este autor tem mods rejeitados ou sanções ativas.`)
};

const ru_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У этого автора есть отклонённые моды или активные санкции.`)
};

const sv_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här skaparen har avvisade moddar eller aktiva sanktioner.`)
};

const tr_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yazarın reddedilmiş modları veya etkin yaptırımları var.`)
};

const zh_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该作者有被拒的模组或生效中的处罚。`)
};

const ja_ranger_history_attention = /** @type {(inputs: Ranger_History_AttentionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この作者には却下されたMODか有効な制裁があります。`)
};

/**
* | output |
* | --- |
* | "This author has rejected mods or active sanctions." |
*
* @param {Ranger_History_AttentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_attention = /** @type {((inputs?: Ranger_History_AttentionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_AttentionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_attention(inputs)
	if (locale === "de") return de_ranger_history_attention(inputs)
	if (locale === "fr") return fr_ranger_history_attention(inputs)
	if (locale === "it") return it_ranger_history_attention(inputs)
	if (locale === "nl") return nl_ranger_history_attention(inputs)
	if (locale === "pl") return pl_ranger_history_attention(inputs)
	if (locale === "pt") return pt_ranger_history_attention(inputs)
	if (locale === "ru") return ru_ranger_history_attention(inputs)
	if (locale === "sv") return sv_ranger_history_attention(inputs)
	if (locale === "tr") return tr_ranger_history_attention(inputs)
	if (locale === "zh") return zh_ranger_history_attention(inputs)
	if (locale === "ja") return ja_ranger_history_attention(inputs)
	return en_ranger_history_attention(inputs)
});
