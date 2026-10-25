/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Version_Latest_OnlyInputs */

const en_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest version only`)
};

const es_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo la última versión`)
};

const de_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur neueste Version`)
};

const fr_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière version uniquement`)
};

const it_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo ultima versione`)
};

const nl_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen nieuwste versie`)
};

const pl_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko najnowsza wersja`)
};

const pt_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apenas a versão mais recente`)
};

const ru_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только последняя версия`)
};

const sv_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast senaste versionen`)
};

const tr_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca en son sürüm`)
};

const zh_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限最新版本`)
};

const ja_ui_domain_version_latest_only = /** @type {(inputs: Ui_Domain_Version_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新バージョンのみ`)
};

/**
* | output |
* | --- |
* | "Latest version only" |
*
* @param {Ui_Domain_Version_Latest_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_latest_only = /** @type {((inputs?: Ui_Domain_Version_Latest_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_Latest_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_latest_only(inputs)
	if (locale === "de") return de_ui_domain_version_latest_only(inputs)
	if (locale === "fr") return fr_ui_domain_version_latest_only(inputs)
	if (locale === "it") return it_ui_domain_version_latest_only(inputs)
	if (locale === "nl") return nl_ui_domain_version_latest_only(inputs)
	if (locale === "pl") return pl_ui_domain_version_latest_only(inputs)
	if (locale === "pt") return pt_ui_domain_version_latest_only(inputs)
	if (locale === "ru") return ru_ui_domain_version_latest_only(inputs)
	if (locale === "sv") return sv_ui_domain_version_latest_only(inputs)
	if (locale === "tr") return tr_ui_domain_version_latest_only(inputs)
	if (locale === "zh") return zh_ui_domain_version_latest_only(inputs)
	if (locale === "ja") return ja_ui_domain_version_latest_only(inputs)
	return en_ui_domain_version_latest_only(inputs)
});
