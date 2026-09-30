/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_State_AnsweredInputs */

const en_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Answered`)
};

const es_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respondido`)
};

const de_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantwortet`)
};

const fr_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répondu`)
};

const it_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposto`)
};

const nl_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beantwoord`)
};

const pl_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odpowiedziano`)
};

const pt_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respondido`)
};

const ru_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отвечено`)
};

const sv_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besvarad`)
};

const tr_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtlandı`)
};

const zh_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已回复`)
};

const ja_basecamp_inbox_state_answered = /** @type {(inputs: Basecamp_Inbox_State_AnsweredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信済み`)
};

/**
* | output |
* | --- |
* | "Answered" |
*
* @param {Basecamp_Inbox_State_AnsweredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_state_answered = /** @type {((inputs?: Basecamp_Inbox_State_AnsweredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_State_AnsweredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_state_answered(inputs)
	if (locale === "de") return de_basecamp_inbox_state_answered(inputs)
	if (locale === "fr") return fr_basecamp_inbox_state_answered(inputs)
	if (locale === "it") return it_basecamp_inbox_state_answered(inputs)
	if (locale === "nl") return nl_basecamp_inbox_state_answered(inputs)
	if (locale === "pl") return pl_basecamp_inbox_state_answered(inputs)
	if (locale === "pt") return pt_basecamp_inbox_state_answered(inputs)
	if (locale === "ru") return ru_basecamp_inbox_state_answered(inputs)
	if (locale === "sv") return sv_basecamp_inbox_state_answered(inputs)
	if (locale === "tr") return tr_basecamp_inbox_state_answered(inputs)
	if (locale === "zh") return zh_basecamp_inbox_state_answered(inputs)
	if (locale === "ja") return ja_basecamp_inbox_state_answered(inputs)
	return en_basecamp_inbox_state_answered(inputs)
});
