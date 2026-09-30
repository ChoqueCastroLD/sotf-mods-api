/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_EmptyInputs */

const en_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No versions published yet.`)
};

const es_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay versiones publicadas.`)
};

const de_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Versionen veröffentlicht.`)
};

const fr_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune version publiée pour l’instant.`)
};

const it_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna versione pubblicata finora.`)
};

const nl_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen versies gepubliceerd.`)
};

const pl_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie opublikowano jeszcze żadnej wersji.`)
};

const pt_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma versão publicada ainda.`)
};

const ru_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версий пока нет.`)
};

const sv_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga versioner publicerade än.`)
};

const tr_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yayımlanmış sürüm yok.`)
};

const zh_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有发布任何版本。`)
};

const ja_ui_domain_versions_empty = /** @type {(inputs: Ui_Domain_Versions_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ公開されたバージョンはありません。`)
};

/**
* | output |
* | --- |
* | "No versions published yet." |
*
* @param {Ui_Domain_Versions_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_empty = /** @type {((inputs?: Ui_Domain_Versions_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_empty(inputs)
	if (locale === "de") return de_ui_domain_versions_empty(inputs)
	if (locale === "fr") return fr_ui_domain_versions_empty(inputs)
	if (locale === "it") return it_ui_domain_versions_empty(inputs)
	if (locale === "nl") return nl_ui_domain_versions_empty(inputs)
	if (locale === "pl") return pl_ui_domain_versions_empty(inputs)
	if (locale === "pt") return pt_ui_domain_versions_empty(inputs)
	if (locale === "ru") return ru_ui_domain_versions_empty(inputs)
	if (locale === "sv") return sv_ui_domain_versions_empty(inputs)
	if (locale === "tr") return tr_ui_domain_versions_empty(inputs)
	if (locale === "zh") return zh_ui_domain_versions_empty(inputs)
	if (locale === "ja") return ja_ui_domain_versions_empty(inputs)
	return en_ui_domain_versions_empty(inputs)
});
