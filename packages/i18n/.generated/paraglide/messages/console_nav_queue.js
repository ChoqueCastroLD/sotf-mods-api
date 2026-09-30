/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_QueueInputs */

const en_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue`)
};

const es_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cola`)
};

const de_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warteschlange`)
};

const fr_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File d’attente`)
};

const it_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coda`)
};

const nl_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtrij`)
};

const pl_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejka`)
};

const pt_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fila`)
};

const ru_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очередь`)
};

const sv_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kö`)
};

const tr_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuyruk`)
};

const zh_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`队列`)
};

const ja_console_nav_queue = /** @type {(inputs: Console_Nav_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キュー`)
};

/**
* | output |
* | --- |
* | "Queue" |
*
* @param {Console_Nav_QueueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_queue = /** @type {((inputs?: Console_Nav_QueueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_QueueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_queue(inputs)
	if (locale === "de") return de_console_nav_queue(inputs)
	if (locale === "fr") return fr_console_nav_queue(inputs)
	if (locale === "it") return it_console_nav_queue(inputs)
	if (locale === "nl") return nl_console_nav_queue(inputs)
	if (locale === "pl") return pl_console_nav_queue(inputs)
	if (locale === "pt") return pt_console_nav_queue(inputs)
	if (locale === "ru") return ru_console_nav_queue(inputs)
	if (locale === "sv") return sv_console_nav_queue(inputs)
	if (locale === "tr") return tr_console_nav_queue(inputs)
	if (locale === "zh") return zh_console_nav_queue(inputs)
	if (locale === "ja") return ja_console_nav_queue(inputs)
	return en_console_nav_queue(inputs)
});
