/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Me_Latest_VersionInputs */

const en_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Latest ${i?.version}`)
};

const es_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Última: ${i?.version}`)
};

const de_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neueste: ${i?.version}`)
};

const fr_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière : ${i?.version}`)
};

const it_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultima: ${i?.version}`)
};

const nl_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwste: ${i?.version}`)
};

const pl_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Najnowsza: ${i?.version}`)
};

const pt_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mais recente: ${i?.version}`)
};

const ru_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Последняя: ${i?.version}`)
};

const sv_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senaste: ${i?.version}`)
};

const tr_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En yeni: ${i?.version}`)
};

const zh_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新：${i?.version}`)
};

const ja_me_latest_version = /** @type {(inputs: Me_Latest_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新：${i?.version}`)
};

/**
* | output |
* | --- |
* | "Latest {version}" |
*
* @param {Me_Latest_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_latest_version = /** @type {((inputs: Me_Latest_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Latest_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_latest_version(inputs)
	if (locale === "de") return de_me_latest_version(inputs)
	if (locale === "fr") return fr_me_latest_version(inputs)
	if (locale === "it") return it_me_latest_version(inputs)
	if (locale === "nl") return nl_me_latest_version(inputs)
	if (locale === "pl") return pl_me_latest_version(inputs)
	if (locale === "pt") return pt_me_latest_version(inputs)
	if (locale === "ru") return ru_me_latest_version(inputs)
	if (locale === "sv") return sv_me_latest_version(inputs)
	if (locale === "tr") return tr_me_latest_version(inputs)
	if (locale === "zh") return zh_me_latest_version(inputs)
	if (locale === "ja") return ja_me_latest_version(inputs)
	return en_me_latest_version(inputs)
});
