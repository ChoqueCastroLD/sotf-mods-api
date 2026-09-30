/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Changelog_NoneInputs */

const en_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No changelog for this version.`)
};

const es_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versión no tiene lista de cambios.`)
};

const de_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Änderungsliste für diese Version.`)
};

const fr_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de liste des changements pour cette version.`)
};

const it_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun elenco delle modifiche per questa versione.`)
};

const nl_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen wijzigingenlijst voor deze versie.`)
};

const pl_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta wersja nie ma listy zmian.`)
};

const pt_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versão não tem lista de alterações.`)
};

const ru_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У этой версии нет списка изменений.`)
};

const sv_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen ändringslista för den här versionen.`)
};

const tr_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürümün değişiklik listesi yok.`)
};

const zh_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本没有更新日志。`)
};

const ja_ranger_changelog_none = /** @type {(inputs: Ranger_Changelog_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンには変更履歴がありません。`)
};

/**
* | output |
* | --- |
* | "No changelog for this version." |
*
* @param {Ranger_Changelog_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_changelog_none = /** @type {((inputs?: Ranger_Changelog_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Changelog_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_changelog_none(inputs)
	if (locale === "de") return de_ranger_changelog_none(inputs)
	if (locale === "fr") return fr_ranger_changelog_none(inputs)
	if (locale === "it") return it_ranger_changelog_none(inputs)
	if (locale === "nl") return nl_ranger_changelog_none(inputs)
	if (locale === "pl") return pl_ranger_changelog_none(inputs)
	if (locale === "pt") return pt_ranger_changelog_none(inputs)
	if (locale === "ru") return ru_ranger_changelog_none(inputs)
	if (locale === "sv") return sv_ranger_changelog_none(inputs)
	if (locale === "tr") return tr_ranger_changelog_none(inputs)
	if (locale === "zh") return zh_ranger_changelog_none(inputs)
	if (locale === "ja") return ja_ranger_changelog_none(inputs)
	return en_ranger_changelog_none(inputs)
});
