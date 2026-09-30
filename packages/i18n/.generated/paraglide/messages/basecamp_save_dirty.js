/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Save_DirtyInputs */

const en_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unsaved changes.`)
};

const es_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tienes cambios sin guardar.`)
};

const de_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast ungespeicherte Änderungen.`)
};

const fr_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu as des modifications non enregistrées.`)
};

const it_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai modifiche non salvate.`)
};

const nl_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt niet-opgeslagen wijzigingen.`)
};

const pl_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masz niezapisane zmiany.`)
};

const pt_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você tem alterações não salvas.`)
};

const ru_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Есть несохранённые изменения.`)
};

const sv_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har osparade ändringar.`)
};

const tr_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişikliklerin var.`)
};

const zh_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改。`)
};

const ja_basecamp_save_dirty = /** @type {(inputs: Basecamp_Save_DirtyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更があります。`)
};

/**
* | output |
* | --- |
* | "You have unsaved changes." |
*
* @param {Basecamp_Save_DirtyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_save_dirty = /** @type {((inputs?: Basecamp_Save_DirtyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Save_DirtyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_save_dirty(inputs)
	if (locale === "de") return de_basecamp_save_dirty(inputs)
	if (locale === "fr") return fr_basecamp_save_dirty(inputs)
	if (locale === "it") return it_basecamp_save_dirty(inputs)
	if (locale === "nl") return nl_basecamp_save_dirty(inputs)
	if (locale === "pl") return pl_basecamp_save_dirty(inputs)
	if (locale === "pt") return pt_basecamp_save_dirty(inputs)
	if (locale === "ru") return ru_basecamp_save_dirty(inputs)
	if (locale === "sv") return sv_basecamp_save_dirty(inputs)
	if (locale === "tr") return tr_basecamp_save_dirty(inputs)
	if (locale === "zh") return zh_basecamp_save_dirty(inputs)
	if (locale === "ja") return ja_basecamp_save_dirty(inputs)
	return en_basecamp_save_dirty(inputs)
});
