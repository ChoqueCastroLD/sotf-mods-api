/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_DiscardInputs */

const en_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
};

const es_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar cambios`)
};

const de_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen verwerfen`)
};

const fr_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler les modifications`)
};

const it_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarta le modifiche`)
};

const nl_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen negeren`)
};

const pl_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć zmiany`)
};

const pt_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar alterações`)
};

const ru_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить изменения`)
};

const sv_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förkasta ändringar`)
};

const tr_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikleri at`)
};

const zh_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃更改`)
};

const ja_jams_editor_discard = /** @type {(inputs: Jams_Editor_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を破棄`)
};

/**
* | output |
* | --- |
* | "Discard changes" |
*
* @param {Jams_Editor_DiscardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_discard = /** @type {((inputs?: Jams_Editor_DiscardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_DiscardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_discard(inputs)
	if (locale === "de") return de_jams_editor_discard(inputs)
	if (locale === "fr") return fr_jams_editor_discard(inputs)
	if (locale === "it") return it_jams_editor_discard(inputs)
	if (locale === "nl") return nl_jams_editor_discard(inputs)
	if (locale === "pl") return pl_jams_editor_discard(inputs)
	if (locale === "pt") return pt_jams_editor_discard(inputs)
	if (locale === "ru") return ru_jams_editor_discard(inputs)
	if (locale === "sv") return sv_jams_editor_discard(inputs)
	if (locale === "tr") return tr_jams_editor_discard(inputs)
	if (locale === "zh") return zh_jams_editor_discard(inputs)
	if (locale === "ja") return ja_jams_editor_discard(inputs)
	return en_jams_editor_discard(inputs)
});
