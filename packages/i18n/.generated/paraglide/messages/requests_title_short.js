/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown> }} Requests_Title_ShortInputs */

const en_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("en", i?.min, {});return /** @type {LocalizedString} */ (`The title needs at least ${min__number} characters.`)
};

const es_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("es", i?.min, {});return /** @type {LocalizedString} */ (`El título necesita al menos ${min__number} caracteres.`)
};

const de_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("de", i?.min, {});return /** @type {LocalizedString} */ (`Der Titel braucht mindestens ${min__number} Zeichen.`)
};

const fr_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("fr", i?.min, {});return /** @type {LocalizedString} */ (`Le titre doit compter au moins ${min__number} caractères.`)
};

const it_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("it", i?.min, {});return /** @type {LocalizedString} */ (`Il titolo richiede almeno ${min__number} caratteri.`)
};

const nl_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("nl", i?.min, {});return /** @type {LocalizedString} */ (`De titel heeft minstens ${min__number} tekens nodig.`)
};

const pl_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pl", i?.min, {});return /** @type {LocalizedString} */ (`Tytuł musi mieć co najmniej ${min__number} znaków.`)
};

const pt_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pt", i?.min, {});return /** @type {LocalizedString} */ (`O título precisa de pelo menos ${min__number} caracteres.`)
};

const ru_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ru", i?.min, {});return /** @type {LocalizedString} */ (`Заголовок должен содержать не менее ${min__number} символов.`)
};

const sv_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("sv", i?.min, {});return /** @type {LocalizedString} */ (`Titeln måste vara minst ${min__number} tecken.`)
};

const tr_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("tr", i?.min, {});return /** @type {LocalizedString} */ (`Başlık en az ${min__number} karakter olmalı.`)
};

const zh_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("zh", i?.min, {});return /** @type {LocalizedString} */ (`标题至少需要 ${min__number} 个字符。`)
};

const ja_requests_title_short = /** @type {(inputs: Requests_Title_ShortInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ja", i?.min, {});return /** @type {LocalizedString} */ (`タイトルは ${min__number} 文字以上必要です。`)
};

/**
* | output |
* | --- |
* | "The title needs at least {min__number} characters." |
*
* @param {Requests_Title_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_title_short = /** @type {((inputs: Requests_Title_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Title_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_title_short(inputs)
	if (locale === "de") return de_requests_title_short(inputs)
	if (locale === "fr") return fr_requests_title_short(inputs)
	if (locale === "it") return it_requests_title_short(inputs)
	if (locale === "nl") return nl_requests_title_short(inputs)
	if (locale === "pl") return pl_requests_title_short(inputs)
	if (locale === "pt") return pt_requests_title_short(inputs)
	if (locale === "ru") return ru_requests_title_short(inputs)
	if (locale === "sv") return sv_requests_title_short(inputs)
	if (locale === "tr") return tr_requests_title_short(inputs)
	if (locale === "zh") return zh_requests_title_short(inputs)
	if (locale === "ja") return ja_requests_title_short(inputs)
	return en_requests_title_short(inputs)
});
