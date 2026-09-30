/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_RemovedInputs */

const en_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translation removed`)
};

const es_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducción eliminada`)
};

const de_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzung entfernt`)
};

const fr_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduction supprimée`)
};

const it_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzione rimossa`)
};

const nl_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaling verwijderd`)
};

const pl_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięto tłumaczenie`)
};

const pt_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradução removida`)
};

const ru_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перевод удалён`)
};

const sv_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättningen togs bort`)
};

const tr_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviri kaldırıldı`)
};

const zh_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`译文已移除`)
};

const ja_translations_removed = /** @type {(inputs: Translations_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳を削除しました`)
};

/**
* | output |
* | --- |
* | "Translation removed" |
*
* @param {Translations_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_removed = /** @type {((inputs?: Translations_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_removed(inputs)
	if (locale === "de") return de_translations_removed(inputs)
	if (locale === "fr") return fr_translations_removed(inputs)
	if (locale === "it") return it_translations_removed(inputs)
	if (locale === "nl") return nl_translations_removed(inputs)
	if (locale === "pl") return pl_translations_removed(inputs)
	if (locale === "pt") return pt_translations_removed(inputs)
	if (locale === "ru") return ru_translations_removed(inputs)
	if (locale === "sv") return sv_translations_removed(inputs)
	if (locale === "tr") return tr_translations_removed(inputs)
	if (locale === "zh") return zh_translations_removed(inputs)
	if (locale === "ja") return ja_translations_removed(inputs)
	return en_translations_removed(inputs)
});
