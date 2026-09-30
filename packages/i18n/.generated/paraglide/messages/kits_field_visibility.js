/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_VisibilityInputs */

const en_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Who can see it`)
};

const es_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quién puede verlo`)
};

const de_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wer es sehen kann`)
};

const fr_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qui peut le voir`)
};

const it_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi può vederlo`)
};

const nl_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie het kan zien`)
};

const pl_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kto może go zobaczyć`)
};

const pt_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quem pode ver`)
};

const ru_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто может видеть`)
};

const sv_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vem som kan se det`)
};

const tr_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kimler görebilir`)
};

const zh_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谁可以查看`)
};

const ja_kits_field_visibility = /** @type {(inputs: Kits_Field_VisibilityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開範囲`)
};

/**
* | output |
* | --- |
* | "Who can see it" |
*
* @param {Kits_Field_VisibilityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_visibility = /** @type {((inputs?: Kits_Field_VisibilityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_VisibilityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_visibility(inputs)
	if (locale === "de") return de_kits_field_visibility(inputs)
	if (locale === "fr") return fr_kits_field_visibility(inputs)
	if (locale === "it") return it_kits_field_visibility(inputs)
	if (locale === "nl") return nl_kits_field_visibility(inputs)
	if (locale === "pl") return pl_kits_field_visibility(inputs)
	if (locale === "pt") return pt_kits_field_visibility(inputs)
	if (locale === "ru") return ru_kits_field_visibility(inputs)
	if (locale === "sv") return sv_kits_field_visibility(inputs)
	if (locale === "tr") return tr_kits_field_visibility(inputs)
	if (locale === "zh") return zh_kits_field_visibility(inputs)
	if (locale === "ja") return ja_kits_field_visibility(inputs)
	return en_kits_field_visibility(inputs)
});
