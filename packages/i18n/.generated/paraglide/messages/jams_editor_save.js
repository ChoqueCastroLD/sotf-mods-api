/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_SaveInputs */

const en_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save changes`)
};

const es_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar cambios`)
};

const de_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen speichern`)
};

const fr_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer les modifications`)
};

const it_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva modifiche`)
};

const nl_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen opslaan`)
};

const pl_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz zmiany`)
};

const pt_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar alterações`)
};

const ru_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить изменения`)
};

const sv_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara ändringar`)
};

const tr_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklikleri kaydet`)
};

const zh_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存更改`)
};

const ja_jams_editor_save = /** @type {(inputs: Jams_Editor_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更を保存`)
};

/**
* | output |
* | --- |
* | "Save changes" |
*
* @param {Jams_Editor_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_save = /** @type {((inputs?: Jams_Editor_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_save(inputs)
	if (locale === "de") return de_jams_editor_save(inputs)
	if (locale === "fr") return fr_jams_editor_save(inputs)
	if (locale === "it") return it_jams_editor_save(inputs)
	if (locale === "nl") return nl_jams_editor_save(inputs)
	if (locale === "pl") return pl_jams_editor_save(inputs)
	if (locale === "pt") return pt_jams_editor_save(inputs)
	if (locale === "ru") return ru_jams_editor_save(inputs)
	if (locale === "sv") return sv_jams_editor_save(inputs)
	if (locale === "tr") return tr_jams_editor_save(inputs)
	if (locale === "zh") return zh_jams_editor_save(inputs)
	if (locale === "ja") return ja_jams_editor_save(inputs)
	return en_jams_editor_save(inputs)
});
