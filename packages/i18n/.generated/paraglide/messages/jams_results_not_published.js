/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Results_Not_PublishedInputs */

const en_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results are not public yet.`)
};

const es_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los resultados aún no son públicos.`)
};

const de_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ergebnisse sind noch nicht öffentlich.`)
};

const fr_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les résultats ne sont pas encore publics.`)
};

const it_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I risultati non sono ancora pubblici.`)
};

const nl_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De resultaten zijn nog niet openbaar.`)
};

const pl_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki nie są jeszcze publiczne.`)
};

const pt_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os resultados ainda não são públicos.`)
};

const ru_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Итоги ещё не опубликованы.`)
};

const sv_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten är inte offentliga än.`)
};

const tr_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar henüz herkese açık değil.`)
};

const zh_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果尚未公开。`)
};

const ja_jams_results_not_published = /** @type {(inputs: Jams_Results_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果はまだ公開されていません。`)
};

/**
* | output |
* | --- |
* | "Results are not public yet." |
*
* @param {Jams_Results_Not_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_not_published = /** @type {((inputs?: Jams_Results_Not_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_Not_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_not_published(inputs)
	if (locale === "de") return de_jams_results_not_published(inputs)
	if (locale === "fr") return fr_jams_results_not_published(inputs)
	if (locale === "it") return it_jams_results_not_published(inputs)
	if (locale === "nl") return nl_jams_results_not_published(inputs)
	if (locale === "pl") return pl_jams_results_not_published(inputs)
	if (locale === "pt") return pt_jams_results_not_published(inputs)
	if (locale === "ru") return ru_jams_results_not_published(inputs)
	if (locale === "sv") return sv_jams_results_not_published(inputs)
	if (locale === "tr") return tr_jams_results_not_published(inputs)
	if (locale === "zh") return zh_jams_results_not_published(inputs)
	if (locale === "ja") return ja_jams_results_not_published(inputs)
	return en_jams_results_not_published(inputs)
});
