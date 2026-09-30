/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Versions_EmptyInputs */

const en_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No versions published yet.`)
};

const es_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay versiones publicadas.`)
};

const de_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Versionen veröffentlicht.`)
};

const fr_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version publiée pour l’instant.`)
};

const it_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna versione pubblicata finora.`)
};

const nl_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen versies gepubliceerd.`)
};

const pl_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie opublikowano jeszcze żadnej wersji.`)
};

const pt_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma versão publicada ainda.`)
};

const ru_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версий пока нет.`)
};

const sv_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga versioner publicerade än.`)
};

const tr_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yayımlanmış sürüm yok.`)
};

const zh_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有发布任何版本。`)
};

const ja_mod_versions_empty = /** @type {(inputs: Mod_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ公開されたバージョンはありません。`)
};

/**
* | output |
* | --- |
* | "No versions published yet." |
*
* @param {Mod_Versions_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_empty = /** @type {((inputs?: Mod_Versions_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_empty(inputs)
	if (locale === "de") return de_mod_versions_empty(inputs)
	if (locale === "fr") return fr_mod_versions_empty(inputs)
	if (locale === "it") return it_mod_versions_empty(inputs)
	if (locale === "nl") return nl_mod_versions_empty(inputs)
	if (locale === "pl") return pl_mod_versions_empty(inputs)
	if (locale === "pt") return pt_mod_versions_empty(inputs)
	if (locale === "ru") return ru_mod_versions_empty(inputs)
	if (locale === "sv") return sv_mod_versions_empty(inputs)
	if (locale === "tr") return tr_mod_versions_empty(inputs)
	if (locale === "zh") return zh_mod_versions_empty(inputs)
	if (locale === "ja") return ja_mod_versions_empty(inputs)
	return en_mod_versions_empty(inputs)
});
