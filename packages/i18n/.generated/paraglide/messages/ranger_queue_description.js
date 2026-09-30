/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Queue_DescriptionInputs */

const en_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest and riskiest first. Every decision is logged and the author is notified.`)
};

const es_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primero lo más antiguo y lo más arriesgado. Cada decisión queda registrada y se avisa al autor.`)
};

const de_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste und riskanteste zuerst. Jede Entscheidung wird protokolliert und der Autor benachrichtigt.`)
};

const fr_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus anciens et les plus risqués d’abord. Chaque décision est consignée et l’auteur est prévenu.`)
};

const it_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima i più vecchi e i più rischiosi. Ogni decisione viene registrata e l’autore riceve un avviso.`)
};

const nl_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste en riskantste eerst. Elke beslissing wordt vastgelegd en de maker krijgt een melding.`)
};

const pl_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw najstarsze i najbardziej ryzykowne. Każda decyzja trafia do dziennika, a autor dostaje powiadomienie.`)
};

const pt_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiro os mais antigos e mais arriscados. Cada decisão fica registrada e o autor é avisado.`)
};

const ru_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала самое старое и самое рискованное. Каждое решение записывается, автор получает уведомление.`)
};

const sv_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldst och mest riskfyllt först. Varje beslut loggas och skaparen meddelas.`)
};

const tr_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en eski ve en riskli olanlar. Her karar kayda geçer ve yazara bildirilir.`)
};

const zh_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最久和风险最高的优先。每项决定都会记录，并通知作者。`)
};

const ja_ranger_queue_description = /** @type {(inputs: Ranger_Queue_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古いものとリスクの高いものから順に表示します。すべての判断は記録され、作者に通知されます。`)
};

/**
* | output |
* | --- |
* | "Oldest and riskiest first. Every decision is logged and the author is notified." |
*
* @param {Ranger_Queue_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_queue_description = /** @type {((inputs?: Ranger_Queue_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Queue_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_queue_description(inputs)
	if (locale === "de") return de_ranger_queue_description(inputs)
	if (locale === "fr") return fr_ranger_queue_description(inputs)
	if (locale === "it") return it_ranger_queue_description(inputs)
	if (locale === "nl") return nl_ranger_queue_description(inputs)
	if (locale === "pl") return pl_ranger_queue_description(inputs)
	if (locale === "pt") return pt_ranger_queue_description(inputs)
	if (locale === "ru") return ru_ranger_queue_description(inputs)
	if (locale === "sv") return sv_ranger_queue_description(inputs)
	if (locale === "tr") return tr_ranger_queue_description(inputs)
	if (locale === "zh") return zh_ranger_queue_description(inputs)
	if (locale === "ja") return ja_ranger_queue_description(inputs)
	return en_ranger_queue_description(inputs)
});
