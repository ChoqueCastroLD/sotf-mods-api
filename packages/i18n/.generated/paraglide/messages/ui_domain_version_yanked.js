/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Version_YankedInputs */

const en_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanked`)
};

const es_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const de_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückgezogen`)
};

const fr_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée`)
};

const it_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirata`)
};

const nl_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken`)
};

const pl_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofana`)
};

const pt_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const ru_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвана`)
};

const sv_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbakadragen`)
};

const tr_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekildi`)
};

const zh_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已撤回`)
};

const ja_ui_domain_version_yanked = /** @type {(inputs: Ui_Domain_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げ済み`)
};

/**
* | output |
* | --- |
* | "Yanked" |
*
* @param {Ui_Domain_Version_YankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_yanked = /** @type {((inputs?: Ui_Domain_Version_YankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_YankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_yanked(inputs)
	if (locale === "de") return de_ui_domain_version_yanked(inputs)
	if (locale === "fr") return fr_ui_domain_version_yanked(inputs)
	if (locale === "it") return it_ui_domain_version_yanked(inputs)
	if (locale === "nl") return nl_ui_domain_version_yanked(inputs)
	if (locale === "pl") return pl_ui_domain_version_yanked(inputs)
	if (locale === "pt") return pt_ui_domain_version_yanked(inputs)
	if (locale === "ru") return ru_ui_domain_version_yanked(inputs)
	if (locale === "sv") return sv_ui_domain_version_yanked(inputs)
	if (locale === "tr") return tr_ui_domain_version_yanked(inputs)
	if (locale === "zh") return zh_ui_domain_version_yanked(inputs)
	if (locale === "ja") return ja_ui_domain_version_yanked(inputs)
	return en_ui_domain_version_yanked(inputs)
});
