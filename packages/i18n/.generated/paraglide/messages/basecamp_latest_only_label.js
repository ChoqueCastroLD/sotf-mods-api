/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Latest_Only_LabelInputs */

const en_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest version only`)
};

const es_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo la última versión`)
};

const de_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur neueste Version`)
};

const fr_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière version uniquement`)
};

const it_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo ultima versione`)
};

const nl_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen nieuwste versie`)
};

const pl_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko najnowsza wersja`)
};

const pt_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apenas a versão mais recente`)
};

const ru_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только последняя версия`)
};

const sv_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast senaste versionen`)
};

const tr_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca en son sürüm`)
};

const zh_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅最新版本`)
};

const ja_basecamp_latest_only_label = /** @type {(inputs: Basecamp_Latest_Only_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新バージョンのみ`)
};

/**
* | output |
* | --- |
* | "Latest version only" |
*
* @param {Basecamp_Latest_Only_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_latest_only_label = /** @type {((inputs?: Basecamp_Latest_Only_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Latest_Only_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_latest_only_label(inputs)
	if (locale === "de") return de_basecamp_latest_only_label(inputs)
	if (locale === "fr") return fr_basecamp_latest_only_label(inputs)
	if (locale === "it") return it_basecamp_latest_only_label(inputs)
	if (locale === "nl") return nl_basecamp_latest_only_label(inputs)
	if (locale === "pl") return pl_basecamp_latest_only_label(inputs)
	if (locale === "pt") return pt_basecamp_latest_only_label(inputs)
	if (locale === "ru") return ru_basecamp_latest_only_label(inputs)
	if (locale === "sv") return sv_basecamp_latest_only_label(inputs)
	if (locale === "tr") return tr_basecamp_latest_only_label(inputs)
	if (locale === "zh") return zh_basecamp_latest_only_label(inputs)
	if (locale === "ja") return ja_basecamp_latest_only_label(inputs)
	return en_basecamp_latest_only_label(inputs)
});
