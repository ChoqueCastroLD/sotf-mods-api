/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Versions_EmptyInputs */

const en_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No published version yet.`)
};

const es_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay ninguna versión publicada.`)
};

const de_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine veröffentlichte Version.`)
};

const fr_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version publiée pour l’instant.`)
};

const it_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna versione pubblicata.`)
};

const nl_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen gepubliceerde versie.`)
};

const pl_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak opublikowanej wersji.`)
};

const pt_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há versão publicada.`)
};

const ru_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликованных версий пока нет.`)
};

const sv_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen publicerad version än.`)
};

const tr_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yayınlanmış sürüm yok.`)
};

const zh_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有已发布的版本。`)
};

const ja_builds_versions_empty = /** @type {(inputs: Builds_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開されたバージョンはまだありません。`)
};

/**
* | output |
* | --- |
* | "No published version yet." |
*
* @param {Builds_Versions_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_versions_empty = /** @type {((inputs?: Builds_Versions_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Versions_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_versions_empty(inputs)
	if (locale === "de") return de_builds_versions_empty(inputs)
	if (locale === "fr") return fr_builds_versions_empty(inputs)
	if (locale === "it") return it_builds_versions_empty(inputs)
	if (locale === "nl") return nl_builds_versions_empty(inputs)
	if (locale === "pl") return pl_builds_versions_empty(inputs)
	if (locale === "pt") return pt_builds_versions_empty(inputs)
	if (locale === "ru") return ru_builds_versions_empty(inputs)
	if (locale === "sv") return sv_builds_versions_empty(inputs)
	if (locale === "tr") return tr_builds_versions_empty(inputs)
	if (locale === "zh") return zh_builds_versions_empty(inputs)
	if (locale === "ja") return ja_builds_versions_empty(inputs)
	return en_builds_versions_empty(inputs)
});
