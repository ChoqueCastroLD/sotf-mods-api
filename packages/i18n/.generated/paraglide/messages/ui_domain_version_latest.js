/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Version_LatestInputs */

const en_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest`)
};

const es_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última`)
};

const de_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière`)
};

const it_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima`)
};

const nl_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsza`)
};

const pt_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recente`)
};

const ru_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя`)
};

const sv_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_ui_domain_version_latest = /** @type {(inputs: Ui_Domain_Version_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

/**
* | output |
* | --- |
* | "Latest" |
*
* @param {Ui_Domain_Version_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_latest = /** @type {((inputs?: Ui_Domain_Version_LatestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_LatestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_latest(inputs)
	if (locale === "de") return de_ui_domain_version_latest(inputs)
	if (locale === "fr") return fr_ui_domain_version_latest(inputs)
	if (locale === "it") return it_ui_domain_version_latest(inputs)
	if (locale === "nl") return nl_ui_domain_version_latest(inputs)
	if (locale === "pl") return pl_ui_domain_version_latest(inputs)
	if (locale === "pt") return pt_ui_domain_version_latest(inputs)
	if (locale === "ru") return ru_ui_domain_version_latest(inputs)
	if (locale === "sv") return sv_ui_domain_version_latest(inputs)
	if (locale === "tr") return tr_ui_domain_version_latest(inputs)
	if (locale === "zh") return zh_ui_domain_version_latest(inputs)
	if (locale === "ja") return ja_ui_domain_version_latest(inputs)
	return en_ui_domain_version_latest(inputs)
});
