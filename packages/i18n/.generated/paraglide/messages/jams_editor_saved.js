/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_SavedInputs */

const en_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam saved.`)
};

const es_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam guardado.`)
};

const de_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam gespeichert.`)
};

const fr_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam enregistré.`)
};

const it_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam salvato.`)
};

const nl_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam opgeslagen.`)
};

const pl_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam zapisany.`)
};

const pt_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam salvo.`)
};

const ru_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джем сохранён.`)
};

const sv_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jammen sparades.`)
};

const tr_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam kaydedildi.`)
};

const zh_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam 已保存。`)
};

const ja_jams_editor_saved = /** @type {(inputs: Jams_Editor_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを保存しました。`)
};

/**
* | output |
* | --- |
* | "Jam saved." |
*
* @param {Jams_Editor_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_saved = /** @type {((inputs?: Jams_Editor_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_saved(inputs)
	if (locale === "de") return de_jams_editor_saved(inputs)
	if (locale === "fr") return fr_jams_editor_saved(inputs)
	if (locale === "it") return it_jams_editor_saved(inputs)
	if (locale === "nl") return nl_jams_editor_saved(inputs)
	if (locale === "pl") return pl_jams_editor_saved(inputs)
	if (locale === "pt") return pt_jams_editor_saved(inputs)
	if (locale === "ru") return ru_jams_editor_saved(inputs)
	if (locale === "sv") return sv_jams_editor_saved(inputs)
	if (locale === "tr") return tr_jams_editor_saved(inputs)
	if (locale === "zh") return zh_jams_editor_saved(inputs)
	if (locale === "ja") return ja_jams_editor_saved(inputs)
	return en_jams_editor_saved(inputs)
});
