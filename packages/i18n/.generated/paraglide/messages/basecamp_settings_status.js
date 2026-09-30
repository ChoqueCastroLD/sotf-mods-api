/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_StatusInputs */

const en_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const es_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État`)
};

const it_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan`)
};

const pt_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const ru_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус`)
};

const sv_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const tr_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_basecamp_settings_status = /** @type {(inputs: Basecamp_Settings_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Basecamp_Settings_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_status = /** @type {((inputs?: Basecamp_Settings_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_status(inputs)
	if (locale === "de") return de_basecamp_settings_status(inputs)
	if (locale === "fr") return fr_basecamp_settings_status(inputs)
	if (locale === "it") return it_basecamp_settings_status(inputs)
	if (locale === "nl") return nl_basecamp_settings_status(inputs)
	if (locale === "pl") return pl_basecamp_settings_status(inputs)
	if (locale === "pt") return pt_basecamp_settings_status(inputs)
	if (locale === "ru") return ru_basecamp_settings_status(inputs)
	if (locale === "sv") return sv_basecamp_settings_status(inputs)
	if (locale === "tr") return tr_basecamp_settings_status(inputs)
	if (locale === "zh") return zh_basecamp_settings_status(inputs)
	if (locale === "ja") return ja_basecamp_settings_status(inputs)
	return en_basecamp_settings_status(inputs)
});
