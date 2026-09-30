/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Version_Status_YankedInputs */

const en_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanked`)
};

const es_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const de_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückgezogen`)
};

const fr_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée`)
};

const it_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirata`)
};

const nl_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken`)
};

const pl_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofana`)
};

const pt_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const ru_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвана`)
};

const sv_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbakadragen`)
};

const tr_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekildi`)
};

const zh_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已撤回`)
};

const ja_basecamp_version_status_yanked = /** @type {(inputs: Basecamp_Version_Status_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げ済み`)
};

/**
* | output |
* | --- |
* | "Yanked" |
*
* @param {Basecamp_Version_Status_YankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_version_status_yanked = /** @type {((inputs?: Basecamp_Version_Status_YankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Version_Status_YankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_version_status_yanked(inputs)
	if (locale === "de") return de_basecamp_version_status_yanked(inputs)
	if (locale === "fr") return fr_basecamp_version_status_yanked(inputs)
	if (locale === "it") return it_basecamp_version_status_yanked(inputs)
	if (locale === "nl") return nl_basecamp_version_status_yanked(inputs)
	if (locale === "pl") return pl_basecamp_version_status_yanked(inputs)
	if (locale === "pt") return pt_basecamp_version_status_yanked(inputs)
	if (locale === "ru") return ru_basecamp_version_status_yanked(inputs)
	if (locale === "sv") return sv_basecamp_version_status_yanked(inputs)
	if (locale === "tr") return tr_basecamp_version_status_yanked(inputs)
	if (locale === "zh") return zh_basecamp_version_status_yanked(inputs)
	if (locale === "ja") return ja_basecamp_version_status_yanked(inputs)
	return en_basecamp_version_status_yanked(inputs)
});
