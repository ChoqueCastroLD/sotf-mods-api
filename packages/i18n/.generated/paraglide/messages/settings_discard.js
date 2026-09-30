/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_DiscardInputs */

const en_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
};

const es_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar cambios`)
};

const de_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen verwerfen`)
};

const fr_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler les modifications`)
};

const it_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla le modifiche`)
};

const nl_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen negeren`)
};

const pl_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć zmiany`)
};

const pt_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar alterações`)
};

const ru_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить изменения`)
};

const sv_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förkasta ändringar`)
};

const tr_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikleri at`)
};

const zh_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃更改`)
};

const ja_settings_discard = /** @type {(inputs: Settings_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を破棄`)
};

/**
* | output |
* | --- |
* | "Discard changes" |
*
* @param {Settings_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_discard = /** @type {((inputs?: Settings_DiscardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_DiscardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_discard(inputs)
	if (locale === "de") return de_settings_discard(inputs)
	if (locale === "fr") return fr_settings_discard(inputs)
	if (locale === "it") return it_settings_discard(inputs)
	if (locale === "nl") return nl_settings_discard(inputs)
	if (locale === "pl") return pl_settings_discard(inputs)
	if (locale === "pt") return pt_settings_discard(inputs)
	if (locale === "ru") return ru_settings_discard(inputs)
	if (locale === "sv") return sv_settings_discard(inputs)
	if (locale === "tr") return tr_settings_discard(inputs)
	if (locale === "zh") return zh_settings_discard(inputs)
	if (locale === "ja") return ja_settings_discard(inputs)
	return en_settings_discard(inputs)
});
