/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_PriorityInputs */

const en_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The priority must be a whole number.`)
};

const es_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La prioridad debe ser un número entero.`)
};

const de_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Priorität muss eine ganze Zahl sein.`)
};

const fr_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La priorité doit être un nombre entier.`)
};

const it_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La priorità deve essere un numero intero.`)
};

const nl_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De prioriteit moet een geheel getal zijn.`)
};

const pl_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priorytet musi być liczbą całkowitą.`)
};

const pt_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A prioridade precisa ser um número inteiro.`)
};

const ru_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приоритет должен быть целым числом.`)
};

const sv_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prioriteten måste vara ett heltal.`)
};

const tr_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öncelik bir tam sayı olmalı.`)
};

const zh_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`优先级必须是整数。`)
};

const ja_upload_issue_invalid_priority = /** @type {(inputs: Upload_Issue_Invalid_PriorityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`優先度は整数にしてください。`)
};

/**
* | output |
* | --- |
* | "The priority must be a whole number." |
*
* @param {Upload_Issue_Invalid_PriorityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_priority = /** @type {((inputs?: Upload_Issue_Invalid_PriorityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_PriorityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_priority(inputs)
	if (locale === "de") return de_upload_issue_invalid_priority(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_priority(inputs)
	if (locale === "it") return it_upload_issue_invalid_priority(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_priority(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_priority(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_priority(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_priority(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_priority(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_priority(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_priority(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_priority(inputs)
	return en_upload_issue_invalid_priority(inputs)
});
