/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_To_AnswerInputs */

const en_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To answer`)
};

const es_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por responder`)
};

const de_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu beantworten`)
};

const fr_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À traiter`)
};

const it_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da rispondere`)
};

const nl_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te beantwoorden`)
};

const pl_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do odpowiedzi`)
};

const pt_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para responder`)
};

const ru_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждут ответа`)
};

const sv_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att besvara`)
};

const tr_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt bekleyen`)
};

const zh_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待回复`)
};

const ja_basecamp_kpi_to_answer = /** @type {(inputs: Basecamp_Kpi_To_AnswerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信待ち`)
};

/**
* | output |
* | --- |
* | "To answer" |
*
* @param {Basecamp_Kpi_To_AnswerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_to_answer = /** @type {((inputs?: Basecamp_Kpi_To_AnswerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_To_AnswerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_to_answer(inputs)
	if (locale === "de") return de_basecamp_kpi_to_answer(inputs)
	if (locale === "fr") return fr_basecamp_kpi_to_answer(inputs)
	if (locale === "it") return it_basecamp_kpi_to_answer(inputs)
	if (locale === "nl") return nl_basecamp_kpi_to_answer(inputs)
	if (locale === "pl") return pl_basecamp_kpi_to_answer(inputs)
	if (locale === "pt") return pt_basecamp_kpi_to_answer(inputs)
	if (locale === "ru") return ru_basecamp_kpi_to_answer(inputs)
	if (locale === "sv") return sv_basecamp_kpi_to_answer(inputs)
	if (locale === "tr") return tr_basecamp_kpi_to_answer(inputs)
	if (locale === "zh") return zh_basecamp_kpi_to_answer(inputs)
	if (locale === "ja") return ja_basecamp_kpi_to_answer(inputs)
	return en_basecamp_kpi_to_answer(inputs)
});
