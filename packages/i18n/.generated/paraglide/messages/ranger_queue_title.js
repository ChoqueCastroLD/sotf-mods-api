/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Queue_TitleInputs */

const en_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation queue`)
};

const es_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cola de moderación`)
};

const de_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderationswarteschlange`)
};

const fr_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File de modération`)
};

const it_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coda di moderazione`)
};

const nl_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatiewachtrij`)
};

const pl_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejka moderacji`)
};

const pt_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fila de moderação`)
};

const ru_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очередь модерации`)
};

const sv_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modereringskö`)
};

const tr_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon kuyruğu`)
};

const zh_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核队列`)
};

const ja_ranger_queue_title = /** @type {(inputs: Ranger_Queue_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーションキュー`)
};

/**
* | output |
* | --- |
* | "Moderation queue" |
*
* @param {Ranger_Queue_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_queue_title = /** @type {((inputs?: Ranger_Queue_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Queue_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_queue_title(inputs)
	if (locale === "de") return de_ranger_queue_title(inputs)
	if (locale === "fr") return fr_ranger_queue_title(inputs)
	if (locale === "it") return it_ranger_queue_title(inputs)
	if (locale === "nl") return nl_ranger_queue_title(inputs)
	if (locale === "pl") return pl_ranger_queue_title(inputs)
	if (locale === "pt") return pt_ranger_queue_title(inputs)
	if (locale === "ru") return ru_ranger_queue_title(inputs)
	if (locale === "sv") return sv_ranger_queue_title(inputs)
	if (locale === "tr") return tr_ranger_queue_title(inputs)
	if (locale === "zh") return zh_ranger_queue_title(inputs)
	if (locale === "ja") return ja_ranger_queue_title(inputs)
	return en_ranger_queue_title(inputs)
});
