/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_RestoreInputs */

const en_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore`)
};

const es_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const de_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiederherstellen`)
};

const fr_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rétablir`)
};

const it_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripristina`)
};

const nl_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herstellen`)
};

const pl_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przywróć`)
};

const pt_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const ru_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Восстановить`)
};

const sv_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ`)
};

const tr_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri yükle`)
};

const zh_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复`)
};

const ja_jams_entries_restore = /** @type {(inputs: Jams_Entries_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Restore" |
*
* @param {Jams_Entries_RestoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_restore = /** @type {((inputs?: Jams_Entries_RestoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_RestoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_restore(inputs)
	if (locale === "de") return de_jams_entries_restore(inputs)
	if (locale === "fr") return fr_jams_entries_restore(inputs)
	if (locale === "it") return it_jams_entries_restore(inputs)
	if (locale === "nl") return nl_jams_entries_restore(inputs)
	if (locale === "pl") return pl_jams_entries_restore(inputs)
	if (locale === "pt") return pt_jams_entries_restore(inputs)
	if (locale === "ru") return ru_jams_entries_restore(inputs)
	if (locale === "sv") return sv_jams_entries_restore(inputs)
	if (locale === "tr") return tr_jams_entries_restore(inputs)
	if (locale === "zh") return zh_jams_entries_restore(inputs)
	if (locale === "ja") return ja_jams_entries_restore(inputs)
	return en_jams_entries_restore(inputs)
});
