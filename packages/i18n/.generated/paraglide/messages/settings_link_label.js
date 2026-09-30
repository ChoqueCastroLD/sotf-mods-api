/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_LabelInputs */

const en_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label`)
};

const es_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texto`)
};

const de_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschriftung`)
};

const fr_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libellé`)
};

const it_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etichetta`)
};

const nl_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Label`)
};

const pl_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etykieta`)
};

const pt_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rótulo`)
};

const ru_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подпись`)
};

const sv_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etikett`)
};

const tr_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiket`)
};

const zh_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_settings_link_label = /** @type {(inputs: Settings_Link_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ラベル`)
};

/**
* | output |
* | --- |
* | "Label" |
*
* @param {Settings_Link_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_label = /** @type {((inputs?: Settings_Link_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_label(inputs)
	if (locale === "de") return de_settings_link_label(inputs)
	if (locale === "fr") return fr_settings_link_label(inputs)
	if (locale === "it") return it_settings_link_label(inputs)
	if (locale === "nl") return nl_settings_link_label(inputs)
	if (locale === "pl") return pl_settings_link_label(inputs)
	if (locale === "pt") return pt_settings_link_label(inputs)
	if (locale === "ru") return ru_settings_link_label(inputs)
	if (locale === "sv") return sv_settings_link_label(inputs)
	if (locale === "tr") return tr_settings_link_label(inputs)
	if (locale === "zh") return zh_settings_link_label(inputs)
	if (locale === "ja") return ja_settings_link_label(inputs)
	return en_settings_link_label(inputs)
});
