/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Version_Status_ActiveInputs */

const en_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Available`)
};

const es_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible`)
};

const de_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verfügbar`)
};

const fr_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible`)
};

const it_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponibile`)
};

const nl_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschikbaar`)
};

const pl_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dostępna`)
};

const pt_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponível`)
};

const ru_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доступна`)
};

const sv_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillgänglig`)
};

const tr_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanılabilir`)
};

const zh_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const ja_basecamp_version_status_active = /** @type {(inputs: Basecamp_Version_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用可能`)
};

/**
* | output |
* | --- |
* | "Available" |
*
* @param {Basecamp_Version_Status_ActiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_version_status_active = /** @type {((inputs?: Basecamp_Version_Status_ActiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Version_Status_ActiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_version_status_active(inputs)
	if (locale === "de") return de_basecamp_version_status_active(inputs)
	if (locale === "fr") return fr_basecamp_version_status_active(inputs)
	if (locale === "it") return it_basecamp_version_status_active(inputs)
	if (locale === "nl") return nl_basecamp_version_status_active(inputs)
	if (locale === "pl") return pl_basecamp_version_status_active(inputs)
	if (locale === "pt") return pt_basecamp_version_status_active(inputs)
	if (locale === "ru") return ru_basecamp_version_status_active(inputs)
	if (locale === "sv") return sv_basecamp_version_status_active(inputs)
	if (locale === "tr") return tr_basecamp_version_status_active(inputs)
	if (locale === "zh") return zh_basecamp_version_status_active(inputs)
	if (locale === "ja") return ja_basecamp_version_status_active(inputs)
	return en_basecamp_version_status_active(inputs)
});
