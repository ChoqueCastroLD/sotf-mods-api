/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Save_CleanInputs */

const en_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All changes saved.`)
};

const es_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los cambios guardados.`)
};

const de_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Änderungen gespeichert.`)
};

const fr_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les modifications sont enregistrées.`)
};

const it_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le modifiche sono salvate.`)
};

const nl_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle wijzigingen opgeslagen.`)
};

const pl_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie zmiany zapisane.`)
};

const pt_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as alterações foram salvas.`)
};

const ru_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все изменения сохранены.`)
};

const sv_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla ändringar sparade.`)
};

const tr_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm değişiklikler kaydedildi.`)
};

const zh_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有更改已保存。`)
};

const ja_basecamp_save_clean = /** @type {(inputs: Basecamp_Save_CleanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての変更を保存しました。`)
};

/**
* | output |
* | --- |
* | "All changes saved." |
*
* @param {Basecamp_Save_CleanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_save_clean = /** @type {((inputs?: Basecamp_Save_CleanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Save_CleanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_save_clean(inputs)
	if (locale === "de") return de_basecamp_save_clean(inputs)
	if (locale === "fr") return fr_basecamp_save_clean(inputs)
	if (locale === "it") return it_basecamp_save_clean(inputs)
	if (locale === "nl") return nl_basecamp_save_clean(inputs)
	if (locale === "pl") return pl_basecamp_save_clean(inputs)
	if (locale === "pt") return pt_basecamp_save_clean(inputs)
	if (locale === "ru") return ru_basecamp_save_clean(inputs)
	if (locale === "sv") return sv_basecamp_save_clean(inputs)
	if (locale === "tr") return tr_basecamp_save_clean(inputs)
	if (locale === "zh") return zh_basecamp_save_clean(inputs)
	if (locale === "ja") return ja_basecamp_save_clean(inputs)
	return en_basecamp_save_clean(inputs)
});
