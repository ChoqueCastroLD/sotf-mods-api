/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, version: NonNullable<unknown> }} Signals_Version_PublishedInputs */

const en_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} was released`)
};

const es_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se ha publicado ${i?.mod} ${i?.version}`)
};

const de_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} wurde veröffentlicht`)
};

const fr_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} a été publié`)
};

const it_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} è stata pubblicata`)
};

const nl_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} is uitgebracht`)
};

const pl_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wydano ${i?.mod} ${i?.version}`)
};

const pt_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} foi lançado`)
};

const ru_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вышла новая версия: ${i?.mod} ${i?.version}`)
};

const sv_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} har släppts`)
};

const tr_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} yayımlandı`)
};

const zh_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} 已发布`)
};

const ja_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} が公開されました`)
};

/**
* | output |
* | --- |
* | "{mod} {version} was released" |
*
* @param {Signals_Version_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_version_published = /** @type {((inputs: Signals_Version_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Version_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_version_published(inputs)
	if (locale === "de") return de_signals_version_published(inputs)
	if (locale === "fr") return fr_signals_version_published(inputs)
	if (locale === "it") return it_signals_version_published(inputs)
	if (locale === "nl") return nl_signals_version_published(inputs)
	if (locale === "pl") return pl_signals_version_published(inputs)
	if (locale === "pt") return pt_signals_version_published(inputs)
	if (locale === "ru") return ru_signals_version_published(inputs)
	if (locale === "sv") return sv_signals_version_published(inputs)
	if (locale === "tr") return tr_signals_version_published(inputs)
	if (locale === "zh") return zh_signals_version_published(inputs)
	if (locale === "ja") return ja_signals_version_published(inputs)
	return en_signals_version_published(inputs)
});
