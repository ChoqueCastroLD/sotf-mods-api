/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Entry_UnsafeInputs */

const en_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsafe path`)
};

const es_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruta insegura`)
};

const de_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsicherer Pfad`)
};

const fr_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chemin dangereux`)
};

const it_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Percorso non sicuro`)
};

const nl_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onveilig pad`)
};

const pl_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niebezpieczna ścieżka`)
};

const pt_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caminho inseguro`)
};

const ru_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опасный путь`)
};

const sv_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osäker sökväg`)
};

const tr_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvensiz yol`)
};

const zh_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不安全路径`)
};

const ja_upload_entry_unsafe = /** @type {(inputs: Upload_Entry_UnsafeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`危険なパス`)
};

/**
* | output |
* | --- |
* | "Unsafe path" |
*
* @param {Upload_Entry_UnsafeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_entry_unsafe = /** @type {((inputs?: Upload_Entry_UnsafeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Entry_UnsafeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_entry_unsafe(inputs)
	if (locale === "de") return de_upload_entry_unsafe(inputs)
	if (locale === "fr") return fr_upload_entry_unsafe(inputs)
	if (locale === "it") return it_upload_entry_unsafe(inputs)
	if (locale === "nl") return nl_upload_entry_unsafe(inputs)
	if (locale === "pl") return pl_upload_entry_unsafe(inputs)
	if (locale === "pt") return pt_upload_entry_unsafe(inputs)
	if (locale === "ru") return ru_upload_entry_unsafe(inputs)
	if (locale === "sv") return sv_upload_entry_unsafe(inputs)
	if (locale === "tr") return tr_upload_entry_unsafe(inputs)
	if (locale === "zh") return zh_upload_entry_unsafe(inputs)
	if (locale === "ja") return ja_upload_entry_unsafe(inputs)
	return en_upload_entry_unsafe(inputs)
});
